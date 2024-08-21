import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SearchCard } from "../../../../shared/components/search-card";
import { UniversalCardItemType } from "../../../../shared/types";

interface ResumesListItemProps {
  resume: UniversalCardItemType;
}

export const ResumesListItem = ({ resume }: ResumesListItemProps) => {
  const navigate = useNavigate();

  const handleCardClick = useCallback(() => {
    navigate(`/resumes/${resume.id}`);
  }, [navigate, resume.id]);

  return <SearchCard data={resume} onClick={handleCardClick} />;
};
