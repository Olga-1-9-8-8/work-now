import { SearchCard } from "../../../../shared/components/search-card";
import { ResumesListItem as ResumesListItemType } from "../../types/ResumesListType";

interface ResumesListItemProps {
  resume: ResumesListItemType;
}

export const ResumesListItem = ({ resume }: ResumesListItemProps) => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const mutate = () => {
    console.log("Написать функцию отклика ");
  };

  return <SearchCard data={resume} onClick={mutate} />;
};
