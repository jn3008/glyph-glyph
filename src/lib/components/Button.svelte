<script lang="ts">
	export let title: string = '';
	export let style: 'actived' | 'disactivated' = 'actived';
	export let selected: boolean = false;

	export let href: string = '';
</script>

{#if !href}
	<button class="button {style}" on:click class:selected {title}>
		<div class="effect">
			<slot />
		</div>
	</button>
{:else}
	<a {href} class="button {style}" on:click data-sveltekit-prefetch class:selected {title}>
		<div class="effect">
			<slot />
		</div>
	</a>
{/if}

<style lang="postcss">
	.button {
		display: inline-block;
		transition: all 0.2s ease-in-out;
		border: none;
		border-bottom: 2px solid var(--border-input);
		border-radius: 0.25em;
		cursor: pointer;
		text-decoration: none;

		background-color: var(--dark-button-color);
		color: var(--dark-button-text-color);
		font-family: inherit;
		font-size: 1.4em;
		font-weight: 500;
		padding: 0.6rem 1rem;
		margin: 0;

		max-width: 50vw;
	}
	.button:hover {
		font-weight: 700;
	}
	.button.selected {
		background-color: var(--dark-button-color-selected);
		color: var(--dark-button-text-color-selected);
		font-weight: 700;
	}

	.button:not(.disactivated) {
		&:active > .effect {
			transform: translateY(5%) scale(105%, 90%);
			transition: transform 0.05s ease;
		}
	}

	.button.disactivated {
		cursor: default;
		pointer-events: none;
		background-color: var(--dark-button-disactivated-color);
		color: var(--dark-button-disactivated-text-color);
	}
</style>
