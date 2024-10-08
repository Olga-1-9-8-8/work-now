import { useLocation, useNavigate } from "react-router-dom";
import { CardSocialsButtons } from "../../../../shared/components/card";
import { AppliedButton } from "../../../../shared/features/applies";
import { UniversalCardItemType, UserEntity } from "../../../../shared/types";
import { Card, CardFooter } from "../../../../shared/ui/card/Card";
import { useLanguageSwitcher } from "../../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { LkCardHeader } from "./header/LkCardHeader";

interface LkCardProps {
  data: UniversalCardItemType;
  title: string;
}

export const LkCard = ({ data, title }: LkCardProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguageSwitcher("lk");

  return (
    <Card
      variant="clickable"
      className="relative"
      onClick={() =>
        navigate(`/${data.role === UserEntity.Company ? "vacancies" : "resumes"}/${data.id}`, {
          state: { from: location.pathname, title: `${t("lk.card.backButtonTitle")} ${title}` },
        })
      }
    >
      <LkCardHeader data={data} />
      <CardFooter className="flex-col justify-between gap-4 pt-4 lg:flex-row">
        <div className="w-full">
          <AppliedButton id={data.id} isInApplies={data.isInApplies} />
        </div>
        <CardSocialsButtons phone={data.phone} />
      </CardFooter>
    </Card>
  );
};
