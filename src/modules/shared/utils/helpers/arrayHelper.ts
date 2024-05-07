export const createEmptyArray = (length: number) => Array.from({ length }, (_, index) => index + 1);

export const concatNullableArrays = (
  array1: unknown[] | null,
  array2: unknown[] | null,
): unknown[] | null => {
  if (!array1 || !array2) {
    return array1 ?? array2;
  }

  return [...array1, ...array2];
};
