import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { LkDetails } from "../components/LkDetails";

const LkDetailsPage = () => {
  const { t } = useLanguageSwitcher("seo");
  return (
    <>
      <SeoMetadata
        title={t("seo.lkDetailsPage.title")}
        description={t("seo.lkDetailsPage.description")}
      />
      <LkDetails />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default LkDetailsPage;
