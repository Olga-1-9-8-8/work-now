import { ReactNode } from "react";

import { useUser } from "../../../../../services/auth";
import { UserEntity } from "../../../../../types";
import { Badge } from "../../../../../ui/badge/Badge";
import { CardFooter } from "../../../../../ui/card/Card";
import { TypographyH4 } from "../../../../../ui/typography/TypographyH4";
import { useLanguageSwitcher } from "../../../../../widgets/languages-switcher";
import { CardSocialsButtons } from "../../../../card";

interface DetailsCardFooterSocialsProps {
  phone?: string;
  isHiring?: boolean;
}

const DetailsCardFooterSocials = ({ phone, isHiring }: DetailsCardFooterSocialsProps) => {
  const { isAuthenticated, role } = useUser();
  const { t } = useLanguageSwitcher("shared");

  const canShow = isAuthenticated && role === (isHiring ? UserEntity.Person : UserEntity.Company);

  return (
    <>
      <TypographyH4 className="py-3">{t("shared.details.card.footer.title")}</TypographyH4>
      {canShow ? (
        <CardSocialsButtons phone={phone} />
      ) : (
        <Badge className="hover:bg-warning" variant="warning" shape="square">
          {isHiring
            ? t("shared.details.card.footer.badge.person")
            : t("shared.details.card.footer.badge.company")}
        </Badge>
      )}
    </>
  );
};

interface DetailsCardFooterBlockProps {
  children: ReactNode;
}

export const DetailsCardFooterBlock = ({ children }: DetailsCardFooterBlockProps) => {
  return <CardFooter className="flex flex-col items-start gap-4">{children}</CardFooter>;
};

DetailsCardFooterBlock.DetailsCardFooterSocials = DetailsCardFooterSocials;
