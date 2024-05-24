import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AppliedButton, FavoriteButton } from "../../../../shared/components/buttons";
import { CardSocialsButtons } from "../../../../shared/components/card";
import { Button } from "../../../../shared/ui/buttons/Button";
import { Card, CardDescription, CardFooter, CardHeader } from "../../../../shared/ui/card/Card";
import { TypographyH4 } from "../../../../shared/ui/typography/TypographyH4";
import { useDeleteFavorite } from "../../hooks/useDeleteFavorite.";

interface LkFavoritesItemProps {
  item: any;
}

export const LkFavoritesItem = ({ item }: LkFavoritesItemProps) => {
  const {
    id,
    resumeId,
    resumes: { position, city },
  } = item;
  const {
    users: { phone, fullName },
  } = item;

  const { deleteFavorite, isFavoriteDeleting } = useDeleteFavorite();

  const onFavoriteClick = (isFavorite: boolean) => {
    if (!isFavorite) {
      deleteFavorite(id);
    }
  };
  const onApplyClick = (isApplied: boolean) => {
    console.log(id, isApplied);
  };

  const navigate = useNavigate();

  return (
    <Card variant="clickable" className="relative" onClick={() => navigate(`/resumes/${resumeId}`)}>
      <CardHeader className="flex-row justify-between ">
        <div>
          <TypographyH4>
            {position} <strong className="text-primary-extraDark">{fullName} </strong>
          </TypographyH4>
          <CardDescription className="text-md font-semibold">{city}</CardDescription>
        </div>
        <Button variant="link" className="py-0">
          Перейти к резюме
          <ArrowRight size={17} className="ml-2" />
        </Button>
      </CardHeader>

      <CardFooter className="flex-col justify-between gap-4 pt-4 lg:flex-row">
        <div className="flex w-full flex-row gap-4">
          <FavoriteButton onClick={onFavoriteClick} disabled={isFavoriteDeleting} isInFavorite />
          <AppliedButton onClick={onApplyClick} />
        </div>
        {phone && <CardSocialsButtons phone={phone} />}
      </CardFooter>
    </Card>
  );
};
