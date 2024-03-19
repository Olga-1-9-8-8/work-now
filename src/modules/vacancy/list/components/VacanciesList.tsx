import { Pagination } from "../../../shared/components/pagination/components/Pagination";
import { SearchBar } from "../../../shared/components/search-bar";
import { SearchCard } from "../../../shared/components/search-card";

interface VacanciesListProps {
  vacancies: any;
}

export const VacanciesList = ({ vacancies }: VacanciesListProps) => {
  return (
    <div className="flex flex-col gap-4 sm:p-4">
      <SearchBar />
      {vacancies.map((vacancy: any) => {
        const vac = vacancy.vacancy;
        const item = {
          id: vac.id,
          city: vac.region.name,
          fullName: vac.company.name,
          employment: vac.employment,
          position: vac["job-name"],
          salary: [vac.salary_min, vac.salary_max],
          schedule: vac.schedule,
          site: vac.company.site,
          phone: vac.company.phone,
          education: vac.requirement.education,
          experience: vac.requirement.experience,
        };

        return (
          <SearchCard
            key={item.id}
            data={item}
            onClick={() => {
              console.log(1);
            }}
          />
        );
      })}
      <Pagination />
    </div>
  );
};
