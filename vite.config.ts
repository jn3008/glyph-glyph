import { defineConfig } from "vitest/config";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: ["package.json"], // allow access to get the version number
    },
  },

  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },

  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
