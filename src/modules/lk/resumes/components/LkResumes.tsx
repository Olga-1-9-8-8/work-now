import { ResumeItem } from "../../../resume/shared/types";
import { TypographyH2 } from "../../../shared/ui/typography/TypographyH2";
import { useDeleteResume } from "../hooks";
import { LkResumesCard } from "./card/LkResumesCard";

interface LkResumesProps {
  resumes: ResumeItem[];
  totalCount?: number;
}

export const LkResumes = ({ resumes, totalCount }: LkResumesProps) => {
  const { deleteResume, isDeleting } = useDeleteResume();

  return (
    <div className="flex flex-col md:gap-6">
      <div>
        <TypographyH2>Мои резюме</TypographyH2>
        <p className="pt-2 text-lg text-muted-foreground">
          Вы заполнили <strong>{totalCount}</strong> резюме
        </p>
      </div>

      <div className="flex flex-col gap-4 py-8 sm:py-4">
        {resumes.map((resume, index: number) => (
          <LkResumesCard
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            resume={resume}
            onDelete={deleteResume}
            isDeleting={isDeleting}
          />
        ))}
      </div>
    </div>
  );
};
