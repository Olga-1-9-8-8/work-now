import { FaSquarePhone, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { externalUrlsConfig } from "../../../../configs";
import { Badge } from "../../../../ui/badge/Badge";
import { Button } from "../../../../ui/buttons/Button";
import { formatPhoneNumber } from "../../../../utils/helpers";

interface CardSocialsButtonsProps {
  phone?: string;
}

export const CardSocialsButtons = ({ phone }: CardSocialsButtonsProps) => {
  const formattedPhone = phone ? formatPhoneNumber(phone) : undefined;

  if (!formattedPhone) return <Badge className="text-nowrap">Телефон: {phone}</Badge>;

  return (
    <div className="flex w-full justify-around gap-5 lg:w-auto">
      <Button size="icon" variant="ghost" onClick={(e) => e.stopPropagation()} asChild>
        <Link to={`tel:${formattedPhone}`}>
          <FaSquarePhone size={38} className="rounded fill-primary-extraDark" />
        </Link>
      </Button>
      <Button size="icon" variant="ghost">
        <Link
          to={`${externalUrlsConfig.links.whatsApp}/${formattedPhone}`}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
        >
          <FaWhatsapp size={38} className="fill-green-500" />
        </Link>
      </Button>
      <Button size="icon" variant="ghost">
        <Link
          to={`${externalUrlsConfig.links.telegram}/+${formattedPhone}`}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
        >
          <FaTelegram size={38} className="fill-blue-500" />
        </Link>
      </Button>
    </div>
  );
};
