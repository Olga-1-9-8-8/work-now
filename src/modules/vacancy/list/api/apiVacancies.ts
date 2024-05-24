import axios from "axios";
import { API_URL } from "../../shared/api/const";

export const getVacancies = async (param: any, segments: string = "/region/code") => {
  const result = await axios({
    method: "get",
    url: `${API_URL}${segments}`,
    params: {
      limit: 30,
      offset: 1,
      text: "",
      ...param,
    },
  });

  const data = await result.data;
  return data.results.vacancies;
};
