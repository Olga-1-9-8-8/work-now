import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../shared/ui/buttons/Button";
import { Input } from "../../../../shared/ui/inputs/Input";

export const HomeSearchBarForm = () => {
  const navigate = useNavigate();

  const [position, setPosition] = useState("");
  const [city, setCity] = useState("");

  const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(e.target.value);
  };

  const handleLCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const getPath = () => {
    return `${position ? `position=${position}` : ""}${position && city ? "&" : ""}${city ? `city=${city}` : ""}`;
  };

  const handleButtonClick = () => {
    navigate(`/vacancies?${getPath()}`);
  };

  return (
    <div className="relative flex">
      <Input
        className="h-14 rounded-none rounded-l-lg border-2 border-r-0 border-primary-extraDark focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Введите название работы"
        value={position}
        onChange={handlePositionChange}
        onKeyDown={(e) => e.key === "Enter" && handleButtonClick()}
      />
      <div className="after:absolute after:top-2 after:h-10 after:w-[0.1rem] after:bg-primary-extraDark after:content-['']" />
      <Input
        className="h-14 rounded-none rounded-r-lg border-2 border-l-0 border-primary-extraDark focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Введите свое местоположение или “Удаленка”"
        value={city}
        onChange={handleLCityChange}
        onKeyDown={(e) => e.key === "Enter" && handleButtonClick()}
      />
      <Button
        onClick={handleButtonClick}
        className="absolute inset-y-2 right-2"
        size="icon"
        type="submit"
      >
        <Search className="h-6 w-6" color="#fff" strokeWidth={2} />
      </Button>
    </div>
  );
};
