export const getAverageSalary = (arr: number[]) => {
  const [minSalary, maxSalary] = arr;

  if (minSalary && !maxSalary) {
    return minSalary;
  }

  if (maxSalary && !minSalary) {
    return maxSalary;
  }

  return (minSalary + maxSalary) / 2;
};
