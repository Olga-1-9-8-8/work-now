import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useLkDetails } from "../hooks/useLkDetails";
import { LkDetailsDeleteAccountCard } from "./cards/LkDetailsDeleteAccountCard";
import { LkDetailsPersonalDataCard } from "./cards/LkDetailsPersonalDataCard";

export const LkDetails = () => {
  const { isLoading, settings } = useLkDetails();

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col gap-16 py-10">
      <LkDetailsPersonalDataCard user={settings} />
      <LkDetailsDeleteAccountCard />
    </div>
  );
};
