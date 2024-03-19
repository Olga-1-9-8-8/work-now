import { Link } from "react-router-dom";
import { buttonVariants } from "../../../../shared/ui/buttons/Button";
import { cn } from "../../../../shared/utils/cn";
import { HomeChartsPricingItem } from "./item/HomeChartsPricingItem";

export const HomeChartsPricing = () => {
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
            {[
              "Неограниченный поиск",
              "Неограниченное количество откликов",
              "Личная доска аналитики",
              "Круглосуточная Поддержка",
              "Доступ к обширной базе соискателей",
              "Доступ к личному кабинету",
            ].map((item) => (
              <HomeChartsPricingItem title={item} key={item} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">700 &#8381;</h4>
            <p className="text-sm font-medium text-muted-foreground">Ежемесячная плата</p>
          </div>
          <Link to="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Зарегистрируйся
          </Link>
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
