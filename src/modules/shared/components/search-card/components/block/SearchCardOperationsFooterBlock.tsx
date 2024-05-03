import { Heart } from "lucide-react";
import { useState } from "react";
import { FaSquarePhone, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { externalUrlsConfig } from "../../../../configs";
import { Button } from "../../../../ui/buttons/Button";
import { CardFooter } from "../../../../ui/card/Card";
import { formatPhoneNumber } from "../../../../utils/helpers";

interface SearchCardOperationsFooterBlockProps {
  id: number;
  phone?: string;
  onClick: (id: number) => void;
}

export const SearchCardOperationsFooterBlock = ({
  id,
  phone,
  onClick,
}: SearchCardOperationsFooterBlockProps) => {
  const [isApply, setIsApply] = useState(false);
  const [isFavorites, setIsFavorites] = useState(false);

  const formattedPhone = phone ? formatPhoneNumber(phone) : undefined;
  return (
    <CardFooter className="flex flex-col-reverse justify-between gap-5 md:flex-row">
      <div className="flex w-full flex-col gap-5 sm:flex-row">
        <Button
          className="w-full md:w-auto"
          onClick={(e) => {
            e.stopPropagation();
            setIsApply((previous) => !previous);
            onClick(id);
          }}
          variant={isApply ? "success" : "default"}
        >
          {isApply ? "Вы откликнулись" : "Откликнуться"}
        </Button>
        <Button
          className={`group w-full md:w-auto ${isFavorites && "border-2 border-destructive"}`}
          variant={isFavorites ? "secondary" : "secondary"}
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorites((previous) => !previous);
          }}
        >
          <Heart
            className={`mr-3 stroke-destructive group-hover:fill-destructive ${isFavorites && "fill-destructive"}`}
          />
          {isFavorites ? "Уже в Избранном" : "В Избранное"}
        </Button>
      </div>
      {formattedPhone && (
        <div className="flex w-full justify-around gap-5 md:w-auto">
          <Button size="icon" variant="ghost" asChild>
            <Link to={`tel:${formattedPhone}`}>
              <FaSquarePhone size={38} className="rounded fill-primary-extraDark" />
            </Link>
          </Button>
          <Button size="icon" variant="ghost">
            <Link to={`${externalUrlsConfig.links.whatsApp}/${formattedPhone}`} target="_blank">
              <FaWhatsapp size={38} className="fill-green-500" />
            </Link>
          </Button>
          <Button size="icon" variant="ghost">
            <Link to={`${externalUrlsConfig.links.telegram}/+${formattedPhone}`} target="_blank">
              <FaTelegram size={38} className="fill-blue-500" />
            </Link>
          </Button>
        </div>
      )}
    </CardFooter>
  );
};
