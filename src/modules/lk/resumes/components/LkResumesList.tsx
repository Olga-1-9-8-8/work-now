import { Globe } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "../../../shared/components/pagination";
import { UniversalJobType } from "../../../shared/types";
import { Button } from "../../../shared/ui/buttons/Button";
import { Tooltip } from "../../../shared/ui/tooltip/Tooltip";
import { TypographyH3 } from "../../../shared/ui/typography/TypographyH3";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { useLkTotalProfileResumesCountContext } from "../../shared/context/LkTotalProfileResumesCountContextProvider";
import { LkResumesCard } from "./card/LkResumesCard";

interface LkResumesListProps {
  resumes: UniversalJobType[];
  totalCount: number;
}

export const LkResumesList = ({ resumes, totalCount }: LkResumesListProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguageSwitcher("lk");

  const { totalCount: totalResumesCount } = useLkTotalProfileResumesCountContext();

  return (
    <div className="py-2 sm:py-6">
      <div className="flex flex-col md:gap-6">
        <div>
          <Tooltip
            delayDuration={0}
            content={
              <div className="flex items-center gap-2 text-primary-extraDark sm:text-base">
                <Globe className="h-4 w-4 sm:h-6 sm:w-6" /> {t("lk.tooltip")}
              </div>
            }
          >
            <div className="w-fit cursor-pointer">
              <TypographyH3 className="text-lg text-primary-dark sm:text-xl">
                {t("lk.resumes.title", { count: totalResumesCount })}
              </TypographyH3>
            </div>
          </Tooltip>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-baseline">
            <p className="flex flex-col gap-1 pt-2 text-muted-foreground sm:flex-row sm:text-base">
              <span>{t("lk.resumes.list.title")}</span>
              <strong className="text-primary-extraDark">
                {t("lk.resumes.list.description", { count: totalCount })}
              </strong>
            </p>
            <Button
              onClick={() =>
                navigate("/resumes/creation", {
                  state: {
                    from: `${location.pathname}${location.search}`,
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
