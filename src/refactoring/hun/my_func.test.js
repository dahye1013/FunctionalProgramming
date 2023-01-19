import { forEach, map, filter, reduce, pipe } from './my_func';

describe('forEach', () => {
  it('should call the callback for each element in the array', () => {
    const mockCallback = jest.fn();
    forEach([1, 2, 3], mockCallback);
    expect(mockCallback.mock.calls.length).toBe(3);
  });
});

describe('map', () => {
  it('should return a new array with the result of the callback function applied to each element', () => {
    const result = map([1, 2, 3], value => value * 2);
    expect(result).toEqual([2, 4, 6]);
  });
});

describe('filter', () => {
  it('should return a new array with only the elements that pass the callback test', () => {
    const result = filter([1, 2, 3, 4, 5], value => value % 2 === 0);
    expect(result).toEqual([2, 4]);
  });
});

describe('reduce', () => {
  it('should reduce the array to a single value', () => {
    const result = reduce([1, 2, 3], (acc, value) => acc + value);
    expect(result).toBe(6);
  });

  it('should use the provided initialValue', () => {
    const result = reduce([1, 2, 3], (acc, value) => acc + value, 10);
    expect(result).toBe(16);
  });
});

describe('pipe', () => {
  it('should apply the functions in the provided order', () => {
    const increment = x => x + 1;
    const double = x => x * 2;
    const result = pipe(increment, double)(3);
    expect(result).toBe(8);
  });
});
