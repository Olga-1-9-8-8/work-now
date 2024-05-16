/* eslint-disable react/no-array-index-key */
import { Fragment } from "react";
import { searchConfig } from "../../../../shared/configs";
import { HomeSearchBarSearchersItem } from "./item/HomeSearchBarSearchersItem";

export const HomeSearchBarSearchers = () => {
  return (
    <div className="flex flex-col items-start gap-6">
      <h3 className="text-base font-semibold text-primary-dark">Популярные запросы</h3>
      <ul className="flex flex-wrap justify-center gap-2 md:justify-start">
        {Object.entries(searchConfig).map(([title, item]) => {
          return (
            <Fragment key={title}>
              {item.items.map((i, index) => (
                <HomeSearchBarSearchersItem title={i.title} key={index} />
              ))}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};
