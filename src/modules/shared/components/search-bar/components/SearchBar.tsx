import { Search, XCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../ui/buttons/Button";
import { Input } from "../../../ui/inputs/Input";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <form className="w-full">
      <div className="relative">
        <Input
          className="border-primary-extraDark pr-11 text-base"
          placeholder="Введите должность"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <div className="absolute inset-y-0 end-0">
          <Button className="w-max" variant="ghost" size="icon">
            <Search size={21} className="stroke-primary-extraDark" />
          </Button>
          <Button variant="ghost" size="icon">
            <XCircle size={21} className="fill-primary-extraDark stroke-background" />
          </Button>
        </div>
      </div>
    </form>
  );
};
