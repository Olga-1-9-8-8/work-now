/* eslint-disable unicorn/no-useless-undefined */
import { lkNavConfig } from "../../../shared/configs";
import { useAuthContext } from "../../../shared/services/auth";
import { UserEntity } from "../../../shared/types";
import { getRightNounWordDeclension } from "../../../shared/utils/helpers";
import { useLkCountsContext } from "../../shared/context/LkCountsProvider";
import { getTotalCount } from "../../shared/utils/getTotalCount";
import { LkHomeCard } from "./card/LkHomeCard";

export const LkHome = () => {
  const totalCounts = useLkCountsContext();
  const { role } = useAuthContext();
  return (
    <div className="flex flex-wrap justify-evenly gap-6">
      <ul className="flex flex-col flex-wrap justify-evenly gap-6 pb-6 md:flex-row">
        {lkNavConfig.map((i, index) => {
          if ((i.role !== role && i.role !== UserEntity.All) || i.isMain) return null;
          const totalCount = getTotalCount(i.value, totalCounts);
          return (
            <LkHomeCard
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              item={i}
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
