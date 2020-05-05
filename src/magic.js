import _ from 'lodash';
// функция, ввергающая в уныние
const magic = (...vals) => {
    const iterMagic = (...newVals) => magic(...vals.concat(newVals));
    iterMagic.valueOf = () => _.sum(vals);
    return iterMagic;
};
export default magic;

console.log(magic(1, 2)(3, 4, 5)(6)(7, 10) - 8) //.toBe(30));
console.log(magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) + 7) //.toBe(20));

const func = magic(4, 5);
console.log(func(5) + 1) //.toBe(15);
console.log(func(5) + 1) //.toBe(15);
