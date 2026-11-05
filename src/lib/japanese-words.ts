import { toRomaji } from "wanakana";
import jmdict from "$lib/data/japanese-words-jmdict.json";

export interface JapaneseWord {
  word: string;
  answers: string[];
}

// Put the preferred romanization first; additional entries are accepted variants.
// Katakana also accepts the familiar source word where appropriate.
const curatedWords: Record<"hiragana" | "katakana", JapaneseWord[]> = {
  hiragana: [
    { word: "ねこ", answers: ["neko"] },
    { word: "いぬ", answers: ["inu"] },
    { word: "とり", answers: ["tori"] },
    { word: "さかな", answers: ["sakana"] },
    { word: "みず", answers: ["mizu"] },
    { word: "おちゃ", answers: ["ocha"] },
    { word: "ごはん", answers: ["gohan"] },
    { word: "やま", answers: ["yama"] },
    { word: "かわ", answers: ["kawa"] },
    { word: "うみ", answers: ["umi"] },
    { word: "そら", answers: ["sora"] },
    { word: "はな", answers: ["hana"] },
    { word: "あめ", answers: ["ame"] },
    { word: "ゆき", answers: ["yuki"] },
    { word: "かぜ", answers: ["kaze"] },
    { word: "つき", answers: ["tsuki", "tuki"] },
    { word: "ほし", answers: ["hoshi", "hosi"] },
    { word: "ひと", answers: ["hito"] },
    { word: "ともだち", answers: ["tomodachi", "tomodati"] },
    { word: "かぞく", answers: ["kazoku"] },
    { word: "こども", answers: ["kodomo"] },
    { word: "おとな", answers: ["otona"] },
    { word: "せんせい", answers: ["sensei", "sensee"] },
    { word: "がっこう", answers: ["gakkou", "gakkoo"] },
    { word: "ほん", answers: ["hon"] },
    { word: "つくえ", answers: ["tsukue", "tukue"] },
    { word: "いす", answers: ["isu"] },
    { word: "くるま", answers: ["kuruma"] },
    { word: "でんしゃ", answers: ["densha", "densya"] },
    { word: "じてんしゃ", answers: ["jitensha", "zitensya"] },
    { word: "えき", answers: ["eki"] },
    { word: "みち", answers: ["michi", "miti"] },
    { word: "まち", answers: ["machi", "mati"] },
    { word: "いえ", answers: ["ie"] },
    { word: "へや", answers: ["heya"] },
    { word: "まど", answers: ["mado"] },
    { word: "かぎ", answers: ["kagi"] },
    { word: "くつ", answers: ["kutsu", "kutu"] },
    { word: "かばん", answers: ["kaban"] },
    { word: "とけい", answers: ["tokei", "tokee"] },
    { word: "あさ", answers: ["asa"] },
    { word: "ひる", answers: ["hiru"] },
    { word: "よる", answers: ["yoru"] },
    { word: "きょう", answers: ["kyou", "kyoo"] },
    { word: "あした", answers: ["ashita", "asita"] },
    { word: "きのう", answers: ["kinou", "kinoo"] },
    { word: "ありがとう", answers: ["arigatou", "arigatoo"] },
    { word: "おはよう", answers: ["ohayou", "ohayoo"] },
    { word: "こんにちは", answers: ["konnichiwa", "konnichiha", "konnitiha"] },
    { word: "さようなら", answers: ["sayounara", "sayoonara"] },
  ],
  katakana: [
    { word: "コーヒー", answers: ["koohii", "coffee"] },
    { word: "ティー", answers: ["tii", "tea"] },
    { word: "ミルク", answers: ["miruku", "milk"] },
    { word: "パン", answers: ["pan", "pain"] },
    { word: "ケーキ", answers: ["keeki", "cake"] },
    { word: "チーズ", answers: ["chiizu", "cheese"] },
    { word: "バター", answers: ["bataa", "butter"] },
    { word: "チョコレート", answers: ["chokoreeto", "chocolate", "chocolat"] },
    { word: "アイスクリーム", answers: ["aisukuriimu", "icecream"] },
    { word: "サラダ", answers: ["sarada", "salad", "salade"] },
    { word: "スープ", answers: ["suupu", "soup", "soupe"] },
    { word: "ピザ", answers: ["piza", "pizza"] },
    { word: "パスタ", answers: ["pasuta", "pasta"] },
    { word: "ハンバーガー", answers: ["hanbaagaa", "hamburger"] },
    { word: "サンドイッチ", answers: ["sandoicchi", "sandwich"] },
    { word: "ジュース", answers: ["juusu", "juice"] },
    { word: "ビール", answers: ["biiru", "beer"] },
    { word: "ワイン", answers: ["wain", "wine"] },
    { word: "バナナ", answers: ["banana"] },
    { word: "オレンジ", answers: ["orenji", "orange"] },
    { word: "レモン", answers: ["remon", "lemon"] },
    { word: "トマト", answers: ["tomato"] },
    { word: "ホテル", answers: ["hoteru", "hotel"] },
    { word: "レストラン", answers: ["resutoran", "restaurant"] },
    { word: "カフェ", answers: ["kafe", "cafe", "café"] },
    { word: "タクシー", answers: ["takushii", "taxi"] },
    { word: "バス", answers: ["basu", "bus"] },
    { word: "トイレ", answers: ["toire", "toilet"] },
    { word: "テレビ", answers: ["terebi", "television"] },
    { word: "ラジオ", answers: ["rajio", "radio"] },
    { word: "カメラ", answers: ["kamera", "camera"] },
    { word: "コンピューター", answers: ["konpyuutaa", "computer"] },
    { word: "インターネット", answers: ["intaanetto", "internet"] },
    { word: "メール", answers: ["meeru", "mail"] },
    { word: "ペン", answers: ["pen"] },
    { word: "ノート", answers: ["nooto", "notebook"] },
    { word: "テーブル", answers: ["teeburu", "table"] },
    { word: "ソファ", answers: ["sofa"] },
    { word: "ベッド", answers: ["beddo", "bed"] },
    { word: "ドア", answers: ["doa", "door"] },
    { word: "シャツ", answers: ["shatsu", "shirt"] },
    { word: "セーター", answers: ["seetaa", "sweater"] },
    { word: "コート", answers: ["kooto", "coat"] },
    { word: "スカート", answers: ["sukaato", "skirt"] },
    { word: "スポーツ", answers: ["supootsu", "sports"] },
    { word: "テニス", answers: ["tenisu", "tennis"] },
    { word: "サッカー", answers: ["sakkaa", "soccer"] },
    { word: "ギター", answers: ["gitaa", "guitar"] },
    { word: "ピアノ", answers: ["piano"] },
    { word: "アニメ", answers: ["anime"] },
  ],
};

