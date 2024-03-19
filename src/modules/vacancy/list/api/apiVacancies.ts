import axios from "axios";

export const getVacancies = async () => {
  const result = await axios.get("http://opendata.trudvsem.ru/api/v1/vacancies/");

  const data = await result.data;
  return data.results.vacancies;
};
