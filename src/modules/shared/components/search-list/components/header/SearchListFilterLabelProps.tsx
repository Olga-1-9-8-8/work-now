import { Fragment } from "react";
import { SearchListTitleFilterLabel } from "./SearchListTitleFilterLabel ";

interface SearchListFilterLabelProps {
  title: string;
  index: number;
}

export const SearchListFilterLabel = ({ title, index }: SearchListFilterLabelProps) => {
  const titleItems = title
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (titleItems.length === 0) return null;

  return (
    <Fragment key={index}>
      {index > 0 && ","}
      <SearchListTitleFilterLabel titleItems={titleItems} />
    </Fragment>
  );
};
