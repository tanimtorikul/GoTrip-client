import { useEffect, useState } from "react";

const TourGuidesList = () => {
  const [tourGuides, setTourGuides] = useState([]);

  useEffect(() => {
    fetch("/tourguides.json")
      .then((response) => response.json())
      .then((data) => setTourGuides(data));
  }, []);
  return (
    <div className="grid md:grid-cols-4 gap-6 my-8">
      {tourGuides.map((tourGuide) => (
        <div key={tourGuide._id} className="">
          {" "}
          <div className="flex justify-center">
            <img src={tourGuide.photo} className="object-cover h-96" />{" "}
          </div>
          <div className="">
            {" "}
            <h3 className="text-2xl font-bold mb-4">{tourGuide.name}</h3>{" "}
            <p className="text-lg font-medium mb-4">
              {tourGuide.description.slice(0, 100)}...
            </p>{" "}
            <button className="btn bg-[#FAF5EE]">Details</button>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default TourGuidesList;
