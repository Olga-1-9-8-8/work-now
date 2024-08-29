import { SearchList } from "../../../shared/components/search-list";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { ResumesList } from "../components/ResumesList";
import { useResumes } from "../hooks/useResumes";

const ResumesListPage = () => {
  const { isLoading, resumes, totalCount } = useResumes();

  return (
    <SearchList total={totalCount} isLoading={isLoading}>
      {isLoading ? <Spinner /> : <ResumesList resumes={resumes} totalCount={totalCount} />}
    </SearchList>
  );
};

// eslint-disable-next-line import/no-default-export
export default ResumesListPage;
