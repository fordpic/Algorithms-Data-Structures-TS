class Queue {
	elements: any[];

	constructor(...params: any[]) {
		this.elements = [...params];
	}

	enqueue(el: any) {
		this.elements.push(el);
	}

	dequeue() {
		this.elements.shift();
	}

	getElements() {
		return this.elements;
	}
}
