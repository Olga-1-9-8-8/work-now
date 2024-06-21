/* eslint-disable unicorn/no-useless-undefined */
import { lkNavConfig } from "../../../shared/configs";
import { getRightNounWordDeclension } from "../../../shared/utils/helpers";
import { useProfileTotalCounts } from "../../shared/hooks/useProfileTotalCounts";
import { LkHomeCard } from "./card/LkHomeCard";

export const LkHome = () => {
  const { getTotalCount } = useProfileTotalCounts();

  return (
    <div className="flex flex-wrap justify-evenly gap-6">
      <ul className="flex flex-col flex-wrap justify-evenly gap-6 pb-6 md:flex-row">
        {lkNavConfig.map((item) => {
          if (item.isMain) return null;

          const totalCount = getTotalCount(item.value);
          return (
            <LkHomeCard
              key={item.title}
              item={item}
              description={
                totalCount
                  ? getRightNounWordDeclension(totalCount, "элемент", ["", "а", "ов"])
                  : "Пока нет ни одного элемента"
              }
            />
          );
        })}
      </ul>
    </div>
  );
};
