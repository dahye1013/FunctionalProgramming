export const forEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

export const map = (arr, cb) => {
  let res = [];
  forEach(arr, item => {
    res.push(cb(item));
  });
  return res;
};

export const filter = (arr, cb) => {
  let res = [];
  let idx = 0;
  forEach(arr, item => {
    if (cb(item)) {
      res.push(arr[idx]);
    }
    idx++;
  });
  return res;
};

export const reduce = (arr, cb, initialValue = 0) => {
  let res = initialValue;

  forEach(arr, item => {
    res = cb(res, item);
  });

  return res;
};
