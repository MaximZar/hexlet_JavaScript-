import lodash from 'lodash';

const itinerary = (tree, startNode, endNode) => {
  const findRoadFromMain = (node, desired) => {
    const isFound = node[0] === desired;
    if (isFound) return [node[0]];
    const direction = node[1].filter(value => lodash.flattenDeep(value).includes(desired));
    const nextDepth = findRoadFromMain(direction.flat(), desired);
    return [node[0]].concat(nextDepth);
  };
  const tripToStart = findRoadFromMain(tree, startNode);
  const tripToEnd = findRoadFromMain(tree, endNode);
  const society = lodash.intersection(tripToStart, tripToEnd);
  const binder = society.pop();
  const firstHalf = tripToStart.slice(society.length + 1).reverse();
  const secondHalf = tripToEnd.slice(society.length + 1);
  const trip = firstHalf.concat(binder, secondHalf);
  return trip;
};
export default itinerary;

const tree = [
  'Moscow', 
  [
    ['Smolensk'],
    ['Yaroslavl'],
    ['Voronezh', 
      [
        ['Liski'],
        ['Boguchar'],
        ['Kursk', [
          ['Belgorod', [
            ['Borisovka'],
          ]],
          ['Kurchatov'],
        ]],
      ]
    ],
    ['Ivanovo', [
      ['Kostroma'], ['Kineshma'],
    ]],
    ['Vladimir'],
    [
      'Tver', 
      [
        ['Klin'], ['Dubna'], ['Rzhev'],
      ]
    ],
  ]
];

console.log(itinerary(tree, 'Dubna', 'Kostroma'));
// ['Dubna', 'Tver', 'Moscow', 'Ivanovo', 'Kostroma']

itinerary(tree, 'Borisovka', 'Kurchatov');
// ['Borisovka', 'Belgorod', 'Kursk', 'Kurchatov']