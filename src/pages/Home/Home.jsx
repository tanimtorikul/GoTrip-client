import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import TourismSection from '../../components/TourismSection/TourismSection';
import TourTypeSection from '../../components/TourTypeSection/TourTypeSection';
import TouristStory from '../../components/TouristStory/TouristStory';
import Loading from '../../components/Loading';
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   setTimeout(() => {
      setLoading(false);
    }, 1000); 

  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Helmet>
        <title>Home | GoTrip - Travel Agency</title>
      </Helmet>
      <Banner />
      <TourismSection />
      <TourTypeSection />
      <TouristStory />
    </div>
  );
};

export default Home;
