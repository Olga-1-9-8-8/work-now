import { LkDetailsDeleteAccountCard } from "./cards/LkDetailsDeleteAccountCard";
import { LkDetailsProfileDataCard } from "./cards/LkDetailsProfileDataCard";

export const LkDetails = () => {
  return (
    <div className="flex flex-col gap-16 py-10">
      <LkDetailsProfileDataCard />
      <LkDetailsDeleteAccountCard />
    </div>
  );
};
