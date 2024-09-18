import { SeoMetadata } from "../../shared/navigation";
import { Home } from "../components/Home";

export const HomePage = () => {
  return (
    <>
      <SeoMetadata
        title="Work Now"
        description="Work Now - это платформа для поиска работы и сотрудников. Создавайте резюме и вакансии, подбирайте сотрудников и устраивайтесь на работу, проходите стажировки."
      />
      <Home />;
    </>
  );
};
