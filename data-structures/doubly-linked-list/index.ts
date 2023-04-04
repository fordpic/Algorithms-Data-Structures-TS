import { LinkedList, LinkedListNode } from '../linked-list';

export interface DoublyLinkedListNode<T> extends LinkedListNode<T> {
	previous?: DoublyLinkedListNode<T>;
	next?: DoublyLinkedListNode<T>;
	value: T;
}

export class DoublyLinkedListNode<T>
	extends LinkedListNode<T>
	implements DoublyLinkedListNode<T>
{
	previous?: DoublyLinkedListNode<T>;
	next?: DoublyLinkedListNode<T>;
	constructor(
		value: T,
		next?: DoublyLinkedListNode<T>,
		previous?: DoublyLinkedListNode<T>
	) {
		super(value, next);
		this.previous = previous;
	}
}

export interface DoublyLinkedList<T> extends LinkedList<T> {
	head?: DoublyLinkedListNode<T>;
	tail?: DoublyLinkedListNode<T>;
	length: number;
}
