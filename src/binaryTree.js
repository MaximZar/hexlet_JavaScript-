class Node {
  constructor(leaf = null, child1 = null, child2 = null) {
    this.leaf = leaf;
    this.left = child1;
    this.right = child2;
  }
  getKey() {
    return this.leaf;
  }
  getLeft() {
    return this.left;
  }
  getRight() {
    return this.right;
  }
  search(key) {
    if (key === this.key) {
      return this;
    }
    if (key < this.key && this.left) {
      return this.left.search(key);
    }
    if (key > this.key && this.right) {
      return this.right.search(key);
    }
    return null;
  }
}
export default Node;


const expected1 = new Node(5);
const expected2 = new Node(22, null, new Node(20));
const tree = new Node(9,
  new Node(4,
    new Node(3),
    new Node(6,
      expected1,
      new Node(7))),
  new Node(17,
    null,
    expected2));

console.log(tree.search(5)) //.toBe(expected1);
console.log(tree.search(22)) //.toBe(expected2);
console.log(tree.search(35)) //.toBeNull();
console.log(tree.search(2)) //.toBeNull();