import { useNavigate } from "react-router-dom";
import { SearchCard } from "../../../../shared/components/search-card";
import { UniversalCardItemType } from "../../../../shared/types";
import { ResumeItem } from "../../../shared/types";

interface ResumesListItemProps {
  resume: UniversalCardItemType;
}

export const ResumesListItem = ({ resume }: ResumesListItemProps) => {
  const navigate = useNavigate();
  const handleCardClick = (id: number | string) => {
    navigate(`/resumes/${id}`);
  };

  return <SearchCard<ResumeItem["id"]> data={resume} onClick={handleCardClick} />;
};
