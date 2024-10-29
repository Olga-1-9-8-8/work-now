import { SearchList } from "../../../shared/components/search-list";
import { SeoMetadata } from "../../../shared/navigation";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { ResumesList } from "../components/ResumesList";
import { useResumes } from "../hooks/useResumes";

const ResumesListPage = () => {
  const { isLoading, resumes, totalCount } = useResumes();
  const { t } = useLanguageSwitcher("seo");

  return (
    <>
      <SeoMetadata
        title={t("seo.resumesListPage.title")}
        description={t("seo.resumesListPage.description")}
      />
      <SearchList total={totalCount} isLoading={isLoading}>
        {isLoading ? <Spinner /> : <ResumesList resumes={resumes} totalCount={totalCount} />}
      </SearchList>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ResumesListPage;
