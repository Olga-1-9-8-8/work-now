import { lkConfig } from "../../../shared/configs";
import { LkHomeCard } from "./card/LkHomeCard";

export const LkHome = () => {
  return (
    <div className="flex flex-wrap justify-evenly gap-6">
      <ul className="flex flex-col flex-wrap justify-evenly gap-6 pb-6 md:flex-row">
        {lkConfig.map((item) => {
          return <LkHomeCard key={item.title} item={item} />;
        })}
      </ul>
    </div>
  );
};
