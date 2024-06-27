import { useNavigate } from "react-router-dom";
import { AppliedButton } from "../../../../../features/applies";
import { FavoriteButton } from "../../../../../features/favorites";
import { useAuthContext } from "../../../../../services/auth";
import { UserEntity } from "../../../../../types";
import { Badge } from "../../../../../ui/badge/Badge";
import { CardFooter } from "../../../../../ui/card/Card";
import { CardSocialsButtons } from "../../../../card";

interface SearchCardOperationsFooterBlockProps {
  id: number | string;
  phone?: string;
  isInApplies?: boolean;
  isInFavorites?: boolean;
}

export const SearchCardOperationsFooterBlock = ({
  id,
  phone,
  isInApplies,
  isInFavorites,
}: SearchCardOperationsFooterBlockProps) => {
  const { role, isAuthenticated } = useAuthContext();

  const navigate = useNavigate();

  if (role === UserEntity.Company && isAuthenticated) {
    return (
      <CardFooter className="flex flex-col-reverse justify-between gap-5 lg:flex-row">
        <div className="flex w-full flex-col gap-5 sm:flex-row">
          <AppliedButton id={id} isInApplies={isInApplies} />
          <FavoriteButton withTitle id={id} isInFavorites={isInFavorites} />
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
