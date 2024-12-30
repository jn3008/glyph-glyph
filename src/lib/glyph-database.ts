// https://en.wikipedia.org/wiki/Hiragana#Table_of_hiragana

// prettier-ignore
export const hiragana = {
	monographs: [
		'あ', 'い', 'う', 'え', 'お',
		'か', 'き', 'く', 'け', 'こ',
		'さ', 'し', 'す', 'せ', 'そ',
		'た', 'ち', 'つ', 'て', 'と',
		'な', 'に', 'ぬ', 'ね', 'の',
		'ま', 'み', 'む', 'め', 'も',
		'は', 'ひ', 'ふ', 'へ', 'ほ',
		'や',       'ゆ',      'よ',
		'ら', 'り', 'る', 'れ', 'ろ',
		'わ',                  'を',
		'ん',
	],
	diacritics: [
		'が', 'ぎ', 'ぐ', 'げ', 'ご',
		'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
		'だ', 'ぢ', 'づ', 'で', 'ど',
		'ば', 'び', 'ぶ', 'べ', 'ぼ',
		'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'
	],
	digraphs: [
		'きゃ', 'きゅ', 'きょ',
		'しゃ', 'しゅ', 'しょ',
		'ちゃ', 'ちゅ', 'ちょ',
		'にゃ', 'にゅ', 'にょ',
		'ひゃ', 'ひゅ', 'ひょ',
		'みゃ', 'みゅ', 'みょ',
		'りゃ', 'りゅ', 'りょ'
	],
	digraphs_diacritics: [
		'ぎゃ', 'ぎゅ', 'ぎょ',
		'じゃ', 'じゅ', 'じょ',
		// ["ぢゃ", "ぢゅ", "ぢょ"],
		'びゃ', 'びゅ', 'びょ',
		'ぴゃ', 'ぴゅ', 'ぴょ'
	]
};

export const exceptional_answers = new Map([
  ["し", ["shi", "si"]],
  ["ち", ["chi", "ti"]],
  ["つ", ["tsu", "tu"]],
  ["ふ", ["fu", "hu"]],

  ["じ", ["ji", "zi"]],
  ["ぢ", ["di", "ji"]],
  ["づ", ["du", "zu"]],

  ["じゃ", ["ja", "jya"]],
  ["じゅ", ["ju", "jyu"]],
  ["じょ", ["jo", "jyo"]],
]);

