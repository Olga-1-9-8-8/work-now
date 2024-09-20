/* eslint-disable react/no-array-index-key */
import { Fragment, ReactNode } from "react";
import { useUrl } from "../../../../hooks";
import { SearchListTitleFilterLabel } from "./SearchListTitleFilterLabel ";

interface SearchListTitleProps {
  title: ReactNode;
}

export const SearchListTitle = ({ title }: SearchListTitleProps) => {
  const { getParam } = useUrl();
  const paramKeys = ["position", "cities"];
  const filters = paramKeys
    .map((paramKey) => getParam(paramKey))
    .filter((filter) => filter !== null);

  return (
    <h2 className="flex flex-col flex-wrap gap-2 text-nowrap text-xl font-semibold md:flex-row">
      {title}
      <div className="flex flex-row flex-wrap gap-1 text-lg text-primary-extraDark lg:text-xl">
        {filters.length > 0 &&
          filters.map((filter, index) => (
            <Fragment key={index}>
              {index > 0 && ","}
              <SearchListTitleFilterLabel filter={filter} />
            </Fragment>
          ))}
      </div>
    </h2>
  );
};
