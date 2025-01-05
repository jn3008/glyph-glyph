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
	],
	sounds: {
    'あ': ['a'],   'い': ['i'],   'う': ['ɯ'],   'え': ['e'],   'お': ['o'],
    'か': ['ka'],  'き': ['ki'],  'く': ['kɯ'],  'け': ['ke'],  'こ': ['ko'],
    'さ': ['sa'],  'し': ['ɕi'],  'す': ['sɯ'],  'せ': ['se'],  'そ': ['so'],
    'た': ['ta'],  'ち': ['tɕi'], 'つ': ['tsɯ'], 'て': ['te'],  'と': ['to'],
    'な': ['na'],  'に': ['ɲi'],  'ぬ': ['nɯ'],  'ね': ['ne'],  'の': ['no'],
    'ま': ['ma'],  'み': ['mi'],  'む': ['mɯ'],  'め': ['me'],  'も': ['mo'],
    'は': ['ha'],  'ひ': ['çi'],  'ふ': ['ɸɯ'],  'へ': ['he'],  'ほ': ['ho'],
    'や': ['ja'],                 'ゆ': ['jɯ'],                'よ': ['jo'],
    'ら': ['ɾa'],  'り': ['ɾi'],  'る': ['ɾɯ'],  'れ': ['ɾe'],  'ろ': ['ɾo'],
    'わ': ['wa'],                                        'を': ['o'],
    'ん': ['n'],

		'が': ['ɡa'],     'ぎ': ['ɡi'],    'ぐ': ['ɡɯ'],     'げ': ['ɡe'],     'ご': ['ɡo'],
    'ざ': ['(d)za'],  'じ': ['(d)ʑi'], 'ず': ['(d)zɯ'],  'ぜ': ['(d)ze'],  'ぞ': ['(d)zo'],
    'だ': ['da'],     'ぢ': ['(d)ʑi'], 'づ': ['(d)zɯ'],  'で': ['de'],     'ど': ['do'],
    'ば': ['ba'],     'び': ['bi'],    'ぶ': ['bɯ'],     'べ': ['be'],     'ぼ': ['bo'],
    'ぱ': ['pa'],     'ぴ': ['pi'],    'ぷ': ['pɯ'],     'ぺ': ['pe'],     'ぽ': ['po'],

		'きゃ': ['kʲa'], 'きゅ': ['kʲɯ'], 'きょ': ['kʲo'],
    'しゃ': ['ɕa'],  'しゅ': ['ɕɯ'],  'しょ': ['ɕo'],
    'ちゃ': ['tɕa'], 'ちゅ': ['tɕɯ'], 'ちょ': ['tɕo'],
    'にゃ': ['ɲa'],  'にゅ': ['ɲɯ'],  'にょ': ['ɲo'],
    'ひゃ': ['ça'],  'ひゅ': ['çɯ'],  'ひょ': ['ço'],
    'みゃ': ['mʲa'], 'みゅ': ['mʲɯ'], 'みょ': ['mʲo'],
    'りゃ': ['ɾʲa'], 'りゅ': ['ɾʲɯ'], 'りょ': ['ɾʲo'],

		'ぎゃ': ['ɡʲa'],   'ぎゅ': ['ɡʲɯ'],   'ぎょ': ['ɡʲo'],
    'じゃ': ['(d)ʑa'], 'じゅ': ['(d)ʑɯ'], 'じょ': ['(d)ʑo'],
    // 'ぢゃ': ['(d)ʑa'], 'ぢゅ': ['(d)ʑɯ'], 'ぢょ': ['(d)ʑo'],
    'びゃ': ['bʲa'],   'びゅ': ['bʲɯ'],   'びょ': ['bʲo'],
    'ぴゃ': ['pʲa'],   'ぴゅ': ['pʲɯ'],   'ぴょ': ['pʲo']
	}
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
		'υ': ['y', 'u'],      'φ': ['ph', 'f'],     'χ': ['kh'],          'ψ': ['ps'],
		'ω': ['o'],           'ου': ['u'],          'αυ': ['af', 'av'],   'ευ': ['ef', 'ev'],
		'ηυ': ['if', 'iv'],   'μπ': ['b', 'mb'],    'ντ': ['d', 'nd'],    'γκ': ['g', 'ng'],
		'γγ': ['g', 'ng', 'ngh'],                   'τζ': ['dz', 'tz'],   'ωυ': ['oi'],
		'γχ': ['ngkh', 'nkh'],         'γξ': ['nx', 'ngks'],             'αι': ['e'],
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
  },

	sounds: {
		'α': ['a'], 'β': ['v'], 'γ': ['ɣ'], 'δ': ['ð'], 'ε': ['e'], 'ζ': ['z'],
    'η': ['i'], 'θ': ['θ'], 'ι': ['i', 'ç', 'ʝ', 'ɲ'], 'κ': ['k', 'c'], 'λ': ['l'], 'μ': ['m'],
    'ν': ['n'], 'ξ': ['ks'], 'ο': ['o'], 'π': ['p'], 'ρ': ['r', 'ɾ'], 'σ': ['s', 'z'],
    'ς': ['s'], 'τ': ['t'], 'υ': ['i'], 'φ': ['f'], 'χ': ['x', 'ç'], 'ψ': ['ps'],
    'ω': ['o'], 'ου': ['u'], 'αυ': ['af', 'av'], 'ευ': ['ef', 'ev'], 'ηυ': ['if', 'iv'],
		'μπ': ['b', 'mb'], 'ντ': ['d', 'nd'], 'γκ': ['g', 'ŋg'], 'γγ': ['g,', 'ŋg', 'ŋɣ'], 'τζ': ['dz'], 
		'γχ': ['nç', 'nx'], 'γξ': ['ŋks'], 'αι': ['e'], 'υι': ['i'], 'οι': ['i'], 'ει': ['i']
	}
}

