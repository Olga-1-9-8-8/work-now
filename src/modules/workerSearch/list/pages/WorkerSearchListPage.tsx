import { useEffect } from "react";
import { getExample } from "../api/example";
import { WorkerSearchList } from "../components/WorkerSearchList";

export const WorkerSearchListPage = () => {
  useEffect(() => {
    getExample();
  }, []);
  return (
    <>
      <h1>Список работников для поиска</h1>
      <WorkerSearchList
        workers={[
          { id: 1, title: "Наз1" },
          { id: 2, title: "Наз2" },
        ]}
      />
    </>
  );
};
