<script lang="ts">
  import { getGlyphs } from "$lib/stores/dictionary";

  const glyphs = [
    ...getGlyphs(["kana", "hiragana", "diacritics"]),
    ...getGlyphs(["kana", "katakana", "diacritics"]),
    ...getGlyphs(["greek", "transcriptions", "monographs", "lower"]),
    ...getGlyphs(["cyrillic", "bulgarian", "lower"]),
    ...getGlyphs(["persoarabic", "urdu", "transcriptions", "isolated"]),
  ];

  let cols: number = 0;
  let rows: number = 0;
  let cell_size: number = 0;

  type GridCell = {
    glyph: string;
    z_index: number;
  };
  let grid: GridCell[][] = [];
  let resizeTimeout: number | undefined;

  function calculateGrid() {
    if (typeof window === "undefined") return; // Prevent error during SSR
    const container = document.querySelector(".splash-container");
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width > height) {
      cols = Math.min(20, Math.floor(width / Math.ceil(height / 20)));
      cell_size = width / cols;
      rows = Math.floor(height / cell_size);
    } else {
      rows = Math.min(20, Math.floor(height / Math.ceil(width / 20)));
      cell_size = height / rows;
      cols = Math.floor(width / cell_size);
    }

    document.documentElement.style.setProperty("--grid-rows", rows.toString());
    document.documentElement.style.setProperty("--grid-cols", cols.toString());
    document.documentElement.style.setProperty(
      "--cell-size",
      cell_size.toString()
    );
  }

  // Re-calculate grid size after resize has stopped for a bit
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        calculateGrid();
        createGrid();
      }, 300);
    });
  }

  // Initialize grid with random glyphs
  function createGrid() {
    calculateGrid();
    grid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        glyph: glyphs[Math.floor(Math.random() * glyphs.length)],
        z_index: Math.floor(Math.random() * 6),
      }))
    );
  }

  createGrid();

  // Randomly highlight some cells every second
  let highlighted_cells: [number, number][] = [];
  setInterval(() => {
    highlighted_cells = Array.from({ length: 5 }, () => [
      Math.floor(Math.random() * rows),
      Math.floor(Math.random() * cols),
    ]);
  }, 2000);
</script>

<div class="splash-container" lang="en">
  <div class="grid-container">
    {#each grid as row, rowIndex}
      {#each row as cell, colIndex}
        <div
          class="grid-cell"
          class:highlighted={highlighted_cells.some(
            ([r, c]) => r === rowIndex && c === colIndex
          )}
          style="z-index: {cell.z_index};"
        >
          {cell.glyph}
        </div>
      {/each}
    {/each}
  </div>
</div>

<style>
  .splash-container {
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    width: 100%;
    height: 100%;
    color: var(--text-color-light);
    text-align: center;
    justify-content: center;
    overflow: hidden;
    z-index: -1;
  }
  .grid-container {
    display: grid;
    grid-template-rows: repeat(var(--grid-rows, 20), 1fr);
    grid-template-columns: repeat(var(--grid-cols, 20), 1fr);
    gap: 5px;
    width: 100%;
    height: 100%;
    background: transparent;
    overflow: hidden;
  }

  .grid-cell {
    width: calc(var(--cell-size) * 1px);
    height: calc(var(--cell-size) * 1px);
    font-size: calc(var(--cell-size) * 3px);

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--text-color-subtle-alpha);
    transition: color 1s ease;

    cursor: default;
    user-select: none;
  }

  .grid-cell.highlighted {
    color: var(--text-color-light);
  }
</style>
