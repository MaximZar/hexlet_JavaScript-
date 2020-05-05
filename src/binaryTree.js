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
  getCount() {
    let count = 1;
    count += this.left === null ? 0 : this.left.getCount();
    count += this.right === null ? 0 : this.right.getCount();
    return count;
  }
  getSum() {
    let sum = this.leaf;
    sum += this.left === null ? 0 : this.left.getSum();
    sum += this.right === null ? 0 : this.right.getSum();
    return sum;
  }
  toArray() {
    const array = [this.leaf];
    if (this.left !== null) array.push(...this.left.toArray());
    if (this.right !== null) array.push(...this.right.toArray());
    return array;
  }
  toString() {
    const line = this.toArray().reduce((acc, value) => acc + `${value}, `, '(');
    return `${line.slice(0, -2)})`;
  }
  every(cond) {
    if (!cond(this.leaf)) return false;
    let result = true;
    if (this.left) result = result && this.left.every(cond);
    if (this.right) result = result && this.right.every(cond);
    return result;
  }
  some(cond) {
    let result = false;
    result = result || cond(this.leaf);
    if (this.left) result = result || this.left.some(cond);
    if (this.right) result = result || this.right.some(cond);
    return result;
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

const tree = new Node();
  tree.insert(9);
  tree.insert(4);
  tree.insert(17);
  tree.insert(2);
  tree.insert(5);

console.log(tree.some((key) => key === 9))
// console.log(JSON.stringify(tree))
// console.log(tree.getKey()) //.toBe(9);
// console.log(tree.getLeft().getKey()) //.toBe(4);
// console.log(tree.getRight().getKey()) //.toBe(17);