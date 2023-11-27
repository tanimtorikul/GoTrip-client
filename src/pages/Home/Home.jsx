import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import TourismSection from "../../components/TourismSection/TourismSection";
import TourTypeSection from "../../components/TourTypeSection/TourTypeSection";
import TouristStory from "../../components/TouristStory/TouristStory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | GoTrip -Travel Agency</title>
      </Helmet>
      <Banner />
      <TourismSection />
      <TourTypeSection/>
      <TouristStory/>
    </div>
  );
};

export default Home;
