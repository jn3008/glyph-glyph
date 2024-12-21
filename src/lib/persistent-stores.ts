import { writable } from 'svelte/store';

// Persistent store for sessionStorage
export function sessionPersistentStore<T>(key: string, start_value: T) {
	// Create the writable store
	const store = writable<T>(start_value, () => {
		if (typeof sessionStorage !== 'undefined') {
			const saved_value = sessionStorage.getItem(key);
			if (saved_value) store.set(JSON.parse(saved_value));
		}

		return () => {}; // Cleanup is not needed for sessionStorage
	});

	// Save updates to sessionStorage
	store.subscribe((value) => {
		if (typeof sessionStorage !== 'undefined') sessionStorage.setItem(key, JSON.stringify(value));
	});

	return store;
}

// Persistent store for localStorage
export function localPersistentStore<T>(key: string, start_value: T) {
	// Create the writable store
	const store = writable<T>(start_value, () => {
		if (typeof localStorage !== 'undefined') {
			const saved_value = localStorage.getItem(key);
			if (saved_value) {
				// store.set({ ...start_value, ...JSON.parse(saved_value) });

				// Parse saved value and filter out nulls
				const parsed_value = JSON.parse(saved_value) as T;
				const merged_value = { ...(start_value as T) };

				for (const k in parsed_value) {
					// Only merge non-null values
					if (parsed_value[k] !== null) merged_value[k] = parsed_value[k];
				}

				store.set(merged_value);
			}
		}

		return () => {}; // Cleanup is not needed for localStorage
	});

	// Save updates to localStorage
	store.subscribe((value) => {
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(key, JSON.stringify(value));
		}
	});

	return store;
}
