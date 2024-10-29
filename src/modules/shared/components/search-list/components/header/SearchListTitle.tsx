/* eslint-disable react/no-array-index-key */
import { ReactNode } from "react";
import { useUrl } from "../../../../hooks";
import { SearchListFilterLabel } from "./SearchListFilterLabelProps";

interface SearchListTitleProps {
  title: ReactNode;
}

export const SearchListTitle = ({ title }: SearchListTitleProps) => {
  const { getParam } = useUrl();
  const paramKeys = ["position", "cities"];
  const params = paramKeys.map((paramKey) => getParam(paramKey)).filter(Boolean);

  return (
    <h2 className="flex w-full flex-col flex-wrap gap-2 overflow-hidden text-nowrap text-xl font-semibold md:flex-row">
      {title}
      <div className="flex flex-row flex-wrap gap-1 text-lg text-primary-extraDark lg:text-xl">
        {params.length > 0 &&
          params.map((param, index) => (
            <SearchListFilterLabel key={index} title={param ?? ""} index={index} />
          ))}
      </div>
    </h2>
  );
};