// https://en.wikipedia.org/wiki/Greek_alphabet
// https://en.wikipedia.org/wiki/Greek_orthography#Digraphs_and_diphthongs
// https://www.foundalis.com/lan/grkalpha.htm
// prettier-ignore
export const greek = {
	lower_monographs: [
		'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'ς',
		'τ', 'υ', 'φ', 'χ', 'ψ', 'ω'
	],
	upper_monographs: [ // the only differences in the upper case characters is that 'S' appears once
		'Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', 'Μ', 'Ν', 'Ξ', 'Ο', 'Π', 'Ρ', 'Σ', 'Τ',
		'Υ', 'Φ', 'Χ', 'Ψ', 'Ω'
  ], 
	digraphs: [
		'ου', 'αυ', 'ευ', 'ηυ', 'μπ', 'ντ', 'γκ', 'γγ', 'τζ', 'γχ', 'γξ', 'αι', 'υι', 'οι', 'ει'
	],
  names: {
    'α': ['alpha'],    'β': ['beta'],     'γ': ['gamma'],              'δ': ['delta'],
    'ε': ['epsilon'],  'ζ': ['zeta'],     'η': ['eta'],                'θ': ['theta'],
    'ι': ['iota'],     'κ': ['kappa'],    'λ': ['lambda', 'lamda'],    'μ': ['mu'],
    'ν': ['nu'],       'ξ': ['xi'],       'ο': ['omicron', 'omikron'], 'π': ['pi'],
    'ρ': ['rho'],      'σ': ['sigma'],    'ς': ['sigma'],              'τ': ['tau'], 
		'υ': ['upsilon'],  'φ': ['phi'],      'χ': ['chi'],                'ψ': ['psi'], 
		'ω': ['omega']
  },
  transcriptions: { // Traditional Latin transliteration
    'α': ['a'],           'β': ['v'],           'γ': ['g'],           'δ': ['d'],
    'ε': ['e'],           'ζ': ['z'],           'η': ['i'],           'θ': ['th'],
    'ι': ['i'],           'κ': ['k'],           'λ': ['l'],           'μ': ['m'],
    'ν': ['n'],           'ξ': ['x', 'ks'],     'ο': ['o'],           'π': ['p'],
    'ρ': ['r', 'rh'],     'σ': ['s'],           'ς': ['s'],           'τ': ['t'],
		'υ': ['y', 'u'],      'φ': ['ph', 'f'],     'χ': ['kh', 'ch'],    'ψ': ['ps'],
		'ω': ['o'],           'ου': ['u'],          'αυ': ['af', 'av'],   'ευ': ['ef', 'ev'],
		'ηυ': ['if', 'iv'],   'μπ': ['b', 'mb'],    'ντ': ['d', 'nd'],    'γκ': ['g', 'ng', 'nk'],
		'γγ': ['g', 'ng', 'ngh'],                   'τζ': ['dz', 'tz'],   'ωυ': ['oi'],
		'γχ': ['ngkh', 'nkh'],         'γξ': ['ngx', 'ngks'],             'αι': ['e'],
		'υι': ['i'],          'οι': ['i'],          'ει': ['i']
  },
  pronunciations: {
    'α': ['f', 'a', 'ther'],        'β': ['', 'v', 'ote'],        'γ': ['la','g','o (Spanish)'],
		'δ': ['', 'th', 'en'],          'ε': ['overl', 'a', 'y'],     'ζ': ['', 'z', 'oo'],
		'η': ['mach', 'i', 'ne (short)'],   'θ': ['', 'th', 'in'],    'ι': ['mach', 'i', 'ne (short)'],
		'κ': ['ma', 'k', 'e'],          'λ': ['', 'l', 'antern'],     'μ': ['', 'm', 'usic'],
		'ν': ['', 'n', 'et'],           'ξ': ['fo', 'x', ''],         'ο': ['g', 'o', 't'],
		'π': ['s', 'p', 'ot'],    'ρ': ['ca', 'rr', 'o (Spanish)'],   'σ': ['', 's', 'oft'],
		'ς': ['', 's', 'oft'],          'τ': ['s', 't', 'oke'],       'υ': ['mach', 'i', 'ne (short)'],
		'φ': ['', 'f', 'ive'],          'χ': ['lo', 'ch', ' (Scottish)'],
		'ψ': ['la', 'ps', 'e'],         'ω': ['l', 'aw', ''],
		'μπ': ['', 'b', 'ee (beginning of words); otherwise', 'co', 'mb', 'at'],
		'ντ': ['', 'd', 'og (beginning of words); otherwise', 'la', 'nd', ''],
		'γκ': ['', 'g', 'arage (beginning of words); otherwise', 'fi', 'ng', 'er'],
		'γγ': ['fu', 'ng', 'us'],
		'τζ': ['ro', 'ds', ''],
		'ωυ': ['oi'],
		'γχ': ['ki', 'ng', '(=γ, followed χ=kh)'],
		'γξ': ['ly', 'nx', ''],
		'αι': ['p', 'e', 't'],
		'υι': ['m', 'ee', 't (short)'],
		'οι': ['m', 'ee', 't (short)'],
		'ει': ['m', 'ee', 't (short)'],
		'ου': ['b', 'oo', 't'],
		'αυ': ['h', 'av', 'e (before voiced consonants); otherwise', '', 'af', 'ter (before unvoiced consonants)'],
		'ευ': ['', 'ev', 'ery before voiced consonants or any vowel; otherwise', '', 'ef', 'fort (before unvoiced consonants)'],
		'ηυ': ['', 'ev', 'ening (before voiced consonants or any vowel); otherwise', 'b', 'eef', ' (before unvoiced consonants)']
  }
}