function buildWordList(script: "hiragana" | "katakana"): JapaneseWord[] {
  const words = new Map(
    curatedWords[script].map((entry) => [
      entry.word,
      {
        ...entry,
        answers: [...new Set([...entry.answers, toRomaji(entry.word)])],
      },
    ]),
  );
  for (const entry of jmdict.words[script]) {
    const existing = words.get(entry.word);
    words.set(entry.word, {
      word: entry.word,
      answers: [
        ...new Set([
          ...(existing?.answers ?? []),
          toRomaji(entry.word),
          ...("translations" in entry ? entry.translations : []),
        ]),
      ],
    });
  }
  return [...words.values()];
}

export const japaneseWords = {
  hiragana: buildWordList("hiragana"),
  katakana: buildWordList("katakana"),
};

// Word answers accept spaces (e.g. "ice cream") and forgiving capitalization.
export function normalizeJapaneseWordAnswer(answer: string): string {
  return toRomaji(answer.trim().toLowerCase().replace(/\s+/g, " "));
}

export function isJapaneseWordMode(mode: string): boolean {
  return mode === "words20" || mode === "words50";
}

export function getJapaneseWordAnswers(script: string, word: string): string[] {
  if (script !== "hiragana" && script !== "katakana") return [];
  return (
    japaneseWords[script].find((entry) => entry.word === word)?.answers ?? []
  );
}
