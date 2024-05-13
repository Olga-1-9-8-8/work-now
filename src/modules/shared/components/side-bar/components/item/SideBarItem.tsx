import { FaCircleXmark } from "react-icons/fa6";
import { SearchItems } from "../../../../configs/usersSearchConfig";
import { useUrl } from "../../../../hooks";
import { Button } from "../../../../ui/buttons/Button";
import { CardContent } from "../../../../ui/card/Card";
import { CheckboxWithLabel } from "../../../../ui/checkbox/CheckboxWithLabel";
import { ItemsExpander } from "../../../../ui/expander/ItemsExpander";

interface SideBarItemProps {
  items: SearchItems[];
  title: string;
}

export const SideBarItem = ({ items, title }: SideBarItemProps) => {
  const { setParam, getParam } = useUrl();

  const paramArr = getParam(title)?.split(",") || [];

  const setParams = (key: string, value: string) => {
    setParam(key, value, { replace: true });
    setParam("offset", "1");
  };

  const handleCheckedChange = (value: string, checked: boolean) => {
    const updatedValue = checked ? [...paramArr, value] : paramArr.filter((i) => i !== value);
    setParams(title, updatedValue.join(","));
  };

  const handleDeleteSideBarFilters = () => {
    const updatedValue = paramArr.filter((i) => !items.map((item) => item.title).includes(i));
    setParams(title, updatedValue.join(","));
  };

  const isAtLeastOneChecked = items.some((item) =>
    getParam(title)?.split(",").includes(item.title),
  );

  return (
    <CardContent className="flex flex-col p-0">
      <div className="relative">
        {isAtLeastOneChecked && (
          <Button
            onClick={handleDeleteSideBarFilters}
            variant="link"
            size="sm"
            className="absolute right-0 top-0 text-xs"
          >
            Очистить <FaCircleXmark size={15} className="ml-1" />
          </Button>
        )}
        <ItemsExpander
          items={items}
          render={(item) => {
            return (
              <CheckboxWithLabel
                checked={getParam(title)?.split(",").includes(item.title) || false}
                key={item.value}
                label={item.title}
                onCheckedChange={(checked: boolean) => handleCheckedChange(item.title, checked)}
              />
            );
          }}
        />
      </div>
    </CardContent>
  );
};
