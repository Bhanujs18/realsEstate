

import Blogs from "../components/Blogs"
// import Builders from "../components/Builders"
import Category from "../components/Category"
import Certificates from "../components/Certificates"
import ConnectWithUs from "../components/ConnectWithUs"
import Goal from "../components/Goal"
import MainScreen from "../components/MainScreen"
import NewsAndLetter from "../components/NewsAndLetter"
import Reviews from "../components/Reviews"
import TrendingLocations from "../components/TrendingLocations"
import TrendingProperties from "../components/TrendingProperties"


const Home = () => {
  return (
    <div>
      <MainScreen />
      <Category />
      <TrendingLocations />
      {/* <Builders /> */}
      <Goal />
      <TrendingProperties />
      <Certificates />
      <NewsAndLetter/>
      <Reviews />
      <Blogs />
      <ConnectWithUs />
     
     
    </div>
  )
}

export default Home