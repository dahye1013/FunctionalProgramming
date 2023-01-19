import { forEach, map, filter, reduce } from './my_func';

describe('forEach function', () => {
  it('Should call the callback for each element in the array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const spy = jest.fn();
    forEach(numbers, spy);
    expect(spy).toHaveBeenCalledTimes(numbers.length);
  });
});

describe('map function', () => {
  it('Should return a new array with the result of calling the callback on each element', () => {
    const numbers = [1, 2, 3, 4, 5];
    const double = num => num * 2;
    const doubledNumbers = map(numbers, double);
    expect(doubledNumbers).toEqual([2, 4, 6, 8, 10]);
  });
});

describe('filter function', () => {
  it('Should return a new array with only the elements that passed the test', () => {
    const numbers = [1, 2, 3, 4, 5];
    const even = num => num % 2 === 0;
    const evenNumbers = filter(numbers, even);
    expect(evenNumbers).toEqual([2, 4]);
  });
});

describe('reduce function', () => {
  it('Should return a single accumulated value', () => {
    const numbers = [1, 2, 3, 4, 5];
    const sum = (accumulator, num) => accumulator + num;
    const total = reduce(numbers, sum);
    expect(total).toEqual(15);

    const product = (accumulator, num) => accumulator * num;
    const productOfNumbers = reduce(numbers, product, 1);
    expect(productOfNumbers).toEqual(120);
  });
});
