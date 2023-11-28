import { useEffect, useState } from "react";
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
  console.log(packageDetails);

  return (
    <div>
      <h2 className="text-3xl text-center font-bold mb-4">
        {packageDetails.tripTitle}
      </h2>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {packageDetails.images &&
          packageDetails.images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image}
                className="w-full h-64 object-cover rounded-md transition transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold mb-2">About The Tour</h3>
        <p className="text-gray-600">{packageDetails.description}</p>
      </div>
    </div>
  );
};

export default PackageDetails;
