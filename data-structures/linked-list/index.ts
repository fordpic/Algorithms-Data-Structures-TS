export interface LinkedListNode<T> {
	next?: LinkedListNode<T>;
	value: T;
}

export class LinkedListNode<T> implements LinkedListNode<T> {
	constructor(value: T, next?: LinkedListNode<T>) {
		this.value = value;
		this.next = next;
	}
}

export interface LinkedList<T> {
	head?: LinkedListNode<T>;
	length: number;
}

export class LinkedList<T> implements LinkedList<T> {
	head?: LinkedListNode<T>;
	length = 0;

	clear() {
		this.head = undefined;
		this.length = 0;
	}

	contains(value: T) {
		for (let temp = this.head; temp != undefined; temp = temp?.next) {
			if (temp.value === value) {
				return true;
			}
		}
	}

	find(value: T): LinkedListNode<T> | undefined {
		for (let temp = this.head; temp != undefined; temp = temp?.next) {
			if (temp.value === value) {
				return temp;
			}
		}
	}

	findLast(value: T): LinkedListNode<T> | undefined {
		let last;

		for (let temp = this.head; temp != undefined; temp = temp?.next) {
			if (temp.value === value) {
				last = temp;
			}
		}
		return last;
	}

	addHead(value: T) {
		const node = new LinkedListNode(value, this.head);

		this.head = node;
		this.length++;

		return this.head;
	}

	addTail(value: T) {
		if (!this.head) {
			return this.addHead(value);
		}

		const node = new LinkedListNode(value);
		for (let temp = this.head; temp != undefined; temp = temp.next) {
			if (!temp.next) {
				temp.next = node;
				break;
			}
		}

		this.length++;
		return node;
	}

	remove(value: T) {
		for (
			let temp = this.head;
			temp != undefined && temp.next?.value === value;
			temp = temp?.next
		) {
			if (this.length === 1) {
				return this.clear();
			}
			temp.next = temp.next.next;
		}

		this.length--;
	}

	removeHead() {
		if (this.length === 1) {
			return this.clear();
		}
		this.head = this.head?.next;

		this.length--;
	}

	removeTail() {
		if (this.length === 1) {
			return this.clear();
		}

		let temp = this.head;

		while (temp?.next?.next) {
			temp = temp.next;
		}

		if (temp) {
			temp.next = undefined;
		}

		this.length--;
	}
}
