import { ArrowRight, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../../../resume/details/hooks/useResume";
import { Avatar } from "../../../../shared/components/avatar";
import { AppliedButton, FavoriteButton } from "../../../../shared/components/buttons";
import { CardSocialsButtons } from "../../../../shared/components/card";
import { UserEntity } from "../../../../shared/types";
import { Badge } from "../../../../shared/ui/badge/Badge";
import { Button } from "../../../../shared/ui/buttons/Button";
import { Card, CardDescription, CardFooter, CardHeader } from "../../../../shared/ui/card/Card";
import { Spinner } from "../../../../shared/ui/spinner/Spinner";
import { TypographyH4 } from "../../../../shared/ui/typography/TypographyH4";
import { getSalaryTitle } from "../../../../shared/utils";
import { FavoriteType } from "../../../shared/types/FavoriteType";
import { useDeleteFavorite } from "../../hooks/useDeleteFavorite.";

interface LkFavoritesItemProps {
  item: FavoriteType;
}

export const LkFavoritesItem = ({ item }: LkFavoritesItemProps) => {
  // Здесь как резюме так и вакансии должны быть отрисованы

  const { id, resumeId } = item;
  const { resume, isLoading } = useResume(resumeId);
  const { deleteFavorite, isFavoriteDeleting } = useDeleteFavorite();

  const onDeleteFavorite = () => {
    deleteFavorite(id);
  };
  const onApplyClick = () => {
    deleteFavorite(id);
  };

  const navigate = useNavigate();
  if (isLoading) return <Spinner />;
  if (!resume) return 121;
  return (
    <Card variant="clickable" className="relative" onClick={() => navigate(`/resumes/${resumeId}`)}>
      <CardHeader className="flex-row justify-between ">
        <div className="flex items-center gap-4">
          <Avatar
            src={resume.avatar}
            userName={resume?.userName}
            icon={resume.role === UserEntity.Company ? Building2 : undefined}
            className="h-16 w-16"
          />
          <div>
            <TypographyH4>
              {resume.position}{" "}
              <strong className="text-primary-extraDark">{resume.userName} </strong>
            </TypographyH4>
            <CardDescription className="text-md font-semibold">
              {resume.city}
              <Badge className="ml-4" variant="success">
                {getSalaryTitle(resume.salary)}
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
          <FavoriteButton onClick={onDeleteFavorite} disabled={isFavoriteDeleting} isInFavorite />
          <AppliedButton onClick={onApplyClick} disabled={isFavoriteDeleting} />
        </div>
        <CardSocialsButtons phone={resume.phone} />
      </CardFooter>
    </Card>
  );
};
