import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import animationGirl from "../../../../../public/assets/animation/AnimationGirl.json";
import { LanguageType, homeDetailsConfig } from "../../../shared/configs";
import { useResponsiveContext } from "../../../shared/responsive";
import { TypographyH3 } from "../../../shared/ui/typography/TypographyH3";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { HomeDetailsCard } from "./card/HomeDetailsCard";
import { HomeDetailsCardItem } from "./card/item/HomeDetailsCardItem";

export const HomeDetails = () => {
  const girlRef = useRef<LottieRefCurrentProps>(null);
  const { t, language } = useLanguageSwitcher("home");
  const isMobile = useResponsiveContext();

  return (
    <section className="flex flex-col items-center gap-6 pb-8">
      <TypographyH3 className="text-secondary">{t("home.details.title")}</TypographyH3>

      <p className="font-medium text-secondary md:text-lg">{t("home.details.description")}</p>
      {!isMobile && (
        <div className="flex w-full items-center justify-between">
          <Lottie className="h-48 w-48 flex-1 " lottieRef={girlRef} animationData={animationGirl} />
          <ChevronDown size={34} className="flex-1 animate-bounce stroke-success" />
          <div className="flex-1" />
        </div>
      )}

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
