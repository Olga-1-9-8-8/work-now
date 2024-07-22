import { LkDetailsDeleteAccountCard } from "./cards/LkDetailsDeleteAccountCard";
import { LkDetailsProfileDataCard } from "./cards/LkDetailsProfileDataCard";
import { LkDetailsUpdatePasswordCard } from "./cards/LkDetailsUpdatePasswordCard";

export const LkDetails = () => {
  return (
    <div className="flex flex-col gap-16 py-10">
      <LkDetailsProfileDataCard />
      <LkDetailsUpdatePasswordCard />
      <LkDetailsDeleteAccountCard />
    </div>
  );
};
