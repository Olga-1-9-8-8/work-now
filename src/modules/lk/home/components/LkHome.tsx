/* eslint-disable unicorn/no-useless-undefined */
import { lkNavConfig } from "../../../shared/configs";
import { NavTypes } from "../../../shared/configs/lkNavConfig";
import { useLkContext } from "../../shared/context";
import { LkHomeCard } from "./card/LkHomeCard";

export const LkHome = () => {
  const {
    resumes: { totalCount: totalResumesCount },
  } = useLkContext();

  // TODO: Объединить
  const getDescriptionTitle = (value: NavTypes) => {
    switch (value) {
      case "applies": {
        return undefined;
      }
      case "resumes": {
        return `У Вас ${totalResumesCount} резюме`;
      }
      default: {
        return undefined;
      }
    }
  };

  return (
    <div className="flex flex-wrap justify-evenly gap-6">
      <ul className="flex flex-col flex-wrap justify-evenly gap-6 pb-6 md:flex-row">
        {lkNavConfig.map((item) => {
          if (item.isMain) return null;
          return (
            <LkHomeCard
              key={item.title}
              item={item}
              description={getDescriptionTitle(item.value)}
            />
          );
        })}
      </ul>
    </div>
  );
};
