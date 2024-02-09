import { Briefcase, CircleUserRound } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "../../../../../buttons";

export const HeaderNav = () => {
  const isUserAuthorized = false;

  return (
    <>
      <nav className="flex grow">
        <ul className="flex grow justify-center gap-10">
          <li>
            <Button size="lg" variant="ghost" className="text-white" asChild>
              <NavLink to="/search/worker" className="flex gap-2">
                <CircleUserRound size={20} />
                Найти сотрудника
              </NavLink>
            </Button>
          </li>
          <li>
            <Button size="lg" variant="ghost" className="text-white " asChild>
              <NavLink to="/search/job" className="flex gap-2">
                <Briefcase size={20} />
                Найти работу
              </NavLink>
            </Button>
          </li>
        </ul>
      </nav>
      <div>
        {isUserAuthorized ? (
          <Button className="text-base" variant="outline" size="lg" asChild>
            <NavLink to="lk">Профиль</NavLink>
          </Button>
        ) : (
          <Button className="text-base" variant="outline" size="lg" asChild>
            <NavLink to="/login">Войти или создать профиль</NavLink>
          </Button>
        )}
      </div>
    </>
  );
};
