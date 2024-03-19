import { WorkListItem } from "../../../shared/components/search-card";
import { ResumesListItem } from "./item/ResumesListItem";

interface ResumesListProps {
  resumes: WorkListItem[];
}

export const ResumesList = ({ resumes }: ResumesListProps) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {resumes.map((resume, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <ResumesListItem key={index} resume={resume} />
      ))}
    </div>
  );
};
