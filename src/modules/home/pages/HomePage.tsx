import { HomeCard } from "../components/card/HomeCard";
import { HomeCharts } from "../components/charts/HomeCharts";
import { HomeDetails } from "../components/details/HomeDetails";
import { HomeInfo } from "../components/info/HomeInfo";
import { HomeSearchBar } from "../components/searchBar/HomeSearchBar";

const HomePage = () => {
  return (
    <>
      <HomeCard color="secondary">
        <HomeInfo isAuthorized={false} />
      </HomeCard>
      <HomeCard color="background">
        <HomeSearchBar />
      </HomeCard>
      <HomeCard color="primary-extraDark">
        <HomeDetails />
      </HomeCard>
      <HomeCard color="secondary">
        <HomeCharts />
      </HomeCard>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default HomePage;
