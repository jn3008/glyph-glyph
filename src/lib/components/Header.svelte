<script lang="ts">
  import { version } from "$/../package.json";
  export let stargazers: number;
</script>

<section class="header content-padding">
  <div class="content-width center">
    <div class="title">
      <h1>glyph-glyph</h1>
      v{version}
    </div>
    <ul>
      <li>
        <a
          href="https://github.com/jn3008/glyph-glyph"
          target="_blank"
          rel="nofollow"
          class="menu-link"
          aria-label="Author"
        >
          by jn3008
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 98 96"
            style="height: 1em; width: auto;"
            ><path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              fill="var(--text-color)"
            ></path>
          </svg>
          <!-- <span class="stargazers"> -->
          <span class="stargazers-container">
            <span class="material-symbols-rounded">star</span>
            <span class="stargazers">
              {stargazers.toLocaleString("en")}
            </span>
          </span>
        </a>
      </li>
    </ul>
  </div>
</section>

<style lang="postcss">
  .header {
    background: var(--background-contrast-alpha);
    backdrop-filter: blur(10px);
    z-index: 200;
  }

  h1 {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: var(--line-space);
  }

  li {
    list-style: none;
    white-space: nowrap;

    a {
      display: flex;
      align-items: center;
      gap: 0.3em;
      text-decoration: none;
      border-bottom: 1px solid transparent;

      &:hover {
        border-color: currentColor;
      }
    }
  }

  .menu-link {
    color: var(--text-color);

    &:active,
    &:focus-visible {
      outline: none;
      color: var(--text-color-on-focus-color);
      background: var(--focus-color);
      border-color: var(--focus-color);
    }
  }

  .stargazers-container {
    display: flex;
  }

  .stargazers {
    margin: auto;
    display: flex;
  }

  .title {
    margin-bottom: var(--line-space);
  }
</style>
