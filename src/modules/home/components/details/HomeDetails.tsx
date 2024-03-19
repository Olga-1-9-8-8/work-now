import { homeDetailsConfig } from "../../../shared/configs";
import { HomeDetailsCard } from "./card/HomeDetailsCard";
import { HomeDetailsCardItem } from "./card/item/HomeDetailsCardItem";

export const HomeDetails = () => {
  return (
    <section className="flex flex-wrap justify-center gap-6 pb-8">
      {homeDetailsConfig.map((item) => (
        <HomeDetailsCard key={item.title} title={item.title} description={item.description}>
          {item.items.map((i) => (
            <HomeDetailsCardItem key={i.index} title={i.title} />
          ))}
        </HomeDetailsCard>
      ))}
    </section>
  );
};
