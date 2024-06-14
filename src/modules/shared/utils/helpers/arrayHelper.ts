export const createEmptyArray = (length: number) => Array.from({ length }, (_, index) => index + 1);

export const createTitleValueArrayFromNumbersRange = (num1: number, num2: number) => {
  return createEmptyArray(num2 - num1 + 1).map((_, index) => {
    return { value: `${index + num1}`, title: `${index + num1}` };
  });
};
