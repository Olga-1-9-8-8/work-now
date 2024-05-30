import { LkDetailsDeleteAccountCard } from "./cards/LkDetailsDeleteAccountCard";
import { LkDetailsPersonalDataCard } from "./cards/LkDetailsPersonalDataCard";

export const LkDetails = () => {
  return (
    <div className="flex flex-col gap-16 py-10">
      <LkDetailsPersonalDataCard />
      <LkDetailsDeleteAccountCard />
    </div>
  );
};
