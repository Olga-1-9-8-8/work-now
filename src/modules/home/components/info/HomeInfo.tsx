import { useNavigate } from "react-router-dom";
import { useUser } from "../../../shared/services/auth";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../shared/ui/accordion/Accordion";
import { Button } from "../../../shared/ui/buttons/Button";
import { TypographyH3 } from "../../../shared/ui/typography/TypographyH3";
import { HomeInfoList } from "./list/HomeInfoList";

export const HomeInfo = () => {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login", { state: { tab: "singUp" } });
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="flex flex-col items-center py-4">
        <TypographyH3 className="text-2xl font-semibold">
          Начни поиск и найди работу быстро
        </TypographyH3>
        <p className="pt-4 font-medium md:text-lg">
          Не знаешь какая будет твоя следующая работа? Посмотри что люди ищут на сайте сегодня
        </p>
        <AccordionContent className="w-full overflow-hidden py-4">
          <HomeInfoList />
          {!isAuthenticated && (
            <div className="flex flex-col items-center gap-3 py-4">
              <h3 className="text-xl font-semibold">Зарегистрируйся на сайте сейчас</h3>
              <Button onClick={handleClick}>Создай профиль бесплатно</Button>
            </div>
          )}
        </AccordionContent>
        <AccordionTrigger />
      </AccordionItem>
    </Accordion>
  );
};
