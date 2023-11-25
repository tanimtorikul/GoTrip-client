import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import TourismSection from "../../components/TourismSection/TourismSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | GoTrip -Travel Agency</title>
      </Helmet>
      <Banner />
      <TourismSection />
    </div>
  );
};

export default Home;
