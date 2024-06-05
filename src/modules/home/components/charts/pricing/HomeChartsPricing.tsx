import { useNavigate } from "react-router-dom";
import { homeInfoPricingConfig } from "../../../../shared/configs";
import { Button } from "../../../../shared/ui/buttons/Button";
import { formatCurrency } from "../../../../shared/utils/helpers";
import { HomeChartsPricingItem } from "./item/HomeChartsPricingItem";

const PRICE_PER_MONTH = 700;

interface HomeChartsPricingProps {
  isAuthorized: boolean;
}

export const HomeChartsPricing = ({ isAuthorized }: HomeChartsPricingProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login", { state: { tab: "singUp" } });
  };

  return (
    <section className="container flex flex-col  gap-6  py-12 md:max-w-[64rem]">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Понятная и низкая цена
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Платить нужно только работодателям для поиска сотрудника.
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">Что включено в цену</h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {homeInfoPricingConfig.map((item) => (
              <HomeChartsPricingItem title={item} key={item} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">{formatCurrency(PRICE_PER_MONTH)}</h4>
            <p className="text-sm font-medium text-muted-foreground">Ежемесячная плата</p>
          </div>
          {!isAuthorized && (
            <Button onClick={handleClick} size="lg">
              Зарегистрируйся
            </Button>
          )}
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          <strong>Первые два месяца использование приложения бесплатно для новой компании.</strong>
        </p>
      </div>
    </section>
  );
};
