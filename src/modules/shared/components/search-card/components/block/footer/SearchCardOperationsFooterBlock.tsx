import { Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../../ui/buttons/Button";
import { CardFooter } from "../../../../../ui/card/Card";
import { CardSocialsButtons } from "../../../../card";

interface SearchCardOperationsFooterBlockProps<T extends number | string> {
  id: T;
  phone?: string;
}

export const SearchCardOperationsFooterBlock = <T extends number | string>({
  id,
  phone,
}: SearchCardOperationsFooterBlockProps<T>) => {
  const [isApplied, setIsApplied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAppliedClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsApplied((previous) => !previous);
    console.log(id);
  };

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsFavorite((previous) => !previous);
    console.log(id);
  };
  return (
    <CardFooter className="flex flex-col-reverse justify-between gap-5 lg:flex-row">
      <div className="flex w-full flex-col gap-5 sm:flex-row">
        <Button
          className="w-full lg:w-auto"
          onClick={handleAppliedClick}
          variant={isApplied ? "success" : "default"}
        >
          {isApplied ? "Вы откликнулись" : "Откликнуться"}
        </Button>
        <Button
          className={`group w-full lg:w-auto ${isFavorite && "border-2 border-destructive"}`}
          variant="secondary"
          onClick={handleFavoriteClick}
        >
          <Heart
            className={`mr-3 stroke-destructive group-hover:fill-destructive ${isFavorite && "fill-destructive"}`}
          />
          {isFavorite ? "Уже в Избранном" : "В Избранное"}
        </Button>
      </div>
      <CardSocialsButtons phone={phone} />
    </CardFooter>
  );
};
