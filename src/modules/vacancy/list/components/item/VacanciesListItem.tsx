import { useNavigate } from "react-router-dom";
import { SearchCard } from "../../../../shared/components/search-card";
import { VacancyItem } from "../../../shared/types";

interface VacanciesListItemProps {
  vacancy: VacancyItem;
}

export const VacanciesListItem = ({ vacancy }: VacanciesListItemProps) => {
  const navigate = useNavigate();
  const handleCardClick = (id: string, companyCode?: string) => {
    navigate(`/vacancies/${companyCode}/${id}`);
  };

  return <SearchCard isHiring data={vacancy} onClick={handleCardClick} />;
};
