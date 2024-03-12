import { SpinnerIcon } from "../icons";

export const Spinner = () => {
  return (
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <SpinnerIcon className="h-12 w-12 animate-spin text-primary-extraDark/60" />
    </div>
  );
};
