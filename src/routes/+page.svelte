<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Button from "$lib/components/Button.svelte";
  import BottomBar from "$lib/components/BottomBar.svelte";
  import SplashScreen from "$/lib/components/home/SplashScreen.svelte";

  export let data: { stargazers?: number }; // Access data from `load`
  let stargazers = data?.stargazers ?? 0; // Fallback to 0 if undefined
</script>

<svelte:head>
  <title>glyph-glyph</title>
</svelte:head>

<div class="content">
  <Header {stargazers} />

  <section class="content-padding">
    <p>a game to help you learn different writing systems.</p>
  </section>

  <div class="bottom-bar-container">
    <BottomBar justify_content="center" style="glass">
      <Button href="setup" selected={true} title="Set-up">Set-up</Button>
    </BottomBar>
  </div>

  <SplashScreen />
</div>

<style lang="postcss">
  .content {
    overflow: hidden;
    width: 100%;
    height: 100dvh;
  }
  .bottom-bar-container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
