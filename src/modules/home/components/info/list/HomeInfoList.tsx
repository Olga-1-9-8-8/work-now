import { searchConfig } from "../../../../shared/configs";
import { HomeInfoListItems } from "./items/HomeInfoListItems";

export const HomeInfoList = () => {
  return (
    <div className="flex flex-wrap gap-10 px-2 py-10 md:gap-20">
      {Object.entries(searchConfig).map(([title, items]) => (
        <HomeInfoListItems key={title} title={title} items={items} />
      ))}
    </div>
  );
};
