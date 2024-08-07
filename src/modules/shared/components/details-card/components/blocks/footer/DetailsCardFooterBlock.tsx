import { ReactNode } from "react";
import { useUser } from "../../../../../services/auth";
import { UserEntity } from "../../../../../types";
import { Badge } from "../../../../../ui/badge/Badge";
import { CardFooter } from "../../../../../ui/card/Card";
import { TypographyH4 } from "../../../../../ui/typography/TypographyH4";
import { CardSocialsButtons } from "../../../../card";

interface DetailsCardFooterSocialsProps {
  phone?: string;
  isHiring?: boolean;
}

const DetailsCardFooterSocials = ({ phone, isHiring }: DetailsCardFooterSocialsProps) => {
  const { isAuthenticated, role } = useUser();

  const canShow = isAuthenticated && role === (isHiring ? UserEntity.Person : UserEntity.Company);

  return (
    <>
      <TypographyH4 className="py-3">Способы связи:</TypographyH4>
      {canShow ? (
        <CardSocialsButtons phone={phone} />
      ) : (
        <Badge className="hover:bg-warning" variant="warning" shape="square">
          Войдите под аккаунтом {isHiring ? "кандидата " : "компании"}, чтобы посмотреть контакты и
          откликнутся на {isHiring ? "вакансию" : "резюме"}
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
