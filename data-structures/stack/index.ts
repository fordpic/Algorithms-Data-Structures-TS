export interface Stack<T> {
	elements: T[];
	max: number;
	top: number;
	peek(): T;
	push(el: T): void;
	pop(): T;
}

export class Stack<T> implements Stack<T> {
	elements: T[];
	max: number;
	constructor(max: number = Math.pow(2, 32) - 1) {
		this.elements = new Array(max);
		this.max = max;
		this.top = 0;
	}

	peek() {
		return this.elements[this.top];
	}

	push(el: T) {
		if (this.top === this.max) {
			throw Error('overflow');
		}

		this.elements[this.top++] = el;
	}

	pop() {
		if (this.top === 0) {
			throw Error('underflow');
		}

		this.top--;

		const removed = this.elements[this.top];
		delete this.elements[this.top];

		return removed;
	}
}
