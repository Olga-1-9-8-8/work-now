import { useNavigate } from "react-router-dom";
import { SearchCard } from "../../../../shared/components/search-card";
import { UniversalCardItemType } from "../../../../shared/types";

interface ResumesListItemProps {
  resume: UniversalCardItemType;
}

export const ResumesListItem = ({ resume }: ResumesListItemProps) => {
  const navigate = useNavigate();
  const handleCardClick = (id: number) => {
    navigate(`/resumes/${id}`);
  };

  return <SearchCard data={resume} onClick={handleCardClick} />;
};
