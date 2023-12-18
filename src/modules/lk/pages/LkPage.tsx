import { Outlet, Navigate } from "react-router-dom";

export const LkPage = () => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <h1>Страница лк - приватная</h1>
      <Outlet />
    </>
  );
};
