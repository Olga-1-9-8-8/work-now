import { LanguageType, homeDetailsConfig } from "../../../shared/configs";
import { TypographyH3 } from "../../../shared/ui/typography/TypographyH3";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { HomeDetailsCard } from "./card/HomeDetailsCard";
import { HomeDetailsCardItem } from "./card/item/HomeDetailsCardItem";

export const HomeDetails = () => {
  const { t, language } = useLanguageSwitcher("home");

  return (
    <section className="flex flex-col items-center gap-6 pb-8">
      <TypographyH3 className="text-secondary">{t("home.details.title")}</TypographyH3>

      <p className="font-medium text-secondary md:text-lg">{t("home.details.description")}</p>

      <div className="flex flex-wrap justify-center gap-6">
        {homeDetailsConfig[language as LanguageType].map((item) => (
          <HomeDetailsCard key={item.title} title={item.title} description={item.description}>
            {item.items.map((i) => (
              <HomeDetailsCardItem key={i.index} title={i.title} />
            ))}
          </HomeDetailsCard>
        ))}
      </div>
    </section>
  );
};
