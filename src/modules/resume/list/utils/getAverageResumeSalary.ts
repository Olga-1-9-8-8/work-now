/* eslint-disable unicorn/no-array-reduce */
import { getAverageSalary } from "../../../shared/utils";

export const getAverageResumeSalary = <T extends { salary: number[] | null }[]>(resumes: T) => {
  let countResumesWithSalary = 0;

  const sumSalary = resumes.reduce((prev, curr) => {
    if (!curr.salary || curr.salary.length === 0 || (!curr.salary[0] && !curr.salary[1])) {
      return prev;
    }
    countResumesWithSalary += 1;
    return prev + getAverageSalary(curr.salary);
  }, 0);

  return countResumesWithSalary ? sumSalary / countResumesWithSalary : null;
};
