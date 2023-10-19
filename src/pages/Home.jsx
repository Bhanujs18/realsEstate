import Blogs from "../components/Blogs";

// import Builders from "../components/Builders"
import Category from "../components/Category";
import Certificates from "../components/Certificates";
import ConnectWithUs from "../components/ConnectWithUs";
import Goal from "../components/Goal";
import MainScreen from "../components/MainScreen";
import NewsAndLetter from "../components/NewsAndLetter";
import Reviews from "../components/Reviews";
import Statitics from "../components/Statitics";
import TrendingLocations from "../components/TrendingLocations";
import TrendingProperties from "../components/TrendingProperties";

import Builders from "../components/Builders";
import MobBuilders from "../components/MobBuilders";


const Home = () => {
  return (
    <div>
      <MainScreen />
      
      <Category />
      <Builders />
      <MobBuilders />
      <TrendingLocations />
      <Goal />
      <Statitics />
       {/* <Organizations /> */}
      <TrendingProperties />
      <Certificates />
      <NewsAndLetter />
      <Reviews />
      <Blogs />
      <ConnectWithUs />
    </div>
  );
};

export default Home;
