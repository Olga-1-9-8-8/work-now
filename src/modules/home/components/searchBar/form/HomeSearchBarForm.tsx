import { Search } from "lucide-react";
import { Button } from "../../../../shared/ui/buttons/Button";
import { Input } from "../../../../shared/ui/inputs/Input";

export const HomeSearchBarForm = () => {
  return (
    <form>
      <div className="relative flex">
        <Input
          className="h-14 rounded-none rounded-l-lg border-2 border-r-0 border-primary-extraDark focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Введите название работы, компании, ключевых слов"
        />
        <div className="after:absolute after:top-2 after:h-10 after:w-[0.1rem] after:bg-primary-extraDark after:content-['']" />
        <Input
          className="h-14 rounded-none rounded-r-lg border-2 border-l-0 border-primary-extraDark focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Введите свое местоположение или “Удаленка”"
        />
        <Button className="absolute inset-y-2 right-2" size="icon" type="submit">
          <Search className="h-6 w-6" color="#fff" strokeWidth={2} />
        </Button>
      </div>
    </form>
  );
};