// prettier-ignore
export const cyrillic = {
	// https://en.wikipedia.org/wiki/Bulgarian_alphabet
	alphabets: {
		bulgarian: [
			'а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т',
			'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ь', 'ю', 'я'
		],
		// https://en.wikipedia.org/wiki/Russian_alphabet
		russian: [
			'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 
			'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'
		],
		// https://en.wikipedia.org/wiki/Serbian_Cyrillic_alphabet
		serbian: [
			'а', 'б', 'в', 'г', 'д', 'ђ', 'е', 'ж', 'з', 'и', 'ј', 'к', 'л', 'љ', 'м', 'н', 'њ', 'о', 'п', 
			'р', 'с', 'т', 'ћ', 'у', 'ф', 'х', 'ц', 'ч', 'џ', 'ш'
		]
	},
	// transcriptions
	transcriptions: {
		bulgarian: {
			'а': ['a'],        'б': ['b'],        'в': ['v'],        'г': ['g'],        'д': ['d'],
			'е': ['e'],			 	 'ж': ['zh'],       'з': ['z'],        'и': ['i'],        'й': ['y', 'i'],
			'к': ['k'],        'л': ['l'], 			  'м': ['m'],        'н': ['n'],        'о': ['o'],
			'п': ['p'],        'р': ['r'],        'с': ['s'], 			 'т': ['t'],        'у': ['u'],
			'ф': ['f'],        'х': ['kh'],       'ц': ['ts', 'c'],  'ч': ['ch'],       'ш': ['sh'],
			'щ': ['sht'],      'ъ': ['a', 'uh'],  'ь': ['y', 'i'],   'ю': ['yu', 'ju'], 'я': ['ya', 'ja']
		},
		russian: {
			'а': ['a'],        'б': ['b'],        'в': ['v'],        'г': ['g'],        'д': ['d'],
			'е': ['ye', 'e'],  'ё': ['yo'],       'ж': ['zh'],       'з': ['z'],        'и': ['i'],
			'й': ['y', 'i'],   'к': ['k'],        'л': ['l'], 			 'м': ['m'],        'н': ['n'],
			'о': ['o'],        'п': ['p'],        'р': ['r'],        'с': ['s'], 			  'т': ['t'],
			'у': ['u'],        'ф': ['f'],        'х': ['kh', 'h'],  'ц': ['ts', 'c'],  'ч': ['ch'],
			'ш': ['sh'],			 'щ': ['shch', 'sch'],                 'ъ': ["-", ''],    'ы': ['y'],
			'ь': ['-', ''],    'э': ['e'],        'ю': ['yu', 'ju'], 'я': ['ya', 'ja']
		},
		serbian: {
			'а': ['a'],        'б': ['b'],        'в': ['v'],        'г': ['g'],        'д': ['d'],
			'ђ': ['dj'],       'е': ['e'],			  'ж': ['zh'],       'з': ['z'],        'и': ['i'],
			'ј': ['y', 'i'],   'к': ['k'],        'л': ['l'], 			 'љ': ['lj', 'ly'], 'м': ['m'],
			'н': ['n'],        'њ': ['nj', 'ny'], 'о': ['o'],        'п': ['p'],        'р': ['r'],
			'с': ['s'], 			 'т': ['t'],        'ћ': ['tsh'],      'у': ['u'],        'ф': ['f'],
			'х': ['kh'],       'ц': ['ts', 'c'],  'ч': ['ch'],       'џ': ['dzh'],      'ш': ['sh']
		}
	},
	// pronunciations : ['x','y','z'] -> y as in xyz
	pronunciations: {
		bulgarian: {
			'а': ['f', 'a', 'ther'], 'б': ['', 'b', 'ug'], 'в': ['', 'v', 'et'], 'г': ['', 'g', 'ood'],
			'д': ['', 'd', 'og'], 'е': ['b', 'e', 'st'], 'ж': ['trea', 's', 'ure'], 'з': ['', 'z', 'oo'],
			'и': ['mach', 'i', 'ne'], 'й': ['', 'y', 'es'], 'к': ['', 'k', 'ick'], 'л': ['ca', 'll', ''],
			'м': ['', 'm', 'an'], 'н': ['', 'n', 'ormal'], 'о': ['', 'o', 'rder'], 'п': ['', 'p', 'et'],
			'р': ['pe', 'rr', 'o (rolled)'], 'с': ['', 's', 'ound'], 'т': ['s', 't', 'ick'],
			'у': ['b', 'oo', 't'], 'ф': ['', 'f', 'ood'], 'х': ['lo', 'ch', ' (Scottish)'],
			'ц': ['fi', 'ts', ''], 'ч': ['', 'ch', 'ip'], 'ш': ['', 'sh', 'ot'], 'щ': ['', 'sht', 'ick'],
			'ъ': ['t', 'u', 'rn'], 'ь': ['can', 'y', 'on'], 'ю': ['', 'you', 'th'], 'я': ['', 'ya', 'k']
		},
		russian: {
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
		serbian: {
			'а': ['f', 'a', 'ther'], 'б': ['', 'b', 'oy'], 'в': ['', 'v', 'ictory'], 'г': ['', 'g', 'o'],
			'д': ['', 'd', 'og'], 'ђ': ['', 'dj', 'uke'], 'е': ['p', 'e', 't'], 'ж': ['mea', 's', 'ure'],
			'з': ['', 'z', 'oo'], 'и': ['mach', 'i', 'ne'], 'ј': ['', 'y', 'es'], 'к': ['', 'k', 'ite'],
			'л': ['', 'l', 'amp'], 'љ': ['mil', 'li', 'on'], 'м': ['', 'm', 'oon'], 'н': ['', 'n', 'o'],
			'њ': ['on', 'ni', 'on'], 'о': ['f', 'o', 'r'], 'п': ['', 'p', 'ot'],
			'р': ['pe', 'rr', 'o (rolled)'], 'с': ['', 's', 'un'], 'т': ['', 't', 'op'],
			'ћ': ['', 't', 'une'], 'у': ['r', 'u', 'ler'], 'ф': ['', 'f', 'un'],
			'х': ['Ba','ch',', Johann Sebastian'], 'ц': ['', 'ts', 'ar'], 'ч': ['', 'ch', 'ess'],
			'џ': ['', 'j', 'ungle'], 'ш': ['', 'sh', 'oe']
		}
	},

	sounds: {
		bulgarian: {
			'а': ['a', 'ɐ', 'ə'], 'б': ['b'], 'в': ['v', 'f'], 'г': ['ɡ'], 'д': ['d'],
			'е': ['ɛ'], 'ж': ['ʒ', 'ʃ'], 'з': ['z', 's'], 'и': ['i'], 'й': ['j'],
			'к': ['k', 'g'], 'л': ['l', 'ʎ', 'ɫ'], 'м': ['m'], 'н': ['n'], 'о': ['ɔ', 'o'],
			'п': ['p'], 'р': ['r'], 'с': ['s'], 'т': ['t'], 'у': ['u', 'ʊ'],
			'ф': ['f'], 'х': ['x'], 'ц': ['ts'], 'ч': ['tʃ'], 'ш': ['ʃ'],
			'щ': ['ʃt'], 'ъ': ['ɤ', 'ɐ'], 'ь': ['ʲ'], 'ю': ['ju'], 'я': ['ja']
		},
		russian: {
			'а': ['a'], 'б': ['b', 'bʲ'], 'в': ['v', 'vʲ'], 'г': ['ɡ', 'gʲ'], 'д': ['d', 'dʲ'],
			'е': ['je', 'e'], 'ё': ['jo', 'ʲɵ'], 'ж': ['ʐ'], 'з': ['z', 'zʲ'], 'и': ['i', 'ɨ'],
			'й': ['j'], 'к': ['k', 'kʲ'], 'л': ['ɫ', 'lʲ'], 'м': ['m', 'mʲ'], 'н': ['n', 'nʲ'],
			'о': ['o'], 'п': ['p', 'pʲ'], 'р': ['r', 'rʲ'], 'с': ['s', 'sʲ'], 'т': ['t', 'tʲ'],
			'у': ['u'], 'ф': ['f', 'fʲ'], 'х': ['x', 'xʲ'], 'ц': ['ts'], 'ч': ['tɕ'],
			'ш': ['ʂ'], 'щ': ['ɕː', 'ɕ'], 'ъ': ['∅'], 'ы': ['ɨ'], 'ь': ['ʲ'],
			'э': ['ɛ', 'e'], 'ю': ['ju'], 'я': ['ja']
		},
		serbian: {
			'а': ['ä'], 'б': ['b'], 'в': ['v'], 'г': ['ɡ'], 'д': ['d'],
			'ђ': ['dʑ'], 'е': ['e̞'], 'ж': ['ʐ'], 'з': ['z'], 'и': ['i'],
			'ј': ['j'], 'к': ['k'], 'л': ['l'], 'љ': ['ʎ'], 'м': ['m'],
			'н': ['n'], 'њ': ['ɲ'], 'о': ['ɔ̝'], 'п': ['p'], 'р': ['ɾ'],
			'с': ['s'], 'т': ['t'], 'ћ': ['tɕ'], 'у': ['u'], 'ф': ['f'],
			'х': ['x'], 'ц': ['ts'], 'ч': ['tʂ'], 'џ': ['dʐ'], 'ш': ['ʂ']
		}
	}, 
}

// prettier-ignore
export const persoarabic = {
	alphabets: {
		arabic: ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 
						'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'],

		persian: ['ا', 'ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'ژ', 'س', 'ش', 'ص',
						'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ه', 'ی'],

		urdu:  ['ا', 'ب', 'پ', 'ت', 'ٹ', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ڈ', 'ذ', 'ر', 'ڑ', 'ز', 'ژ', 
						'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'ں', 'و',
						'ہ', 'ھ', 'ی', 'ے', 'ء']
	},

	transcriptions: {
		arabic: {
			standard: {
				'ا': ['a', 'aa'],     'ب': ['b'],           'ت': ['t'],           'ث': ['th'],
				'ج': ['j'],           'ح': ['h'],           'خ': ['kh'],          'د': ['d'],
				'ذ': ['dh'],          'ر': ['r'],           'ز': ['z'],           'س': ['s'],
				'ش': ['sh'],          'ص': ['s'],           'ض': ['d'],           'ط': ['t'],
				'ظ': ['z', 'dh'],     'ع': ["'", 'aa'],     'غ': ['gh'],          'ف': ['f'],    
				'ق': ['q'],           'ك': ['k'],           'ل': ['l'],           'م': ['m'],
				'ن': ['n'],           'ه': ['h'],           'و': ['w', 'u'],      'ي': ['y', 'i']
			},

			egyptian: {
				'ا': ['a', 'aa'],       'ب': ['b'],        'ت': ['t'],        'ث': ['th'],
				'ج': ['g'],             'ح': ['h'],        'خ': ['kh'],       'د': ['d'],
				'ذ': ['dh'],            'ر': ['r'],        'ز': ['z'],        'س': ['s'],
				'ش': ['sh'],            'ص': ['s'],        'ض': ['d'],        'ط': ['t'],
				'ظ': ['z', 'dh'],       'ع': ["'", 'aa'],  'غ': ['gh'],       'ف': ['f'],
				'ق': ['ʔ'],             'ك': ['k', 'ch'],  'ل': ['l'],        'م': ['m'],
				'ن': ['n'],             'ه': ['h'],        'و': ['w', 'u'],   'ي': ['y', 'i']
			},

			levantine: {
				'ا': ['a', 'aa'],       'ب': ['b'],       'ت': ['t'],        'ث': ['t', 's'],
				'ج': ['zh'],            'ح': ['h'],       'خ': ['kh'],       'د': ['d'],
				'ذ': ['d', 'z'],        'ر': ['r'],       'ز': ['z'],        'س': ['s'],
				'ش': ['sh'],            'ص': ['s'],       'ض': ['d'],        'ط': ['t'],
				'ظ': ['z', 'dh'],       'ع': ["'", 'aa'], 'غ': ['gh'],       'ف': ['f'],
				'ق': ['-'],             'ك': ['k'],       'ل': ['l'],        'م': ['m'],
				'ن': ['n'],             'ه': ['h'],       'و': ['w', 'u'],   'ي': ['y', 'i']
			},

			gulf: {
				'ا': ['a', 'aa'],   'ب': ['b'],         'ت': ['t'],         'ث': ['th'],
				'ج': ['y', 'j'],    'ح': ['h'],         'خ': ['kh'],        'د': ['d'],
				'ذ': ['dh'],        'ر': ['r'],         'ز': ['z'],         'س': ['s'],
				'ش': ['sh'],        'ص': ['s'],         'ض': ['dh'],        'ط': ['t'],
				'ظ': ['z', 'dh'],   'ع': ["'", 'aa'],   'غ': ['gh', 'q'],   'ف': ['f'],
				'ق': ['g', 'j'],    'ك': ['k', 'ch'],   'ل': ['l'],         'م': ['m'],
				'ن': ['n'],         'ه': ['h'],         'و': ['w', 'u'],    'ي': ['y', 'i']
			}
		},

		persian: {
			'ا': ['a', 'aa'],   'ب': ['b'],           'پ': ['p'],        'ت': ['t'],
			'ث': ['th'],        'ج': ['j'],           'چ': ['ch'],       'ح': ['h'],
			'خ': ['kh'],        'د': ['d'],           'ذ': ['dh'],       'ر': ['r'],
			'ز': ['z'],         'ژ': ['zh'],          'س': ['s'],        'ش': ['sh'],
			'ص': ['s'],         'ض': ['d'],           'ط': ['t'],        'ظ': ['z', 'dh'],
			'ع': ["'", 'aa'],   'غ': ['gh'],          'ف': ['f'],        'ق': ['q'],
			'ک': ['k'],         'گ': ['g'],           'ل': ['l'],        'م': ['m'],
			'ن': ['n'],         'و': ['v', 'u', 'o'], 'ه': ['h'],        'ی': ['y', 'i', 'ee']
		},

		urdu: {
			'ا': ['a', 'aa'],     'ب': ['b'],           'پ': ['p'],           'ت': ['t'],
			'ٹ': ['ṭ'],           'ث': ['th'],          'ج': ['j'],           'چ': ['ch'],
			'ح': ['h'],           'خ': ['kh'],          'د': ['d'],           'ڈ': ['dd'],//ḍ
			'ذ': ['dh'],          'ر': ['r'],       	  'ڑ': ['ṛ'],           'ز': ['z'],
			'ژ': ['zh'],          'س': ['s'],       	  'ش': ['sh'],          'ص': ['s'],
			'ض': ['d'],           'ط': ['t'],           'ظ': ['z', 'dh'],     'ع': ["'", 'aa'],
			'غ': ['gh'],          'ف': ['f'],           'ق': ['q'],           'ک': ['k'],
			'گ': ['g'],           'ل': ['l'],           'م': ['m'],           'ن': ['n'],
			'ں': ['n'],           'و': ['w', 'u', 'o'], 'ہ': ['h'],           'ھ': ['h'],
			'ی': ['y', 'i'],      'ے': ['e'],           'ء': ['-']
		}
	},

	sounds: {
		arabic: {
			standard: {
				'ا': ['ʔ', 'aː'],  'ب': ['b'],            'ت': ['t'],         'ث': ['θ'],
				'ج': ['dʒ'],       'ح': ['ħ'],            'خ': ['x'],         'د': ['d'],
				'ذ': ['ð'],        'ر': ['r'],            'ز': ['z'],         'س': ['s'],
				'ش': ['ʃ'],        'ص': ['sˤ'],           'ض': ['dˤ'],        'ط': ['tˤ'],
				'ظ': ['ðˤ'],       'ع': ['ʕ'],            'غ': ['ɣ'],         'ف': ['f'],    
				'ق': ['q'],        'ك': ['k'],            'ل': ['l'],         'م': ['m'],
				'ن': ['n'],        'ه': ['h'],            'و': ['w', 'uː'],    'ي': ['j', 'iː']
			},

			egyptian: {
				'ا': ['aː'],       'ب': ['b'],            'ت': ['t'],         'ث': ['s'],
				'ج': ['ɡ'],        'ح': ['ħ'],            'خ': ['x'],         'د': ['d'],
				'ذ': ['z'],        'ر': ['r'],            'ز': ['z'],         'س': ['s'],
				'ش': ['ʃ'],        'ص': ['sˤ'],           'ض': ['dˤ'],        'ط': ['tˤ'],
				'ظ': ['z'],        'ع': ['ʕ'],            'غ': ['ɣ'],         'ف': ['f'],
				'ق': ['ʔ'],        'ك': ['k'],            'ل': ['l'],         'م': ['m'],
				'ن': ['n'],        'ه': ['h'],            'و': ['w', 'u'],    'ي': ['j', 'i']
			},

			levantine: {
				'ا': ['aː'],       'ب': ['b'],            'ت': ['t'],         'ث': ['t', 's'],
				'ج': ['ʒ'],        'ح': ['ħ'],            'خ': ['x'],         'د': ['d'],
				'ذ': ['d', 'z'],   'ر': ['r'],            'ز': ['z'],         'س': ['s'],
				'ش': ['ʃ'],        'ص': ['sˤ'],           'ض': ['dˤ'],        'ط': ['dˤ', 'zˤ'],
				'ظ': ['ðˤ'],       'ع': ['ʕ'],            'غ': ['ɣ'],         'ف': ['f'],
				'ق': ['ʔ'],        'ك': ['k'],            'ل': ['l'],         'م': ['m'],
				'ن': ['n'],        'ه': ['h'],            'و': ['w', 'u'],    'ي': ['j', 'i']
			},

			gulf: {
				'ا': ['aː'],       'ب': ['b'],            'ت': ['t'],         'ث': ['θ'],
				'ج': ['j', 'dʒ'],  'ح': ['ħ'],            'خ': ['x'],         'د': ['d'],
				'ذ': ['ð'],        'ر': ['r'],            'ز': ['z'],         'س': ['s'],
				'ش': ['ʃ'],        'ص': ['sˤ'],           'ض': ['ðˤ'],        'ط': ['tˤ'],
				'ظ': ['ðˤ'],       'ع': ['ʕ'],            'غ': ['ɣ', 'q'],    'ف': ['f'],
				'ق': ['ɡ', 'dʒ'],  'ك': ['k', 'tʃ'],      'ل': ['l'],         'م': ['m'],
				'ن': ['n'],        'ه': ['h'],            'و': ['w', 'u'],    'ي': ['j', 'i']
			}
		},

		persian: {
			'ا': ['ɑː'],    'ب': ['b'],            'پ': ['p'],         'ت': ['t'],
			'ث': ['s'],     'ج': ['dʒ'],           'چ': ['tʃ'],        'ح': ['h'],
			'خ': ['x'],     'د': ['d'],            'ذ': ['z'],         'ر': ['r'],
			'ز': ['z'],     'ژ': ['ʒ'],            'س': ['s'],         'ش': ['ʃ'],
			'ص': ['s'],     'ض': ['z'],            'ط': ['t'],         'ظ': ['z'],
			'ع': ['ʔ'],     'غ': ['ɣ'],            'ف': ['f'],         'ق': ['ɣ'],
			'ک': ['k'],     'گ': ['g'],            'ل': ['l'],         'م': ['m'],
			'ن': ['n'],     'و': ['v', 'u', 'o'],  'ه': ['h'],         'ی': ['j', 'i']
		},

		urdu: {
			'ا': ['ɑː'],     'ب': ['b'],           'پ': ['p'],           'ت': ['t'],
			'ٹ': ['ʈ'],      'ث': ['s'],           'ج': ['dʒ'],          'چ': ['tʃ'],
			'ح': ['h'],      'خ': ['x'],           'د': ['d'],           'ڈ': ['ɖ'],
			'ذ': ['z'],      'ر': ['r'],           'ڑ': ['ɽ'],           'ز': ['z'],
			'ژ': ['ʒ'],      'س': ['s'],           'ش': ['ʃ'],           'ص': ['sˤ'],
			'ض': ['z'],      'ط': ['t'],           'ظ': ['z'],           'ع': ['ʕ'],
			'غ': ['ɣ'],      'ف': ['f'],           'ق': ['q'],           'ک': ['k'],
			'گ': ['ɡ'],      'ل': ['l'],           'م': ['m'],           'ن': ['n'],
			'ں': ['n'],      'و': ['ʋ', 'u'],      'ہ': ['h'],           'ھ': ['h'],
			'ی': ['j', 'i'], 'ے': ['e'],           'ء': ['ʔ']
		}
	}
}

