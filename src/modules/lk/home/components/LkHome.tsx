import { lkConfig } from "../../../shared/configs";
import { LkHomeCard } from "./card/LkHomeCard";

export const LkHome = () => {
  return (
    <div className="flex flex-wrap justify-evenly gap-6">
      <ul className="flex flex-wrap justify-evenly gap-6">
        {lkConfig.map((item) => {
          return <LkHomeCard key={item.title} item={item} />;
        })}
      </ul>
    </div>
  );
};
