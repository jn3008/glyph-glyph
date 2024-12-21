export function map(
	value: number,
	in_min: number,
	in_max: number,
	out_min: number,
	out_max: number
): number {
	return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

export function lerp(a: number, b: number, t: number): number {
	// Equivalent to map(t, 0, 1, a, b)
	return a + (b - a) * t;
}

export function constrain(value: number, min: number, max: number): number {
	return Math.min(Math.max(value, min), max);
}

export function c01(value: number): number {
	return constrain(value, 0, 1);
}

export function ease(t: number, strength: number = 1): number {
	strength = Math.max(strength, 0.1); // Prevent extremely small or negative values
	return t < 0.5 ? Math.pow(2 * t, strength) / 2 : 1 - Math.pow(2 * (1 - t), strength) / 2;
}

export function roundToDecimalPlaces(value: number, decimalPlaces: number): number {
	const factor = Math.pow(10, decimalPlaces);
	return Math.round(value * factor) / factor;
}

export function formatTime(time: number): string {
	if (time == null || time < 0) return '--:--.-';

	const [whole, fraction] = time.toFixed(1).split('.'); // Ensure one decimal place
	const minutes = Math.floor(Number(whole) / 60)
		.toString()
		.padStart(2, '0');
	const seconds = (Number(whole) % 60).toString().padStart(2, '0');
	return `${minutes}:${seconds}.${fraction}`;
}

export function shuffleArray<T>(array: T[]): T[] {
	const new_array = [...array];
	for (let i = new_array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[new_array[i], new_array[j]] = [new_array[j], new_array[i]];
	}
	return new_array;
}
