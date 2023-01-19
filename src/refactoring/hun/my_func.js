export const forEach = (arr, cb) => {
  let idx = -1;
  let length = arr.length ?? 0;

  while (++idx < length) {
    cb(arr[idx], idx, arr);
  }
};

export const map = (arr, cb) => {
  let res = [];
  forEach(arr, (...args) => {
    res.push(cb(...args));
  });
  return res;
};

export const filter = (arr, cb) => {
  let res = [];

  forEach(arr, (value, idx) => {
    if (cb(value)) {
      res.push(arr[idx]);
    }
  });
  return res;
};

export const reduce = (arr, cb, initialValue = 0) => {
  let res = initialValue;

  forEach(arr, (value, idx) => {
    res = cb(res, value, idx, arr);
  });

  return res;
};

export const pipe =
  (...cbArr) =>
  initialData =>
    reduce(cbArr, (accData, cb) => cb(accData), initialData);
