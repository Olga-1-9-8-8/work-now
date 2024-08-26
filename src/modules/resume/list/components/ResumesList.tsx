import { NotFound } from "../../../shared/components/not-found";
import { Pagination } from "../../../shared/components/pagination";
import { UniversalCardItemType } from "../../../shared/types";
import { ResumesListItem } from "./item/ResumesListItem";

interface ResumesListProps {
  resumes?: UniversalCardItemType[];
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
      {!!totalCount && <Pagination totalCount={totalCount} />}
    </>
  );
};
