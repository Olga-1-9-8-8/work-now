import { useUser } from "../../shared/services/auth";
import { HomeCard } from "../components/card/HomeCard";
import { HomeCharts } from "../components/charts/HomeCharts";
import { HomeDetails } from "../components/details/HomeDetails";
import { HomeInfo } from "../components/info/HomeInfo";
import { HomeSearchBar } from "../components/searchBar/HomeSearchBar";

const HomePage = () => {
  const { isAuthenticated } = useUser();

  return (
    <>
      <HomeCard color="secondary">
        <HomeInfo isAuthorized={isAuthenticated} />
      </HomeCard>
      <HomeCard color="background">
        <HomeSearchBar />
      </HomeCard>
      <HomeCard color="primary-extraDark">
        <HomeDetails />
      </HomeCard>
      <HomeCard color="secondary">
        <HomeCharts isAuthorized={isAuthenticated} />
      </HomeCard>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default HomePage;
