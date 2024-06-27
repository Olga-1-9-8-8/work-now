import { ArrowRight, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../../../../shared/components/avatar";
import { CardSocialsButtons } from "../../../../shared/components/card";
import { AppliedButton } from "../../../../shared/features/applies";
import { FavoriteButton } from "../../../../shared/features/favorites";
import { ProfileType } from "../../../../shared/services/auth";
import { UniversalCardItemType, UserEntity } from "../../../../shared/types";
import { Badge } from "../../../../shared/ui/badge/Badge";
import { Button } from "../../../../shared/ui/buttons/Button";
import { Card, CardDescription, CardFooter, CardHeader } from "../../../../shared/ui/card/Card";
import { TypographyH4 } from "../../../../shared/ui/typography/TypographyH4";
import { getSalaryTitle } from "../../../../shared/utils";

interface LkFavoritesItemProps {
  data: UniversalCardItemType & ProfileType;
}

export const LkFavoritesItem = ({ data }: LkFavoritesItemProps) => {
  const navigate = useNavigate();

  const isCompany = data.role === UserEntity.Company;

  return (
    <Card
      variant="clickable"
      className="relative"
      onClick={() => navigate(`/${isCompany ? "vacancies" : "resumes"}/${data.id}`)}
    >
      <CardHeader className="flex-row justify-between ">
        <div className="flex items-center gap-4">
          <Avatar
            src={data.avatar}
            userName={data.userName}
            icon={isCompany ? Building2 : undefined}
            className="h-16 w-16"
          />
          <div>
            <TypographyH4>
              {data.position} <strong className="text-primary-extraDark">{data.userName} </strong>
            </TypographyH4>
            <CardDescription className="text-md font-semibold">
              {data.city}
              <Badge className="ml-4" variant="success">
                {getSalaryTitle(data.salary)}
              </Badge>
            </CardDescription>
          </div>
        </div>
        <Button variant="link" className="py-0">
          Перейти к резюме
          <ArrowRight size={17} className="ml-2" />
        </Button>
      </CardHeader>

      <CardFooter className="flex-col justify-between gap-4 pt-4 lg:flex-row">
        <div className="flex w-full flex-row gap-4">
          <FavoriteButton id={data.id} isInFavorites={data.isInFavorites} />
          <AppliedButton id={data.id} isInApplies={data.isInApplies} />
        </div>
        <CardSocialsButtons phone={data.phone} />
      </CardFooter>
    </Card>
  );
};
