import { Link } from "react-router-dom";
import { UserSearchItem } from "../../../../configs/usersSearchConfig";
import { CardContent } from "../../../../ui/card/Card";
import { Checkbox } from "../../../../ui/checkbox/Checkbox";
import { ItemsExpander } from "../../../../ui/expander/ItemsExpander";
import { cn } from "../../../../utils/cn";

interface SideBarItemProps {
  items: UserSearchItem[];
  pathname?: string;
}

export const SideBarItem = ({ items, pathname }: SideBarItemProps) => {
  return (
    <CardContent className="flex flex-col p-0">
      <ItemsExpander
        items={items}
        render={(item, index) => (
          <div className="flex items-center gap-3" key={index}>
            <Checkbox />
            <Link
              to="/#"
              className={cn("flex w-full items-center rounded-md py-2 hover:underline", {
                "bg-muted": pathname === item.href,
              })}
            >
              {item.title}
            </Link>
          </div>
        )}
      />
    </CardContent>
  );
};