// prettier-ignore
export const hangul = {
	glyphs: {
		basic_consonants: [
			'ㄱ',    'ㄴ',    'ㄷ',    'ㄹ',    'ㅁ',    'ㅂ',    'ㅅ',   
			'ㅇ',    'ㅈ',    'ㅊ',    'ㅋ',    'ㅌ',    'ㅍ',    'ㅎ'
		],
		tense_consonants: [
			'ㄲ',   'ㄸ',   'ㅃ',   'ㅆ',   'ㅉ'
		],
		complex_batchim: [
			'ㄲ', 'ㄳ', 'ㄵ', 'ㄶ',
			'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ',
			'ㄾ', 'ㄿ', 'ㅀ', 'ㅄ',
		],
		vowels: [
			'ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ',
			'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ',
			'ㅐ', 'ㅒ', 'ㅔ', 'ㅖ', 'ㅘ',
			'ㅙ', 'ㅚ', 'ㅝ', 'ㅞ', 'ㅟ',
			'ㅢ'
		]
	},

	transcriptions: {
		initial: {
			// basic consonants
			ㄱ: ["g"],    ㄴ: ["n"],    ㄷ: ["d"],    ㄹ: ["r", "l"],    ㅁ: ["m"],
			ㅂ: ["b"],    ㅅ: ["s"],    ㅇ: ["-"],    ㅈ: ["j"],         ㅊ: ["ch"],
			ㅋ: ["k"],    ㅌ: ["t"],    ㅍ: ["p"],    ㅎ: ["h"],
			// tense consonants (complex)
			ㄲ: ["kk"],   ㄸ: ["tt"],   ㅃ: ["pp"],   ㅆ: ["ss"],   ㅉ: ["jj"]
		},

		final: { // batchim
			// basic consonants
			ㄱ: ["k"],    ㄴ: ["n"],    ㄷ: ["t"],    ㄹ: ["l"],    ㅁ: ["m"],
			ㅂ: ["p"],    ㅅ: ["t"],    ㅇ: ["ng"],   ㅈ: ["t"],    ㅊ: ["t"],
			ㅋ: ["k"],    ㅌ: ["t"],    ㅍ: ["p"],    ㅎ: ["t"],
			// complex consonants
			ㄲ: ["k"],         ㄳ: ["k", "ks"],    ㄵ: ["n", "nj"],    ㄶ: ["n"],
			ㄺ: ["k", "lk"],   ㄻ: ["m"],          ㄼ: ["p"],          ㄽ: ["t"],
			ㄾ: ["t"],         ㄿ: ["p"],          ㅀ: ["t"],          ㅄ: ["p", "ps"]
		},
		
		vowels: {
			ㅏ: ["a"],     ㅑ: ["ya"],     ㅓ: ["eo"],     ㅕ: ["yeo"],     ㅗ: ["o"], 
			ㅛ: ["yo"],    ㅜ: ["u"],      ㅠ: ["yu"],     ㅡ: ["eu"],      ㅣ: ["i"], 
			ㅐ: ["ae"],    ㅒ: ["yae"],    ㅔ: ["e"],      ㅖ: ["ye"],      ㅘ: ["wa"],
			ㅙ: ["wae"],   ㅚ: ["oe"],     ㅝ: ["wo"],     ㅞ: ["we"],      ㅟ: ["wi"],
			ㅢ: ["ui"]
		}
	}
};
