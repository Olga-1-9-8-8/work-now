import { externalUrlsConfig } from "../../../../configs";
import { FooterNavigationListItem } from "./item/FooterNavigationListItem";

const footerItems = [
  {
    href: externalUrlsConfig.links.linkedIn,
    title: "Built by",
    text: "Olga Koroleva",
  },
  {
    href: externalUrlsConfig.links.vercel,
    title: "Hosted on",
    text: "Vercel",
  },
  {
    title: "The source code is on GitHub.",
  },
];

export const FooterNavigationList = () => {
  return (
    <ul className="hidden flex-col text-sm leading-loose text-white lg:flex lg:flex-row xl:gap-2">
      {footerItems.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <FooterNavigationListItem key={index} href={item.href} title={item.title}>
          {item.text}&#46;
        </FooterNavigationListItem>
      ))}
    </ul>
  );
};
