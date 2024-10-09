import { NotFound } from "../../../shared/components/not-found";
import { Pagination } from "../../../shared/components/pagination";
import { UniversalCardItemType } from "../../../shared/types";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { ResumesListItem } from "./item/ResumesListItem";

interface ResumesListProps {
  resumes?: UniversalCardItemType[];
  totalCount?: number;
}

export const ResumesList = ({ resumes, totalCount }: ResumesListProps) => {
  const { t } = useLanguageSwitcher("resume");
  if (!resumes) return <NotFound title={t("resume.list.notFoundTitle")} />;
  return (
    <div className="flex flex-col gap-3">
      {totalCount === 0 ? (
        <NotFound
          title={t("resume.list.notFoundTitle")}
          description={t("resume.list.notFoundDescription")}
        />
      ) : (
        resumes.map((resume) => {
          return <ResumesListItem key={resume.id} resume={resume} />;
        })
      )}
      {!!totalCount && <Pagination totalCount={totalCount} />}
    </div>
  );
};
