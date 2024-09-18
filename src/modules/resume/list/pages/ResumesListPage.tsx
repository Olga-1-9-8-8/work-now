import { SearchList } from "../../../shared/components/search-list";
import { SeoMetadata } from "../../../shared/navigation";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { ResumesList } from "../components/ResumesList";
import { useResumes } from "../hooks/useResumes";

const ResumesListPage = () => {
  const { isLoading, resumes, totalCount } = useResumes();

  return (
    <>
      <SeoMetadata
        title="WorkNow / Список Резюме"
        description="На сайте WorkNow вы найдете обширный список резюме, подходящие для различных сфер деятельности и уровней квалификации. Наша цель — помочь вам найти идеального кандидата"
      />
      <SearchList total={totalCount} isLoading={isLoading}>
        {isLoading ? <Spinner /> : <ResumesList resumes={resumes} totalCount={totalCount} />}
      </SearchList>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ResumesListPage;
