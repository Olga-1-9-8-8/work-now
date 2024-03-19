import { SearchFiltersBar } from "../../../shared/components/filters";
import { SideBar } from "../../../shared/components/side-bar";
import { PageContainer } from "../../../shared/ui/layout/components/containers/PageContainer";

export const ResumesSearchLayout = () => {
  // TODO: получить при фильтрации
  const city = "Москва";
  const position = "Менеджеры";
  const total = 2200;
  return (
    <PageContainer>
      <div className="flex flex-col gap-6 border-b-2 border-primary py-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">
            {position} в {city}, найдено {total} резюме
          </h2>
        </div>
        <SearchFiltersBar />
      </div>
      <SideBar />
    </PageContainer>
  );
};
