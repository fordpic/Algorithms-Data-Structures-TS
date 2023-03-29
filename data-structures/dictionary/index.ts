export interface Dictionary<T> {
	size: number;
	clear(): void;
	delete(key: string | number): boolean;
	get(key: string | number): T | undefined;
	has(key: string | number): boolean;
	set(key: string | number, value: T): this;
}

export class Dictionary<T> {
	table: { [key: string]: T } = {};
	size: number = 0;

	clear() {
		this.table = {};
	}

	delete(key: string | number) {
		delete this.table[key];

		return true;
	}

	get(key: string | number) {
		return this.table[key];
	}

	has(key: string | number) {
		return this.table[key] !== undefined;
	}

	set(key: string | number, value: T) {
		this.table[key] = value;

		return this;
	}
}