// prettier-ignore
export const cyrillic = {
	// https://en.wikipedia.org/wiki/Bulgarian_alphabet
	bg_lower: [
		'а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т',
		'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ь', 'ю', 'я'
	],
	// https://en.wikipedia.org/wiki/Russian_alphabet
	ru_lower: [
		'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 
		'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'
	],
	// https://en.wikipedia.org/wiki/Serbian_Cyrillic_alphabet
	sr_lower: [
		'а', 'б', 'в', 'г', 'д', 'ђ', 'е', 'ж', 'з', 'и', 'ј', 'к', 'л', 'љ', 'м', 'н', 'њ', 'о', 'п', 
		'р', 'с', 'т', 'ћ', 'у', 'ф', 'х', 'ц', 'ч', 'џ', 'ш'
	],
	// transcriptions
	bg_transcriptions: {
		'а': ['a'],        'б': ['b'],        'в': ['v'],        'г': ['g'],        'д': ['d'],
		'е': ['e'],			 	 'ж': ['zh'],       'з': ['z'],        'и': ['i'],        'й': ['y', 'i'],
		'к': ['k'],        'л': ['l'], 			  'м': ['m'],        'н': ['n'],        'о': ['o'],
		'п': ['p'],        'р': ['r'],        'с': ['s'], 			 'т': ['t'],        'у': ['u'],
		'ф': ['f'],        'х': ['kh'],       'ц': ['ts', 'c'],  'ч': ['ch'],       'ш': ['sh'],
		'щ': ['sht'],      'ъ': ['a', 'uh'],  'ь': ['y', 'i'],   'ю': ['yu', 'ju'], 'я': ['ya', 'ja']
	},
	ru_transcriptions: {
		'а': ['a'],        'б': ['b'],        'в': ['v'],        'г': ['g'],        'д': ['d'],
		'е': ['ye', 'e'],  'ё': ['yo'],       'ж': ['zh'],       'з': ['z'],        'и': ['i'],
		'й': ['y', 'i'],   'к': ['k'],        'л': ['l'], 			 'м': ['m'],        'н': ['n'],
		'о': ['o'],        'п': ['p'],        'р': ['r'],        'с': ['s'], 			  'т': ['t'],
		'у': ['u'],        'ф': ['f'],        'х': ['kh', 'h'],  'ц': ['ts', 'c'],  'ч': ['ch'],
		'ш': ['sh'],			 'щ': ['shch', 'sch'],                 'ъ': ["-", ''],    'ы': ['y'],
		'ь': ['-', ''],    'э': ['e'],        'ю': ['yu', 'ju'], 'я': ['ya', 'ja']
	},
	sr_transcriptions: {
		'а': ['a'],        'б': ['b'],        'в': ['v'],        'г': ['g'],        'д': ['d'],
		'ђ': ['dj'],       'е': ['e'],			  'ж': ['zh'],       'з': ['z'],        'и': ['i'],
		'ј': ['y', 'i'],   'к': ['k'],        'л': ['l'], 			 'љ': ['lj', 'ly'], 'м': ['m'],
		'н': ['n'],        'њ': ['nj', 'ny'], 'о': ['o'],        'п': ['p'],        'р': ['r'],
		'с': ['s'], 			 'т': ['t'],        'ћ': ['tsh'],      'у': ['u'],        'ф': ['f'],
		'х': ['kh'],       'ц': ['ts', 'c'],  'ч': ['ch'],       'џ': ['dzh'],      'ш': ['sh']
	},
	// pronunciations : ['x','y','z'] -> y as in xyz
	bg_pronunciations: {
		'а': ['f', 'a', 'ther'], 'б': ['', 'b', 'ug'], 'в': ['', 'v', 'et'], 'г': ['', 'g', 'ood'],
		'д': ['', 'd', 'og'], 'е': ['b', 'e', 'st'], 'ж': ['trea', 's', 'ure'], 'з': ['', 'z', 'oo'],
		'и': ['mach', 'i', 'ne'], 'й': ['', 'y', 'es'], 'к': ['', 'k', 'ick'], 'л': ['ca', 'll', ''],
		'м': ['', 'm', 'an'], 'н': ['', 'n', 'ormal'], 'о': ['', 'o', 'rder'], 'п': ['', 'p', 'et'],
		'р': ['pe', 'rr', 'o (rolled)'], 'с': ['', 's', 'ound'], 'т': ['s', 't', 'ick'],
		'у': ['b', 'oo', 't'], 'ф': ['', 'f', 'ood'], 'х': ['lo', 'ch', ' (Scottish)'],
		'ц': ['fi', 'ts', ''], 'ч': ['', 'ch', 'ip'], 'ш': ['', 'sh', 'ot'], 'щ': ['', 'sht', 'ick'],
		'ъ': ['t', 'u', 'rn'], 'ь': ['can', 'y', 'on'], 'ю': ['', 'you', 'th'], 'я': ['', 'ya', 'k']
	},
	ru_pronunciations: {
		'а': ['f', 'a', 'ther'], 'б': ['', 'b', 'ed'], 'в': ['', 'v', 'ine'], 'г': ['', 'g', 'o'],
		'д': ['', 'd', 'o'], 'е': ['', 'ye', 's'], 'ё': ['', 'yo', 'ur'], 'ж': ['mea', 's', 'ure'],
		'з': ['', 'z', 'ap'], 'и': ['pol', 'i', 'ce'], 'й': ['to', 'y', ''], 'к': ['', 'k', 'ept'],
		'л': ['fee', 'l', ''], 'м': ['', 'm', 'ap'], 'н': ['', 'n', 'ot'], 'о': ['m', 'o', 're'],
		'п': ['', 'p', 'anic'], 'р': ['pe', 'rr', 'o (rolled)'], 'с': ['', 's', 'et'],
		'т': ['', 't', 'op'], 'у': ['t', 'oo', 'l'], 'ф': ['', 'f', 'ace'],
		'х': ['lo', 'ch', ' (Scottish)'], 'ц': ['si', 'ts', ''], 'ч': ['', 'ch', 'eck'],
		'ш': ['hu', 'sh', ''], 'щ': ['', 'sh', 'ips'],
		'ъ': ['silent, prevents palatalization of the preceding consonant', '', ''], 
		'ы': ['ros', 'e', 's'], 'ь': ['silent, palatalizes the preceding consonant', '', ''],
		'э': ['m', 'e', 't'], 'ю': ['', 'u', 'se'], 'я': ['', 'ya', 'rd']
	},
	sr_pronunciations: {
		'а': ['f', 'a', 'ther'], 'б': ['', 'b', 'oy'], 'в': ['', 'v', 'ictory'], 'г': ['', 'g', 'o'],
		'д': ['', 'd', 'og'], 'ђ': ['', 'dj', 'uke'], 'е': ['p', 'e', 't'], 'ж': ['mea', 's', 'ure'],
		'з': ['', 'z', 'oo'], 'и': ['mach', 'i', 'ne'], 'ј': ['', 'y', 'es'], 'к': ['', 'k', 'ite'],
		'л': ['', 'l', 'amp'], 'љ': ['mil', 'li', 'on'], 'м': ['', 'm', 'oon'], 'н': ['', 'n', 'o'],
		'њ': ['on', 'ni', 'on'], 'о': ['f', 'o', 'r'], 'п': ['', 'p', 'ot'],
		'р': ['pe', 'rr', 'o (rolled)'], 'с': ['', 's', 'un'], 'т': ['', 't', 'op'],
		'ћ': ['', 't', 'une'], 'у': ['r', 'u', 'ler'], 'ф': ['', 'f', 'un'],
		'х': ['Ba','ch',', Johann Sebastian'], 'ц': ['', 'ts', 'ar'], 'ч': ['', 'ch', 'ess'],
		'џ': ['', 'j', 'ungle'], 'ш': ['', 'sh', 'oe']
	},

}
