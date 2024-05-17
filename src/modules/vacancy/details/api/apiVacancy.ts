import axios from "axios";
import { API_URL } from "../../shared/api/const";

export const getVacancy = async (id?: string, companyCode?: string) => {
  const result = await axios({
    method: "get",
    url: `${API_URL}/vacancy/${companyCode}/${id}`,
  });

  const data = await result.data;

  return data.results.vacancies[0].vacancy;
};
