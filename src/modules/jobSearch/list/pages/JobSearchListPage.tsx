import { useEffect } from "react";
import { JobSearchList } from "../components/JobSearchList";
import { getExample2 } from "../api/example";

export const JobSearchListPage = () => {
  useEffect(() => {
    getExample2();
  }, []);

  return (
    <>
      <h1>Список вакансий</h1>
      <JobSearchList
        jobs={[
          { id: 1, title: "Наз1" },
          { id: 2, title: "Наз2" },
        ]}
      />
    </>
  );
};
