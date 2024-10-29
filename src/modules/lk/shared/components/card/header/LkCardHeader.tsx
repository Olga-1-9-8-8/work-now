import { ArrowRight, Building2 } from "lucide-react";
import { MapCityBadgeGroup } from "../../../../../shared/components/map";
import { Avatar } from "../../../../../shared/features/avatar";
import { UniversalCardItemType, UserEntity } from "../../../../../shared/types";
import { Button } from "../../../../../shared/ui/buttons/Button";
import { CardHeader } from "../../../../../shared/ui/card/Card";
import { useLanguageSwitcher } from "../../../../../shared/widgets/languages-switcher";
import { LkCardHeaderTitle } from "./LkCardHeaderTitle";

interface LkCardHeaderProps {
  data: UniversalCardItemType;
}

export const LkCardHeader = ({ data }: LkCardHeaderProps) => {
  const isCompany = data.role === UserEntity.Company;
  const { t } = useLanguageSwitcher("lk");

  return (
    <CardHeader className="flex-row justify-between">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <Avatar
            avatar={data.avatar}
            userName={data.userName}
            icon={isCompany ? Building2 : undefined}
            className=" h-14 w-14 sm:h-16 sm:w-16"
          />
          <LkCardHeaderTitle
            position={data.position}
            id={data.id}
            role={data.role}
            userName={data.userName}
            language={data.language}
            salary={data.salary}
          />
        </div>
        {data.cities && <MapCityBadgeGroup cities={data.cities} />}
      </div>
      <Button variant="link" className="hidden py-0 lg:inline-flex">
        {t("lk.card.linkTitle")}{" "}
        {isCompany ? t("lk.card.linkTitleVacancy") : t("lk.card.linkTitleResume")}
        <ArrowRight size={17} className="ml-2" />
      </Button>
    </CardHeader>
  );
};
