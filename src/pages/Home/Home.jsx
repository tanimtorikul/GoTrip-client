import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import TourismSection from "../../components/TourismSection/TourismSection";
import TourTypeSection from "../../components/TourTypeSection/TourTypeSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | GoTrip -Travel Agency</title>
      </Helmet>
      <Banner />
      <TourismSection />
      <TourTypeSection/>
    </div>
  );
};

export default Home;
