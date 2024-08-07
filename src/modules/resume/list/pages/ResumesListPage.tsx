import { useNavigate } from "react-router-dom";
import { CreateButton } from "../../../shared/components/buttons";
import { SearchList } from "../../../shared/components/search-list";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { ResumesList } from "../components/ResumesList";
import { useResumes } from "../hooks/useResumes";

const ResumesListPage = () => {
  const { isLoading, resumes, totalCount } = useResumes();

  const navigate = useNavigate();

  return (
    <SearchList
      total={totalCount}
      title="резюме"
      button={
        <CreateButton title="Создать новое резюме" onClick={() => navigate(`/resumes/creation`)} />
      }
    >
      {isLoading ? <Spinner /> : <ResumesList resumes={resumes} totalCount={totalCount} />}
    </SearchList>
  );
};

// eslint-disable-next-line import/no-default-export
export default ResumesListPage;
