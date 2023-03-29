export class Node {
	isLeaf: boolean = false;
	children: Node[];
	constructor(n: number) {
		this.children = new Array(n).fill(null);
	}
}

function add(root: Node, string: string) {
	let temp = root;
	for (const c of string.toLowerCase()) {
		const i = c.charCodeAt(0) - 97;
		if (!temp.children[i]) {
			temp.children[i] = new Node(26);
		}
		temp = temp.children[i];
	}
	temp.isLeaf = true;
}

function find(root: Node, string: string) {
	let temp = root;
	for (const c of string.toLowerCase()) {
		const i = c.charCodeAt(0) - 97;
		temp = temp.children[i];

		if (!temp) {
			return false;
		}
	}
	return temp.isLeaf;
}
