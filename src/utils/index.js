export const reverseArr = (input) => {
  const ret = [];
  for (let i = input.length - 1; i >= 0; i -= 1) {
    ret.push(input[i]);
  }
  return ret;
};

export const dummyExport = () => {};
