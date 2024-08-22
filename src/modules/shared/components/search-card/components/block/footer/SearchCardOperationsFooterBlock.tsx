import { AppliedButton } from "../../../../../features/applies";
import { FavoriteButton } from "../../../../../features/favorites";
import { useUser } from "../../../../../services/auth";
import { UserEntity } from "../../../../../types";
import { CardFooter } from "../../../../../ui/card/Card";
import { CardSocialsButtons } from "../../../../card";

interface SearchCardOperationsFooterBlockProps {
  id: number;
  phone?: string;
  isHiring: boolean;
  isInApplies?: boolean;
  isInFavorites?: boolean;
}

export const SearchCardOperationsFooterBlock = ({
  id,
  phone,
  isInApplies,
  isHiring,
  isInFavorites,
}: SearchCardOperationsFooterBlockProps) => {
  const { role, isAuthenticated } = useUser();
  const canShow = isAuthenticated && role === (isHiring ? UserEntity.Person : UserEntity.Company);
  return (
    canShow && (
      <CardFooter className="flex flex-col-reverse justify-between gap-5 lg:flex-row">
        <div className="flex w-full flex-col gap-5 sm:flex-row">
          <AppliedButton id={id} isInApplies={isInApplies} />
          <FavoriteButton withTitle id={id} isInFavorites={isInFavorites} role={role} />
        </div>
        <CardSocialsButtons phone={phone} />
      </CardFooter>
    )
  );
};
