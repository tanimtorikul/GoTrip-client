import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosPublic } from "../../hooks/useaxiosPublic";
import { FaRegHeart } from "react-icons/fa";

const TourTypePage = () => {
  const { tourType } = useParams();
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = () => {
      axiosPublic(`/packages/tourType/${tourType}`).then((response) => {
        setTours(response.data);
      });
    };

    fetchTours();
  }, [tourType]);

  console.log(tours);

  return (
    <div>
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {tourType} Tours
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
          {tours.map((tourPackage) => (
            <div
              key={tourPackage._id}
              className="card group w-full bg-white shadow-lg rounded-md overflow-hidden"
            >
              <figure className="relative">
                <img
                  src={tourPackage.images[0]}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute top-6 right-5">
                  <FaRegHeart className="text-black text-4xl transition-transform transform hover:scale-110 bg-gray-200 rounded-full p-2" />
                </div>
              </figure>
              <div className="card-body p-4 mx-auto">
                <h2 className="text-xl text-center font-semibold mb-2">
                  {tourPackage.tripTitle}
                </h2>
                <p className="text-gray-600 mb-2 text-center">
                  {tourPackage.tourType}
                </p>
                <p className="text-lg font-bold mb-2 text-center">
                  ${tourPackage.price}
                </p>
                <div className="card-actions justify-center">
                  <Link
                    to={`/package/${tourPackage._id}`}
                    className="btn bg-[#FAF5EE]"
                  >
                    View Package
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourTypePage;
