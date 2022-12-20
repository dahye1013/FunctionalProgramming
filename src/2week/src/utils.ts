// C - util
export const sum_array = (numArray: number[]) => numArray.reduce(add, 0);

// C - util
export const add_element_to_array = <T extends unknown>(
  array: T[],
  element: T
) => [...array, element];

// C - util
export const add = (num1: number, num2: number) => num1 + num2;
