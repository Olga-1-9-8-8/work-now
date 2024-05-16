import { NotFound } from "../../../shared/components/not-found/components";
import { Pagination } from "../../../shared/components/pagination";
import { ResumesListType } from "../types/ResumesListType";
import { ResumesListItem } from "./item/ResumesListItem";

interface ResumesListProps {
  resumes?: ResumesListType;
  totalCount?: number;
}

export const ResumesList = ({ resumes, totalCount }: ResumesListProps) => {
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
