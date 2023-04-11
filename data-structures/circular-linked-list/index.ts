import { LinkedList, LinkedListNode } from '../linked-list/index';

export interface CircularLinkedListNode<T> extends LinkedListNode<T> {
	next: CircularLinkedListNode<T>;
}

export class CircularLinkedListNode<T> implements CircularLinkedListNode<T> {
	next: CircularLinkedListNode<T>;
	constructor(value: T, next?: CircularLinkedListNode<T>) {
		this.value = value;
		this.next = next ? next : this;
	}
}

export class CircularLinkedList<T> extends LinkedList<T> {
	head?: CircularLinkedListNode<T>;

	addHead(value: T): CircularLinkedListNode<T> {
		const node = new CircularLinkedListNode(value, this.head);

		this.head = node;
		this.length++;

		return this.head;
	}

	addTail(value: T): CircularLinkedListNode<T> {
		if (!this.head) {
			return this.addHead(value);
		}

		const node = new CircularLinkedListNode(value, this.head);

		for (let temp = this.head; temp !== undefined; temp = temp.next) {
			if (temp.next === this.head) {
				temp.next = node;
				break;
			}
		}

		this.length++;
		return node;
	}
}

// Test
const list = new CircularLinkedList<number>();

console.log(list.addTail(1));
console.log(list.addTail(2));
console.log(list.addTail(3));
console.log(list);

// Value should be 1
console.log(list.head?.next?.next?.next);
