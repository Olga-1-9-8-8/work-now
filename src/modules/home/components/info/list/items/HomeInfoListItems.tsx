import { useNavigate } from "react-router-dom";
import { UniversalItemType, UniversalItemsWithTitleType } from "../../../../../shared/types";
import { Button } from "../../../../../shared/ui/buttons/Button";

interface HomeInfoListItemsProps {
  title: string;
  items: UniversalItemsWithTitleType;
}

export const HomeInfoListItems = ({ title, items }: HomeInfoListItemsProps) => {
  const navigate = useNavigate();

  const handleClick = (item: UniversalItemType) => {
    navigate(`/vacancies?${title}=${item.title}`);
  };

  return (
    <div className="flex flex-1 flex-col items-start gap-1 px-2 pl-8">
      <h4 className="text-nowrap font-semibold text-primary-dark">{`Вакансии ${items.title}`}</h4>
      <ul className="flex flex-col items-start gap-2">
        {items.items.map((item, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index} className="text-nowrap font-medium opacity-65 hover:opacity-100">
              <Button
                variant="link"
                className="p-0 text-base font-bold text-primary-dark"
                onClick={() => handleClick(item)}
              >
                {item.title}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
