import { sessionPersistentStore } from "$/lib/persistent-stores";
import { full_keys } from "$/lib/glyph-configurations";
import { configurations } from "$/lib/glyph-configurations";
import { get } from "svelte/store";

interface Configuration {
  id: string;
  path: string[];
  path_dict: Record<string, string>;
  is_valid: boolean;
}

function generatePathArray(id: string) {
  return id.split("-");
}

export const game_config = sessionPersistentStore<Configuration>(
  "game-config-v2",
  {
    id: "", // kana-hiragana-monographs
    path: generatePathArray(""),
    path_dict: {},
    is_valid: false,
  }
);

export function updateGameConfig(new_id: string) {
  const path = generatePathArray(new_id);
  game_config.update(() => {
    return {
      id: new_id,
      path: path,
      path_dict: generatePathDict(path),
      is_valid: full_keys.includes(new_id),
    };
  });
}

export function updateGameConfigAtDepth(new_id: string, depth: number) {
  game_config.update((config) => {
    const updated_id = [...config.id.split("-").slice(0, depth), new_id].join(
      "-"
    );
    const path = generatePathArray(updated_id);
    return {
      id: updated_id,
      path: path,
      path_dict: generatePathDict(path),
      is_valid: full_keys.includes(updated_id),
    };
  });
}

// update the config with no changes, used to refresh the dervied dictionary store when the
// set of glyphs needs to be re-generated
export function refreshGameConfig() {
  game_config.update((config) => {
    return {
      id: config.id,
      path: config.path,
      path_dict: config.path_dict,
      is_valid: config.is_valid,
    };
  });
}

// Given a config path that isn't a leaf of the config tree, provide the next possible choices
export function getModesAtDepth(path: string[]) {
  let current = configurations;
  for (const key of path)
    current = current.find((mode) => mode.key === key)?.modes || [];
  return current;
}

// get the label of the next possible choices
export function getModesLabel(path: string[]) {
  let current_modes = configurations;
  let label: string = "";

  for (let i = 0; i < path.length; i++) {
    const current_mode = current_modes.find((mode) => mode.key === path[i]);

    if (i === path.length - 1) label = current_mode?.modes_label || "";
    else current_modes = current_mode?.modes || [];
  }

  return label;
}

// updateGameConfigAtDepth recursively if there's only one choice to make
export async function selectConfigAtDepth(new_id: string, depth: number) {
  await updateGameConfigAtDepth(new_id, depth);
  const modes = getModesAtDepth(get(game_config).path);
  if (modes.length == 1) {
    const next_id = modes[0];
    selectConfigAtDepth(next_id.key, depth + 1);
  }
}

// Generate a small dictionary with keys being the modes_label, and value the selected mode
// useful for identical mode selections are at different depths.
// For example "Form" selection is index 3 in persoarabic-arabic-..., 2 in persoarabic-other...
export function generatePathDict(path: string[]): Record<string, string> {
  const path_dict: Record<string, string> = {};
  let current_config = configurations.find((config) => config.key === path[0]);
  if (!current_config) return path_dict;

  // Set the first modes_key as "alphabet" by default
  path_dict["alphabet"] = path[0];

  for (let i = 1; i < path.length; i++) {
    if (current_config?.modes_key)
      path_dict[current_config.modes_key] = path[i];
    current_config = current_config?.modes?.find(
      (mode) => mode.key === path[i]
    );
  }

  return path_dict;
}
