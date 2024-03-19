/* eslint-disable react/no-array-index-key */
import { userSearchConfig } from "../../../../shared/configs";
import { HomeSearchBarSearchersItem } from "./item/HomeSearchBarSearchersItem";

export const HomeSearchBarSearchers = () => {
  return (
    <div className="flex flex-col items-start gap-6">
      <h3 className="text-base font-semibold text-primary-dark">Популярные запросы</h3>
      <ul className="flex flex-wrap justify-center gap-2 md:justify-start">
        {[
          ...userSearchConfig.positions,
          ...userSearchConfig.popular,
          ...userSearchConfig.regions,
        ].map((item, index) => (
          <HomeSearchBarSearchersItem title={item.title} key={index} />
        ))}
      </ul>
    </div>
  );
};
