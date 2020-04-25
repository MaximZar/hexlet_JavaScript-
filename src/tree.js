// поиск всех элементов 2 уровня глубины

const tree = (treeArray) => {
  return treeArray.reduce((acc, node) => {
    const filter = Array.isArray(node);
    return filter ? acc.concat(node) : acc;
  }, []);
};
export default tree;
// console.log(tree([1, 2, [3, 5], [[4, 3], 2]]));