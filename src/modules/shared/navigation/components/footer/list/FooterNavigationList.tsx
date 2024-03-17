import { siteConfig } from "../../../../configs";
import { FooterNavigationListItem } from "./item/FooterNavigationListItem";

export const FooterNavigationList = () => {
  return (
    <ul className="hidden flex-col text-sm leading-loose text-white lg:flex lg:flex-row xl:gap-2">
      <FooterNavigationListItem href={siteConfig.links.twitter} title="Built by">
        Olga Koroleva &trade; &#46;
      </FooterNavigationListItem>
      <FooterNavigationListItem href={siteConfig.links.vercel} title="Hosted on">
        Vercel &#46;
      </FooterNavigationListItem>
      <FooterNavigationListItem
        href={siteConfig.links.github}
        title="The source code is available on"
      >
        GitHub&#46;
      </FooterNavigationListItem>
    </ul>
  );
};
