import { useNavigate } from "react-router-dom";
import { useAddApply } from "../../../../../../lk/applications/hooks/useAddApply";
import { useDeleteApply } from "../../../../../../lk/applications/hooks/useDeleteApply.";
import { useAddFavorite } from "../../../../../../lk/favorites/hooks/useAddFavorite";
import { useDeleteFavorite } from "../../../../../../lk/favorites/hooks/useDeleteFavorite.";
import { useAuthContext } from "../../../../../services/auth";
import { UserEntity } from "../../../../../types";
import { Badge } from "../../../../../ui/badge/Badge";
import { CardFooter } from "../../../../../ui/card/Card";
import { AppliedButton, FavoriteButton } from "../../../../buttons";
import { CardSocialsButtons } from "../../../../card";

interface SearchCardOperationsFooterBlockProps {
  id: number;
  phone?: string;
}

export const SearchCardOperationsFooterBlock = ({
  id,
  phone,
}: SearchCardOperationsFooterBlockProps) => {
  const { addFavorite, isFavoriteAdding } = useAddFavorite();
  const { addApply, isApplyAdding } = useAddApply();
  const { deleteFavorite, isFavoriteDeleting } = useDeleteFavorite();
  const { deleteApply, isApplyDeleting } = useDeleteApply();

  const { role, isAuthenticated } = useAuthContext();

  const navigate = useNavigate();

  const handleAppliedClick = (isApplied: boolean) => {
    if (isApplied) {
      addApply(id);
    } else {
      deleteApply(id);
    }
  };

  const handleFavoriteClick = (isFavorite: boolean) => {
    if (isFavorite) {
      addFavorite(id);
    } else {
      deleteFavorite(id);
    }
  };

  if (role === UserEntity.Company && isAuthenticated) {
    return (
      <CardFooter className="flex flex-col-reverse justify-between gap-5 lg:flex-row">
        <div className="flex w-full flex-col gap-5 sm:flex-row">
          <AppliedButton onClick={handleAppliedClick} disabled={isApplyAdding || isApplyDeleting} />
          <FavoriteButton
            onClick={handleFavoriteClick}
            withTitle
            disabled={isFavoriteAdding || isFavoriteDeleting}
          />
        </div>
        <CardSocialsButtons phone={phone} />
      </CardFooter>
    );
  }

  return (
    <CardFooter className="justify-end">
      <Badge
        onClick={(e) => {
          e.stopPropagation();
          navigate("/login");
        }}
        variant="warning"
        shape="square"
      >
        Войдите под аккаунтом компании, чтобы посмотреть контакты и откликнутся на резюме
      </Badge>
    </CardFooter>
  );
};
