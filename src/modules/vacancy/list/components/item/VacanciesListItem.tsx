import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchCard } from "../../../../shared/components/search-card";
import { UniversalCardItemType } from "../../../../shared/types";

interface VacanciesListItemProps {
  vacancy: UniversalCardItemType;
}

export const VacanciesListItem = ({ vacancy }: VacanciesListItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCardClick = useCallback(() => {
    navigate(`/vacancies/${vacancy.id}`, {
      state: { from: `${location.pathname}${location.search}` },
    });
  }, [location.pathname, location.search, navigate, vacancy.id]);

  return <SearchCard isHiring data={vacancy} onClick={handleCardClick} />;
};
