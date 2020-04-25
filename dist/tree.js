"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// поиск всех элементов 2 уровня глубины
const tree = treeArray => {
  return treeArray.reduce((acc, node) => {
    const filter = Array.isArray(node);
    return filter ? acc.concat(node.flat(0)) : acc;
  }, []);
};

var _default = tree; // console.log(tree([1, 2, [3, 5], [[4, 3], 2]]));

exports.default = _default;