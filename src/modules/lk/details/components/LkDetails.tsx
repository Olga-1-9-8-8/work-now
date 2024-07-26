import { useProfile } from "../../../shared/services/auth";
import { TypographyH5 } from "../../../shared/ui/typography/TypographyH5";
import { LkDetailsDeleteAccountCard } from "./cards/LkDetailsDeleteAccountCard";
import { LkDetailsProfileDataCard } from "./cards/LkDetailsProfileDataCard";
import { LkDetailsUpdatePasswordCard } from "./cards/LkDetailsUpdatePasswordCard";

export const LkDetails = () => {
  const { profile, isProfileLoading } = useProfile();
  return (
    <div className="flex flex-col gap-16 py-10">
      {!profile && !isProfileLoading ? (
        <TypographyH5 className="text-center">
          Попробуйте войти в свой аккаунт еще раз или обратитесь в техническую поддержку.
        </TypographyH5>
      ) : (
        <>
          <LkDetailsProfileDataCard profile={profile} isLoading={isProfileLoading} />
          <LkDetailsUpdatePasswordCard isLoading={isProfileLoading} />
          <LkDetailsDeleteAccountCard isLoading={isProfileLoading} />
        </>
      )}
    </div>
  );
};
