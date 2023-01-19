import { filter, pipe, reduce } from './my_func';

const ARRAY = [5, 1, 3, 7, 8, 4, 2];

const isEven = value => value % 2 === 0;
const isOdd = value => value % 2 === 1;
const canCalc = idx => idx - 2 >= 0;

const multipleEvenIndex = (acc, _, idx, arr) => {
  if (!canCalc(idx) || !isEven(idx)) {
    return acc;
  }

  let res = arr;

  res[idx] *= res[idx - 2];
  return res;
};

const addOddIndex = (acc, _, idx, arr) => {
  if (!canCalc(idx) || !isOdd(idx)) {
    return acc;
  }

  let res = arr;

  res[idx] += res[idx - 2];
  return res;
};

const multipleBy2 = arr => filter(arr, value => value % 2 === 0);
const multipleBy3 = arr => filter(arr, value => value % 3 === 0);

const multipleEvenIndexFrom = arr => reduce(arr, multipleEvenIndex);
const multipleOddIndexFrom = arr => reduce(arr, addOddIndex);

const createMultipleBy2And3Object = arr => ({
  two: multipleBy2(arr),
  three: multipleBy3(arr),
});

const myFunc = pipe(multipleEvenIndexFrom, multipleOddIndexFrom, createMultipleBy2And3Object);

console.log(myFunc(ARRAY));
