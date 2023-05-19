export function bubbleSort(arr: number[]) {
	while (true) {
		let swapped = false;

		for (let i = 1; i < arr.length; i++) {
			if (arr[i - 1] > arr[i]) {
				[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
				swapped = true;
			}
		}
		// If no swaps, sort is done (break)
		if (!swapped) break;
	}
	return arr;
}
