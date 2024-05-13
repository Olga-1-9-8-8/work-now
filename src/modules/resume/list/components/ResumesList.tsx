import { useEffect } from "react";
import { NotFound } from "../../../shared/components/not-found/components";
import { Pagination } from "../../../shared/components/pagination";
import { useUrl } from "../../../shared/hooks";
import { ResumesListType } from "../types/ResumesListType";
import { ResumesListItem } from "./item/ResumesListItem";

interface ResumesListProps {
  resumes?: ResumesListType;
  totalCount?: number;
}

export const ResumesList = ({ resumes, totalCount }: ResumesListProps) => {
  const { getParam } = useUrl();

  useEffect(() => {
    if (getParam("offset")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [getParam]);

  if (!resumes) return <NotFound title="Резюме" />;

  return (
    <>
      {totalCount === 0 ? (
        <NotFound title="Резюме" description="Поменяйте фильтры или попробуйте еще раз" />
      ) : (
        resumes.map((resume) => {
          return <ResumesListItem key={resume.id} resume={resume} />;
        })
      )}
      {totalCount && <Pagination totalCount={totalCount} />}
    </>
  );
};
