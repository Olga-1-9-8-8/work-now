import { HomeCard } from "./card/HomeCard";
import { HomeCharts } from "./charts/HomeCharts";
import { HomeDetails } from "./details/HomeDetails";
import { HomeInfo } from "./info/HomeInfo";
import { HomeSearchBar } from "./searchBar/HomeSearchBar";

interface HomeCardProps {
  color: "secondary" | "background" | "primary-extraDark";
  Component: React.ReactNode;
}
const cards: HomeCardProps[] = [
  { color: "secondary", Component: <HomeInfo /> },
  { color: "background", Component: <HomeSearchBar /> },
  { color: "primary-extraDark", Component: <HomeDetails /> },
  { color: "secondary", Component: <HomeCharts /> },
];

export const Home = () => {
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
