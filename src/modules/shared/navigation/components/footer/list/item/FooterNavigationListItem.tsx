import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface FooterNavigationListItemProps {
  title: string;
  href?: string;
  children?: ReactNode;
}

export const FooterNavigationListItem = ({
  title,
  href,
  children,
}: FooterNavigationListItemProps) => {
  return (
    <li>
      <span className="text-nowrap p-2">{title}</span>
      {href && (
        <Link
          to={href}
          target="_blank"
          rel="noreferrer"
          className="text-nowrap font-medium underline underline-offset-4"
        >
          {children}
        </Link>
      )}
    </li>
  );
};
