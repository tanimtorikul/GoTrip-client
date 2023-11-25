import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const bannersContent = [
  {
    title: "Saint Martin",
    description:
      "Discover the pristine beauty of Saint Martin, a serene island paradise in the Bay of Bengal. Immerse yourself in crystal-clear waters, white sandy beaches, and a tranquil atmosphere.",
  },
  {
    title: "Cox's Bazar",
    description:
      "Experience the breathtaking coastline of Cox's Bazar, home to the longest natural sea beach in the world. Enjoy the golden sands, vibrant culture, and lively atmosphere of this popular tourist destination.",
  },
  {
    title: "Sylhet",
    description:
      "Explore the enchanting landscapes of Sylhet, known for its picturesque tea gardens, rolling hills, and vibrant culture. Immerse yourself in the natural beauty and rich heritage of this captivating region.",
  },
];

const banners = [
  "/saintmartinImage.jpg",
  "/coxsbazarImage.jpg",
  "/sylhetImage.jpg",
];

const Banner = () => {
  const [opacities, setOpacities] = useState([]);

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
    <div ref={sliderRef} className="min-h-[600px] relative overflow-hidden">
      {banners.map((src, idx) => (
        <div
          key={idx}
          className="w-full h-full absolute top-0"
          style={{ opacity: opacities[idx] }}
        >
          <div className="w-full h-full relative">
            <img
              className="w-full h-full object-cover"
              src={src}
              alt={`banner-${idx}`}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h1 className="text-4xl font-bold">
                {bannersContent[idx].title}
              </h1>
              <p className="text-lg">{bannersContent[idx].description}</p>
              <button className="bg-blue-700 text-white py-2 px-4 rounded">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
