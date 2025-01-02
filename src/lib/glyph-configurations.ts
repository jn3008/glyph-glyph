export interface Mode {
  key: string;
  label: string;
  modes_label?: string;
  modes?: Mode[]; // Recursive type to support nested modes, '?' - optional
  full_key?: string; // This is added dynamically, so it's optional
}

const arabic_forms_config: Mode[] = [
  { key: "isolated", label: "Isolated" },
  { key: "initial", label: "Initial" },
  { key: "medial", label: "Medial" },
  { key: "final", label: "Final" },
  { key: "all", label: "All" },
];

export const configurations: Mode[] = [
  {
    key: "kana",
    label: "Kana",
    modes_label: "Kana Type",
    modes: [
      {
        key: "katakana",
        label: "Katakana",
        modes_label: "Characters to include",
        modes: [
          { key: "monographs", label: "Monographs" },
          { key: "diacritics", label: "+ Diacritics" },
          { key: "digraphs", label: "+ Digraphs" },
          { key: "all", label: "All" },
        ],
      },
      {
        key: "hiragana",
        label: "Hiragana",
        modes_label: "Characters to include",
        modes: [
          { key: "monographs", label: "Monographs" },
          { key: "diacritics", label: "+ Diacritics" },
          { key: "digraphs", label: "+ Digraphs" },
          { key: "all", label: "All" },
        ],
      },
    ],
  },
  {
    key: "greek",
    label: "Greek",
    modes_label: "Mode",
    modes: [
      {
        key: "transcriptions",
        label: "Transcriptions",
        modes_label: "Characters to include",
        modes: [
          {
            key: "monographs",
            label: "Monographs",
            modes_label: "Case",
            modes: [
              { key: "upper", label: "Upper" },
              { key: "lower", label: "Lower" },
            ],
          },
          {
            key: "digraphs",
            label: "+ Digraphs",
            modes_label: "Case",
            modes: [
              { key: "upper", label: "Upper" },
              { key: "lower", label: "Lower" },
            ],
          },
        ],
      },
      {
        key: "names",
        label: "Names",
        modes_label: "Case",
        modes: [
          { key: "upper", label: "Upper" },
          { key: "lower", label: "Lower" },
        ],
      },
    ],
  },
  {
    key: "cyrillic",
    label: "Cyrillic",
    modes_label: "Language",
    modes: [
      {
        key: "bulgarian",
        label: "Bulgarian",
        modes_label: "Case",
        modes: [
          { key: "upper", label: "Upper" },
          { key: "lower", label: "Lower" },
        ],
      },
      {
        key: "russian",
        label: "Russian",
        modes_label: "Case",
        modes: [
          { key: "upper", label: "Upper" },
          { key: "lower", label: "Lower" },
        ],
      },
      {
        key: "serbian",
        label: "Serbian",
        modes_label: "Case",
        modes: [
          { key: "upper", label: "Upper" },
          { key: "lower", label: "Lower" },
        ],
      },
    ],
  },
  {
    key: "persoarabic",
    label: "Perso-Arabic",
    modes_label: "Alphabet",
    modes: [
      {
        key: "arabic",
        label: "Arabic",
        modes_label: "Mode",
        modes: [
          {
            key: "transcriptions",
            label: "Transcriptions",
            modes_label: "Pronunciation",
            modes: [
              {
                key: "standard",
                label: "Standard",
                modes_label: "Form",
                modes: arabic_forms_config,
              },
            ],
          },
        ],
      },
      {
        key: "persian",
        label: "Farsi",
        modes_label: "Mode",
        modes: [
          {
            key: "transcriptions",
            label: "Transcriptions",
            modes_label: "Form",
            modes: arabic_forms_config,
          },
        ],
      },
      {
        key: "urdu",
        label: "Urdu",
        modes_label: "Mode",
        modes: [
          {
            key: "transcriptions",
            label: "Transcriptions",
            modes_label: "Form",
            modes: arabic_forms_config,
          },
        ],
      },
      // {
      //   key: "numbers",
      //   label: "Numbers",
      // },
    ],
  },
];

function generateKeys(modes: Mode[], parent_key = ""): Mode[] {
  return modes.map((mode) => {
    const current_key = parent_key ? `${parent_key}-${mode.key}` : mode.key;
    const new_mode = { ...mode, full_key: current_key };

    if (mode.modes) {
      new_mode.modes = generateKeys(mode.modes, current_key); // Recursive call
    }

    return new_mode;
  });
}

export const configurations_with_keys = generateKeys(configurations);

type PathType = string; // Mode or string

function extractKeysAndPaths(
  modes: Mode[],
  parent_path: Mode[] = []
): { keys: string[]; paths: Record<string, PathType[]> } {
  const keys: string[] = [];
  const paths: Record<string, PathType[]> = {};

  function traverse(modes: Mode[], current_path: Mode[]) {
    modes.forEach((mode) => {
      const new_path = [...current_path, mode]; // Add current mode to the path

      if (mode.modes) {
        // Recursive call for nested modes
        traverse(mode.modes, new_path);
      } else {
        // Leaf node: add its full_key and path
        keys.push(mode.full_key!); // Collect the full_key
        paths[mode.full_key!] = new_path.map((m) => m.key); // if PathType === string
        // paths[mode.full_key!] = new_path; // if PathType === Mode
      }
    });
  }

  traverse(modes, parent_path);
  return { keys, paths };
}

export const { keys: full_keys, paths: full_paths } = extractKeysAndPaths(
  configurations_with_keys
);

console.log(full_paths);

export type FullKey = (typeof full_keys)[number];
