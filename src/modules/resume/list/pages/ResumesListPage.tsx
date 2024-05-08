import { NotFound } from "../../../shared/components/not-found/components";
import { SearchList } from "../../../shared/components/search-list";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { ResumesList } from "../components/ResumesList";
import { useResumes } from "../hooks/useResumes";

const ResumesListPage = () => {
  const { isLoading, resumes, totalCount } = useResumes();

  if (isLoading) return <Spinner />;

  return (
    <SearchList total={totalCount} title="резюме">
      {resumes ? (
        <ResumesList resumes={resumes} totalCount={totalCount} />
      ) : (
        <NotFound title="Резюме" />
      )}
    </SearchList>
  );
};

// eslint-disable-next-line import/no-default-export
export default ResumesListPage;
