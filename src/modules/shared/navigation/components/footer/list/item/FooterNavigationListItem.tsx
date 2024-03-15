import { ReactNode } from "react";

interface FooterNavigationListItemProps {
  title: string;
  href: string;
  children: ReactNode;
}

export const FooterNavigationListItem = ({
  title,
  href,
  children,
}: FooterNavigationListItemProps) => {
  return (
    <li>
      <span className="text-nowrap p-2">{title}</span>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-nowrap font-medium underline underline-offset-4"
      >
        {children}
      </a>
    </li>
  );
};
