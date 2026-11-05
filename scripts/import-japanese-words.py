#!/usr/bin/env python3
"""Build a small JMdict-derived vocabulary pool using Python's standard library.

Usage: python3 scripts/import-japanese-words.py /path/to/JMdict_e.gz
Download: https://www.edrdg.org/pub/Nihongo/JMdict_e.gz
"""
import gzip
import hashlib
import json
from pathlib import Path
import re
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
LIMIT = 300  # Final pool size per script, including the original curated words.
source = Path(sys.argv[1])
compressed = source.read_bytes()
xml = gzip.decompress(compressed)
root = ET.fromstring(xml)
# Keep the original curated entries even if JMdict does not mark them common.
seed_text = (ROOT / "src/lib/japanese-words.ts").read_text()
seeds = {"hiragana": set(), "katakana": set()}
for word in re.findall(r'word: "([^"]+)"', seed_text):
    script = "hiragana" if re.fullmatch(r"[ぁ-ゖ]+", word) else "katakana"
    seeds[script].add(word)
candidates = {"hiragana": {}, "katakana": {}}
blocked = ("archaic", "obsolete", "rare", "vulgar", "derogatory", "slang", "sensitive")

for entry in root:
    entry_id = entry.findtext("ent_seq")
    for reading in entry.findall("r_ele"):
        word = reading.findtext("reb", "")
        if re.fullmatch(r"[ぁ-ゖ]{2,8}", word):
            script = "hiragana"
        elif re.fullmatch(r"[ァ-ヺ][ァ-ヺー]{1,11}", word):
            script = "katakana"
        else:
            continue
        if reading.findall("re_inf"):
            continue
        priorities = [p.text for p in reading.findall("re_pri")]
        common = set(priorities) & {"ichi1", "news1", "gai1", "spec1"}
        if not common and word not in seeds[script]:
            continue
        restrictions = [r.text for r in reading.findall("re_restr")]
        written_forms = set(restrictions or [k.text for k in entry.findall("k_ele/keb")])
        translations = []
        for sense in entry.findall("sense"):
            if sense.findall("stagr") and word not in [r.text for r in sense.findall("stagr")]:
                continue
            if sense.findall("stagk") and not written_forms.intersection(r.text for r in sense.findall("stagk")):
                continue
            tags = " ".join(t.text or "" for t in sense.findall("misc") + sense.findall("pos"))
            if any(tag in tags for tag in blocked) or sense.findall("dial") or (sense.findall("field") and word not in seeds[script]) or "proper" in tags:
                continue
            # Prefer ordinary nouns, with short dictionary translations suitable for typing.
            if word not in seeds[script] and not any((p.text or "").startswith("noun") for p in sense.findall("pos")):
                continue
            for gloss in sense.findall("gloss"):
                meaning = re.sub(r"\s+\([^()]*\)$", "", gloss.text or "")
                if gloss.get("g_type") or gloss.get("{http://www.w3.org/XML/1998/namespace}lang", "eng") != "eng":
                    continue
                if re.fullmatch(r"[A-Za-z]+(?:[ '-][A-Za-z]+){0,3}", meaning) and len(meaning) <= 32:
                    translations.append(meaning.lower())
            # Use only the first eligible sense to avoid unrelated secondary meanings.
            break
        translations = list(dict.fromkeys(translations))[:3]
        if not translations:
            continue
        frequency = min([int(p[2:]) for p in priorities if p and p.startswith("nf")] or [99])
        preferred = "gai1" if script == "katakana" else "ichi1"
        rank = (preferred not in common, -len(common), frequency, hashlib.sha256(word.encode()).hexdigest(), int(entry_id))
        item = {"word": word, "jmdictId": entry_id}
        if script == "katakana":
            item["translations"] = translations
        previous = candidates[script].get(word)
        if previous is None or rank < previous[0]:
            candidates[script][word] = (rank, item)

words = {}
for script, pool in candidates.items():
    original = [item for _, item in pool.values() if item["word"] in seeds[script]]
    additions = [item for _, item in sorted(pool.values(), key=lambda pair: pair[0]) if item["word"] not in seeds[script]]
    words[script] = original + additions[:LIMIT - len(seeds[script])]
    print(f"{script}: {len(seeds[script])} originals + {len(additions[:LIMIT - len(seeds[script])])} additions")

output = {
    "source": "https://www.edrdg.org/pub/Nihongo/JMdict_e.gz",
    "sourceSha256": hashlib.sha256(compressed).hexdigest(),
    "copyright": "JMdict: James William Breen and the Electronic Dictionary Research and Development Group",
    "license": "CC-BY-SA-4.0",
    "licenseUrl": "https://www.edrdg.org/edrdg/licence.html",
    "modifications": "Selected common kana readings, with short English glosses only for katakana and trailing parenthetical notes removed; limited to 300 words per script including curated originals.",
    "words": words,
}
(ROOT / "src/lib/data/japanese-words-jmdict.json").write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n")
