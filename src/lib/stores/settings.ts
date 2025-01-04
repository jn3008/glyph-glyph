import { localPersistentStore } from "$/lib/persistent-stores";

export const theme_appearances = ["light", "auto", "dark"] as const;
export type ThemeAppearance = (typeof theme_appearances)[number];

export const theme_colours = [
  "red",
  "orange",
  "yellow",
  "lime",
  "teal",
  "blue",
  "indigo",
  "pink",
] as const;
export type ThemeColour = (typeof theme_colours)[number];

// Define the GameSettings interface
export interface Settings {
  appearance: ThemeAppearance;
  colour: ThemeColour;
  using_stopwatch: boolean;
}

// Default values for the settings
const default_settings: Settings = {
  appearance: "auto",
  colour: "teal",
  using_stopwatch: true,
};

// Create the settings store
export const settings = localPersistentStore<Settings>(
  "game-settings",
  default_settings
);

export function toggleStopwatch() {
  settings.update((settings) => {
    return {
      ...settings,
      using_stopwatch: !settings.using_stopwatch,
    };
  });
}
