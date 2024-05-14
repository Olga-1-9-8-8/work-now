export const getFilterValue = (val: string | string[], op: string) => {
  if (Array.isArray(val)) {
    if (op === "cs") {
      return `{${val.join(",")}}`;
    }
    if (op === "in") {
      return `(${val})`;
    }
  }
  return val;
};
