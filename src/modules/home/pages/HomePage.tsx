import { HomeCard } from "../components/card/HomeCard";
import { HomeCharts } from "../components/charts/HomeCharts";
import { HomeDetails } from "../components/details/HomeDetails";
import { HomeInfo } from "../components/info/HomeInfo";
import { HomeSearchBar } from "../components/searchBar/HomeSearchBar";

interface HomeCardProps {
  color: "secondary" | "background" | "primary-extraDark";
  Component: React.ReactNode;
}

export const HomePage = () => {
  const cards: HomeCardProps[] = [
    { color: "secondary", Component: <HomeInfo /> },
    { color: "background", Component: <HomeSearchBar /> },
    { color: "primary-extraDark", Component: <HomeDetails /> },
    { color: "secondary", Component: <HomeCharts /> },
  ];

  return (
    <>
      {cards.map(({ color, Component }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <HomeCard key={index} color={color}>
          {Component}
        </HomeCard>
      ))}
    </>
  );
};
