import { userSearchConfig } from "../../../../shared/configs";
import { HomeInfoListItems } from "./items/HomeInfoListItems";

export const HomeInfoList = () => {
  return (
    <div className="flex flex-wrap gap-20 px-2 py-10">
      {userSearchConfig.map((item) => (
        <HomeInfoListItems key={item.title} title={item.title} items={item.items} />
      ))}
    </div>
  );
};
