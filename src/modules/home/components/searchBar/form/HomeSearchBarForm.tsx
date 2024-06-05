import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../shared/ui/buttons/Button";
import { Input } from "../../../../shared/ui/inputs/Input";

export const HomeSearchBarForm = () => {
  const navigate = useNavigate();

  const [position, setPosition] = useState("");
  const [city, setCity] = useState("");

  const getPath = () => {
    return `${position ? `position=${position}` : ""}${position && city ? "&" : ""}${city ? `city=${city}` : ""}`;
  };

  const handleClick = () => {
    navigate(`/vacancies?${getPath()}`);
  };

  return (
    <div className="relative flex">
      <Input
        className="h-14 grow rounded-none rounded-l-lg border-2 border-r-0 border-primary-extraDark focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Введите название работы"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
      />

      <Input
        className="border-l-1 h-14 grow rounded-none rounded-r-lg border-2 border-primary-extraDark focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Местоположение или “Удаленка”"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        iconAfter={
          <Button onClick={handleClick} size="icon" type="submit">
            <Search className="h-6 w-6" color="#fff" strokeWidth={2} />
          </Button>
        }
      />
    </div>
  );
};
