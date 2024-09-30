import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SearchCard } from "../../../../shared/components/search-card";
import { UniversalCardItemType } from "../../../../shared/types";

interface VacanciesListItemProps {
  vacancy: UniversalCardItemType;
}

export const VacanciesListItem = ({ vacancy }: VacanciesListItemProps) => {
  const navigate = useNavigate();
  const handleCardClick = useCallback(() => {
    navigate(`/vacancies/${vacancy.id}`);
  }, [navigate, vacancy.id]);

  return <SearchCard isHiring data={vacancy} onClick={handleCardClick} />;
};
