import { Link } from "react-router-dom";
import { UserSearchItem } from "../../../../../shared/configs/usersSearchConfig";

interface HomeInfoListItemsProps {
  title: string;
  items: UserSearchItem[];
}

export const HomeInfoListItems = ({ title, items }: HomeInfoListItemsProps) => {
  return (
    <div className="flex flex-1 flex-col items-start gap-2 px-2">
      <h4 className="text-nowrap  font-semibold text-primary-dark">{title}</h4>
      <ul className="flex flex-col items-start gap-2">
        {items.map((item, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index} className="text-nowrap font-medium opacity-65 hover:opacity-100">
              <Link to={item.href}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
