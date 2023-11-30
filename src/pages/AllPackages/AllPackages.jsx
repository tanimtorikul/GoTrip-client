import { Link } from "react-router-dom";
import usePackages from "../../hooks/usePackages";
import { FaRegHeart } from "react-icons/fa";

const AllPackages = () => {
  const [packages] = usePackages();

  return (
    <div className="max-w-[1400px] mx-auto">
      {packages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
          {packages.map((tourPackage) => (
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
              <div className="card-body p-4">
                <h2 className="text-xl text-[#313041] font-semibold mb-2">
                  {tourPackage.tripTitle}
                </h2>
                <p className="text-gray-600 text-center mb-2">
                  {tourPackage.tourType}
                </p>
                <p className="text-lg text-[#EA6E5B] text-center font-bold mb-2">
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
      ) : (
        <div>No packages available.</div>
      )}
    </div>
  );
};

export default AllPackages;
