import { User } from "../../../shared/components/user/types/User";
import { LkDetailsDeleteAccountCard } from "./cards/LkDetailsDeleteAccountCard";
import { LkDetailsPersonalDataCard } from "./cards/LkDetailsPersonalDataCard";

export const LkDetails = () => {
  // TODO : временно, получать из стора
  const user: User = {
    image: "https://github.com/shadcn.png",
    name: "Ольга",
    gender: "Женский",
    phone: "7(202) 456-78-45",
  };

  return (
    <div className="flex flex-col gap-16 py-10">
      <LkDetailsPersonalDataCard user={user} />
      <LkDetailsDeleteAccountCard />
    </div>
  );
};
