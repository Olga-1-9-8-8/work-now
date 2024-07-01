import { useUser } from "../../../shared/services/auth";
import { LkDetailsProvider } from "../context";
import { LkDetailsDeleteAccountCard } from "./cards/LkDetailsDeleteAccountCard";
import { LkDetailsProfileDataCard } from "./cards/LkDetailsProfileDataCard";
import { LkDetailsUpdatePasswordCard } from "./cards/LkDetailsUpdatePasswordCard";

export const LkDetails = () => {
  const { user } = useUser();
  return (
    <div className="flex flex-col gap-16 py-10">
      <LkDetailsProvider id={user?.id}>
        <LkDetailsProfileDataCard />
        <LkDetailsUpdatePasswordCard />
        <LkDetailsDeleteAccountCard />
      </LkDetailsProvider>
    </div>
  );
};
