export const createEmptyArray = (length: number) => Array.from({ length }, (_, index) => index + 1);

export const createTitleValueArrayFromNumbersRange = (arr: [number, number]) => {
  const [num1, num2] = arr;

  return createEmptyArray(num2 - num1 + 1).map((_, index) => {
    return { value: `${index + num1}`, title: `${index + num1}` };
  });
};

export const concatNullableArrays = (
  array1: unknown[] | null,
  array2: unknown[] | null,
): unknown[] | null => {
  if (!array1 || !array2) {
    return array1 ?? array2;
  }

  return [...array1, ...array2];
};
