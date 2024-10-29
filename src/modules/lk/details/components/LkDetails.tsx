import { useProfile } from "../../../shared/services/auth";
import { TypographyH5 } from "../../../shared/ui/typography/TypographyH5";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { LkDetailsDeleteAccountCard } from "./cards/LkDetailsDeleteAccountCard";
import { LkDetailsProfileDataCard } from "./cards/LkDetailsProfileDataCard";
import { LkDetailsUpdatePasswordCard } from "./cards/LkDetailsUpdatePasswordCard";

export const LkDetails = () => {
  const { profile, isProfileLoading } = useProfile();
  const { t } = useLanguageSwitcher("lk");
  return (
    <div className="flex flex-col gap-16 py-10">
      {!profile && !isProfileLoading ? (
        <TypographyH5 className="text-center">{t("lk.details.notFound")}</TypographyH5>
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
