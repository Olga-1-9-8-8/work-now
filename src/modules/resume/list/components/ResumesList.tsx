import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../../shared/components/pagination";
import { ResumesListType } from "../types/ResumesListType";
import { ResumesListItem } from "./item/ResumesListItem";

interface ResumesListProps {
  resumes: ResumesListType;
  totalCount?: number;
}

export const ResumesList = ({ resumes, totalCount }: ResumesListProps) => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("offset")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col gap-4 py-8 sm:p-4">
      {resumes.map((resume) => {
        return <ResumesListItem key={resume.id} resume={resume} />;
      })}
      {totalCount && <Pagination totalCount={totalCount} />}
    </div>
  );
};
