export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

const padArray = (arr, length) => {
  const newArr = [...arr];
  const padding = length - newArr.length;
  for (let i = 0; i < padding; i++) {
    newArr.push("");
  }
  return newArr;
};

export const snapToLength = (arr, length) => {
  if (!arr || arr.length === 0) return range(0, length).map((_) => "");
  if (arr.length === length) return arr;
  if (arr.length > length)
    return arr.slice(arr.length - length, arr.length - 1);
  // array must exist but be shorter than length
  return padArray(arr, length);
};
