import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useaxiosPublic from "../../hooks/useAxiosPublic";

const PackageDetails = () => {
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState([]);
  const axiosPublic = useaxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosPublic.get(`/packages/${id}`);
      setPackageDetails(response.data);
    };

    fetchData();
  }, [axiosPublic, id]);

  return (
    <div className="container mx-auto mt-10">
      {packageDetails && (
        <>
          <h2 className="text-4xl font-bold text-center mb-8 text-teal-500">
            {packageDetails.tripTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {packageDetails.images &&
              packageDetails.images.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl"
                >
                  <img
                    src={image}
                    alt={`Day ${index + 1}`}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                </div>
              ))}
          </div>
          <div className="mt-8 text-center shadow-lg bg-gray-100 p-10">
            <h3 className="text-2xl font-bold mb-4 text-teal-500">
              About The Tour
            </h3>
            <p className="text-gray-700">{packageDetails.description}</p>
          </div>
          <div className="mt-8 space-y-4">
            <div className="collapse collapse-plus bg-teal-500 text-white">
              <input type="checkbox" id="dayOne" />
              <div className="collapse-title text-2xl font-bold">
                Day One Plan
              </div>
              <div className="collapse-content">
                <p className="text-gray-200">{packageDetails.dayOnePlan}</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-teal-500 text-white">
              <input type="checkbox" id="dayTwo" />
              <div className="collapse-title text-2xl font-bold">
                Day Two Plan
              </div>
              <div className="collapse-content">
                <p className="text-gray-200">{packageDetails.dayTwoPlan}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PackageDetails;
