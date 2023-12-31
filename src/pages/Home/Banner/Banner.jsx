import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const banners = [
  "/saintmartinImage.jpg",
  "/coxsbazarImage.jpg",
  "/sylhetImage.jpg",
];

const Banner = () => {
  const [opacities, setOpacities] = useState([]);
  const { user } = useAuth();

  const [sliderRef] = useKeenSlider({
    slides: banners.length,
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(
        (slide) => slide.portion
      );
      setOpacities(new_opacities);
    },
  });

  return (
    <div
      ref={sliderRef}
      className="min-h-[500px] md:min-h-[800px] relative overflow-hidden"
    >
      {banners.map((src, idx) => (
        <div
          key={idx}
          className="w-full h-full absolute top-0"
          style={{ opacity: opacities[idx] }}
        >
          <div
            className="w-full h-full relative"
            data-aos="fade-zoom-out"
            data-aos-delay="300"
          >
            <img
              className="w-full h-full object-cover"
              src={src}
              alt={`banner-${idx}`}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              {user ? (
                <h1
                  className="text-4xl md:text-6xl font-bold mb-6"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  Hi {user?.displayName}!
                </h1>
              ) : (
                <h1
                  className="text-4xl md:text-6xl font-bold mb-6"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  Go with GoTrip!
                </h1>
              )}
              <p
                className="text-2xl mb-6"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Where Would You Like To Go?
              </p>
              <Link
                to="/allpackages"
                className="bg-teal-500 text-white py-2 px-4 rounded"
                data-aos="zoom-out"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
