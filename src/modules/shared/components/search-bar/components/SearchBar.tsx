import { debounce } from "lodash";
import { XCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import { useUrl } from "../../../hooks";
import { Button } from "../../../ui/buttons/Button";
import { Input } from "../../../ui/inputs/Input";

export const SearchBar = () => {
  const { getParam, setParam, removeParam } = useUrl();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchParam = getParam("position") || "";

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = searchParam;
    }
  }, [searchParam]);

  const debouncedHandleChange = debounce((value: string) => {
    setParam("position", value);
  }, 900);

  return (
    <div className="relative">
      <Input
        className="border-primary-extraDark pr-11 text-base"
        placeholder="Введите должность"
        defaultValue={searchParam}
        onChange={(e) => debouncedHandleChange(e.target.value)}
        ref={inputRef}
      />
      {searchParam && (
        <div className="absolute inset-y-0 end-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              removeParam("position");
              if (inputRef.current) {
                inputRef.current.value = "";
              }
            }}
          >
            <XCircle size={21} className="fill-primary-extraDark stroke-background" />
          </Button>
        </div>
      )}
    </div>
  );
};
