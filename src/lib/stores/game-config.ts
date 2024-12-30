import { sessionPersistentStore } from "$/lib/persistent-stores";
import { full_keys } from "$/lib/glyph-configurations";

interface Configuration {
  id: string;
  path: string[];
  is_valid: boolean;
}

function generatePathArray(id: string) {
  return id.split("-");
}

export const game_config = sessionPersistentStore<Configuration>(
  "game-config",
  {
    id: "", // kana-hiragana-monographs
    path: generatePathArray(""),
    is_valid: false,
  }
);

export function updateGameConfig(new_id: string) {
  game_config.update(() => {
    return {
      id: new_id,
      path: generatePathArray(new_id),
      is_valid: full_keys.includes(new_id),
    };
  });
}

export function updateGameConfigAtDepth(new_id: string, depth: number) {
  game_config.update((config) => {
    const updated_id = [...config.id.split("-").slice(0, depth), new_id].join(
      "-"
    );
    return {
      id: updated_id,
      path: generatePathArray(updated_id),
      is_valid: full_keys.includes(updated_id),
    };
  });
}
