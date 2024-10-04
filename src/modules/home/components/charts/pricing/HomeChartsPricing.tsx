import { useNavigate } from "react-router-dom";
import { currencyConfigs, homeInfoPricingConfig } from "../../../../shared/configs";
import { LanguageType } from "../../../../shared/configs/internationalization/InternationalizationConfig";
import { useUser } from "../../../../shared/services/auth";
import { Button } from "../../../../shared/ui/buttons/Button";
import { formatCurrency } from "../../../../shared/utils/helpers";
import { useLanguageSwitcher } from "../../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { HomeChartsPricingItem } from "./item/HomeChartsPricingItem";

export const HomeChartsPricing = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  const { t, language } = useLanguageSwitcher("home");

  const handleClick = () => {
    navigate("/login", { state: { tab: "singUp" } });
  };

  return (
    <section className="container flex flex-col  gap-6  py-12 md:max-w-[64rem]">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          {t("home.charts.pricing.heading")}
        </h2>
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {t(`home.charts.pricing.description`)}
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">{t("home.charts.pricing.label")}</h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {homeInfoPricingConfig[language as LanguageType].map((item) => (
              <HomeChartsPricingItem title={item} key={item} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">
              {formatCurrency(
                import.meta.env.VITE_PRICE_PER_MONTH,
                language,
                currencyConfigs[language as LanguageType].currency,
              )}
            </h4>
            <p className="text-sm font-medium text-muted-foreground">
              {t("home.charts.pricing.price")}
            </p>
          </div>
          {!isAuthenticated && (
            <Button onClick={handleClick} size="lg">
              {t("home.charts.pricing.btnTitle")}
            </Button>
          )}
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="leading-normal text-muted-foreground sm:leading-7 lg:max-w-[85%]">
          <strong>{t("home.charts.pricing.explanation")}</strong>
        </p>
      </div>
    </section>
  );
};
