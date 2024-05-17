import { useNavigate } from "react-router-dom";
import { SearchCard } from "../../../../shared/components/search-card";
import { ResumeItem } from "../../../shared/types";

interface ResumesListItemProps {
  resume: ResumeItem;
}

export const ResumesListItem = ({ resume }: ResumesListItemProps) => {
  const navigate = useNavigate();
  const handleCardClick = (id: number) => {
    navigate(`/resumes/${id}`);
  };

  return <SearchCard<ResumeItem["id"]> data={resume} onClick={handleCardClick} />;
};
