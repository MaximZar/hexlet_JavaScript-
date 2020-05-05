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
    if (key === this.leaf) {
      return this;
    }
    if (key < this.leaf && this.left) {
      return this.left.search(key);
    }
    if (key > this.leaf && this.right) {
      return this.right.search(key);
    }
    return null;
  }
  insert(key) {
    if (this.leaf === null) this.leaf = key;
    if (!this.left && key < this.leaf) this.left = new Node(key);
    if (!this.right && key > this.leaf) this.right = new Node(key);
    if (key < this.leaf) this.left.insert(key);
    if (key > this.leaf) this.right.insert(key);
  }
}
export default Node;


// const expected1 = new Node(5);
// const expected2 = new Node(22, null, new Node(20));
// const tree = new Node(9,
//   new Node(4,
//     new Node(3),
//     new Node(6,
//       expected1,
//       new Node(7))),
//   new Node(17,
//     null,
//     expected2));

// console.log(tree.search(5)) //.toBe(expected1);
// console.log(tree.search(22)) //.toBe(expected2);
// console.log(tree.search(35)) //.toBeNull();
// console.log(tree.search(2)) //.toBeNull();

// const tree = new Node();
//   tree.insert(9);
//   tree.insert(4);
//   tree.insert(17);

// console.log(JSON.stringify(tree))
// console.log(tree.getKey()) //.toBe(9);
// console.log(tree.getLeft().getKey()) //.toBe(4);
// console.log(tree.getRight().getKey()) //.toBe(17);