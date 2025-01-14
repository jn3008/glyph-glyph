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
  stopwatch_enabled: boolean;
  auto_submit: boolean;
}

// Default values for the settings
const default_settings: Settings = {
  appearance: "auto",
  colour: "teal",
  stopwatch_enabled: true,
  auto_submit: false,
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
      stopwatch_enabled: !settings.stopwatch_enabled,
    };
  });
}

export function toggleAutoSubmit() {
  settings.update((settings) => {
    return {
      ...settings,
      auto_submit: !settings.auto_submit,
    };
  });
}
