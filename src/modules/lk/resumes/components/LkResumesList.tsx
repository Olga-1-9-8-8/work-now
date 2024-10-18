import { useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "../../../shared/components/pagination";
import { UniversalJobType } from "../../../shared/types";
import { Button } from "../../../shared/ui/buttons/Button";
import { TypographyH3 } from "../../../shared/ui/typography/TypographyH3";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { LkResumesCard } from "./card/LkResumesCard";

interface LkResumesListProps {
  resumes: UniversalJobType[];
  totalCount: number;
}

export const LkResumesList = ({ resumes, totalCount }: LkResumesListProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguageSwitcher("lk");

  return (
    <div className="py-2 sm:py-6">
      <div className="flex flex-col md:gap-6">
        <div>
          <TypographyH3>{t("lk.resumes.title")}</TypographyH3>
          <div className=" flex flex-col gap-8 md:flex-row md:items-baseline">
            <p className="pt-2 text-lg text-muted-foreground">
              {t("lk.resumes.list.title")}{" "}
              <strong className="text-primary-extraDark">
                {t("lk.resumes.list.description", { count: totalCount })}
              </strong>
            </p>
            <Button
              onClick={() =>
                navigate("/resumes/creation", {
                  state: {
                    from: location.pathname,
                    title: t("lk.resumes.backButtonTitle"),
                  },
                })
              }
              variant="success"
              size="sm"
            >
              + {t("lk.resumes.createButtonTitle")}
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 sm:py-4">
          {resumes.map((resume) => (
            <LkResumesCard key={resume.id} resume={resume} />
          ))}
        </div>
      </div>
      <Pagination totalCount={totalCount} />
    </div>
  );
};
