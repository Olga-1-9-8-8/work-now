import { userSearchConfig } from "../../../../shared/configs";
import { HomeInfoListItems } from "./items/HomeInfoListItems";

export const HomeInfoList = () => {
  const { companies, positions, regions, popular } = userSearchConfig;

  return (
    <div className="flex flex-wrap gap-20 px-2 py-10">
      <HomeInfoListItems title="Популярная работа" items={popular} />
      <HomeInfoListItems title="Вакансии по должности" items={positions} />
      <HomeInfoListItems title="Вакансии по городам" items={regions} />
      <HomeInfoListItems title="Вакансии по компаниям" items={companies} />
    </div>
  );
};
