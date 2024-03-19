import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { TypographyH5 } from "../../../shared/ui/typography/TypographyH5";
import { getResumes } from "../api/apiResumes";
import { ResumesList } from "../components/ResumesList";

const ResumesListPage = () => {
  const { isLoading, data: resumes } = useQuery({
    queryKey: ["resumes"],
    queryFn: getResumes,
  });

  if (isLoading) return <Spinner />;

  return resumes ? (
    <ResumesList resumes={resumes} />
  ) : (
    <TypographyH5 className="text-center">Резюме не найдены</TypographyH5>
  );
};

// eslint-disable-next-line import/no-default-export
export default ResumesListPage;
