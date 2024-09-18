import { useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "../../../shared/components/pagination";
import { UniversalJobType } from "../../../shared/types";
import { Button } from "../../../shared/ui/buttons/Button";
import { TypographyH2 } from "../../../shared/ui/typography/TypographyH2";
import { LkResumesCard } from "./card/LkResumesCard";

interface LkResumesListProps {
  resumes: UniversalJobType[];
  totalCount: number;
}

export const LkResumesList = ({ resumes, totalCount }: LkResumesListProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="py-6">
      <div className="flex flex-col md:gap-6">
        <div>
          <TypographyH2>Мои резюме</TypographyH2>
          <div className=" flex flex-col gap-8 md:flex-row md:items-baseline">
            <p className="pt-2 text-lg text-muted-foreground">
              Вы заполнили <strong>{totalCount}</strong> резюме
            </p>
            <Button
              onClick={() =>
                navigate("/resumes/creation", {
                  state: {
                    from: location.pathname,
                    title: "Назад в Мои резюме",
                  },
                })
              }
              variant="success"
              size="sm"
            >
              + Создайте еще резюме
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
