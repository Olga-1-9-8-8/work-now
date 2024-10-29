import { useNavigate } from "react-router-dom";
import { useUser } from "../../../shared/services/auth";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../shared/ui/accordion/Accordion";
import { Button } from "../../../shared/ui/buttons/Button";
import { TypographyH1 } from "../../../shared/ui/typography/TypographyH1";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { HomeInfoList } from "./list/HomeInfoList";

export const HomeInfo = () => {
  const { isAuthenticated } = useUser();
  const { t } = useLanguageSwitcher("home");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login", { state: { tab: "singUp" } });
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="flex flex-col items-center py-4">
        <TypographyH1 className="text-2xl font-semibold">{t("home.info.title")}</TypographyH1>
        <p className="text-pretty pt-4 font-medium md:text-lg">{t("home.info.description")}</p>
        <AccordionContent className="w-full overflow-hidden py-4">
          <HomeInfoList />
          {!isAuthenticated && (
            <div className="flex flex-col items-center gap-3 py-4">
              <h3 className="text-xl font-semibold"> {t("home.info.needAccount")}</h3>
              <Button onClick={handleClick}>{t("home.info.needAccountBtn")}</Button>
            </div>
          )}
        </AccordionContent>
        <AccordionTrigger iconClassName="stroke-success w-8 h-8" />
      </AccordionItem>
    </Accordion>
  );
};
