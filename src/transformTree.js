import _ from 'lodash'

const makeGraph = (tree, parent) => {
  const [leaf, children] = tree;
  if (!children) {
    return { [leaf]: [parent] };
  }
  const flatChildren = _.flatten(children);
  const neighbors = [...flatChildren, parent]
    .filter((n) => n && !_.isArray(n));
  return {
    [leaf]: neighbors,
    ...children.reduce((acc, c) => ({ ...acc, ...makeGraph(c, leaf) }), {}),
  };
};
const rebuildGraph = (graph, lastTop, now) => {
  if (now !== lastTop) {
    rebuildGraph(graph, lastTop, graph[now][graph[now].length - 1]);
    graph[now] = graph[now].slice(1).concat(graph[now][0]);
  }
  return;
};
const graphToTree = (graph, newTop) => {
  const haveLeaf = _.has(graph, newTop);
  if (!haveLeaf || graph[newTop].length === 0) {
    return [newTop];
  }
  return [
    newTop, 
    graph[newTop]
    .reduce((acc, node) => {
      graph[node].pop();
      acc.push(graphToTree(graph, node));
      return acc;
    }, [])
  ];
};

const transform = (tree, newTop) => {
  const graph = makeGraph(tree);
  const lastTop = tree[0];
  const parent = graph[newTop][graph[newTop].length - 1];

  if (lastTop !== parent) {
    rebuildGraph(graph, lastTop, newTop);
    _.remove(graph[newTop], val => val === parent);
    graph[newTop] = [parent].concat(graph[newTop]);
  } else {
    _.remove(graph[lastTop], val => val === newTop);
    graph[lastTop] = graph[lastTop].concat(newTop);
  }

  const modifyTree = graphToTree(graph, newTop);
  return modifyTree;
};
export default transform;

const tree = ['A', [
  ['B', [
    ['D', [
      ['H'],
    ]],
    ['E'],
  ]],
  ['C', [
    ['F', [
      ['I', [
        ['M'],
      ]],
      ['J', [
        ['N'],
        ['O'],
      ]],
    ]],
    ['G', [
      ['K'],
      ['L'],
    ]],
  ]],
]];
const tree2 = ['A', [ //     A
  ['B', [            //    / \
    ['D'],           //   B   C
  ]],                //  /   / \
  ['C', [            // D   E   F
    ['E'],
    ['F'],
  ]],
]];
// console.log(JSON.stringify(transform(tree, 'I'), null, ' '));
console.log(JSON.stringify(transform(tree2, 'B'), null, ' '));
