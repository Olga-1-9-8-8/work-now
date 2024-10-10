import { ArrowRight, Building2 } from "lucide-react";
import { Avatar } from "../../../../../shared/components/avatar";
import { MapCityBadgeGroup } from "../../../../../shared/components/map";
import { LanguageType } from "../../../../../shared/configs";
import { UniversalCardItemType, UserEntity } from "../../../../../shared/types";
import { Badge } from "../../../../../shared/ui/badge/Badge";
import { Button } from "../../../../../shared/ui/buttons/Button";
import { CardHeader } from "../../../../../shared/ui/card/Card";
import { getSalaryTitle } from "../../../../../shared/utils";
import { useLanguageSwitcher } from "../../../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { LkCardHeaderTitle } from "./LkCardHeaderTitle";

interface LkCardHeaderProps {
  data: UniversalCardItemType;
}

export const LkCardHeader = ({ data }: LkCardHeaderProps) => {
  const isCompany = data.role === UserEntity.Company;
  const { t, language } = useLanguageSwitcher("lk");

  return (
    <CardHeader className="flex-row justify-between">
      <div className="flex items-center gap-4">
        <Avatar
          src={data.avatar}
          userName={data.userName}
          icon={isCompany ? Building2 : undefined}
          className="h-16 w-16"
        />
        <div className="flex flex-col gap-2">
          <LkCardHeaderTitle
            position={data.position}
            id={data.id}
            role={data.role}
            isInFavorites={data.isInFavorites}
            userName={data.userName}
          />
          {data.cities && <MapCityBadgeGroup cities={data.cities} />}
          <Badge className="ml-4 w-max" variant="success">
            {getSalaryTitle(language as LanguageType, data.salary)}
          </Badge>
        </div>
      </div>
      <Button variant="link" className="hidden py-0 lg:inline-flex">
        {t("lk.card.linkTitle")}{" "}
        {isCompany ? t("lk.card.linkTitleVacancy") : t("lk.card.linkTitleResume")}
        <ArrowRight size={17} className="ml-2" />
      </Button>
    </CardHeader>
  );
};
