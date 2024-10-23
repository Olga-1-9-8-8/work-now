import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchCard } from "../../../../shared/components/search-card";
import { UniversalCardItemType } from "../../../../shared/types";

interface ResumesListItemProps {
  resume: UniversalCardItemType;
}

export const ResumesListItem = ({ resume }: ResumesListItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCardClick = useCallback(() => {
    navigate(`/resumes/${resume.id}`, {
      state: { from: `${location.pathname}${location.search}` },
    });
  }, [location.pathname, location.search, navigate, resume.id]);

  return <SearchCard data={resume} onClick={handleCardClick} />;
};
