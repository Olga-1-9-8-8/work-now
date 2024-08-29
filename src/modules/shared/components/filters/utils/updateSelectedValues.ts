export const updateSelectedValues = (value: string, selectedValues: string[]) => {
  return selectedValues.includes(value)
    ? selectedValues.filter((v) => v !== value)
    : [...selectedValues, value];
};
