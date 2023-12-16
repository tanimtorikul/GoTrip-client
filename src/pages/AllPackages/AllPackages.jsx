import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usePackages from "../../hooks/usePackages";
import { FaRegHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import useaxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const AllPackages = () => {
  const [packages] = usePackages();
  const [wishlist, setWishlist] = useState([]);
  const axiosPublic = useaxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleWishlistToggle = async (tourPackageItem) => {
    const isPackageInWishlist = wishlist.some(
      (item) => item._id === tourPackageItem._id
    );
    if (!user) {
      navigate("/login");
      return;
    }

    const result = await Swal.fire({
      title: "Add to Wishlist?",
      text: "Do you want to add this trip to your wishlist?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
      cancelButtonText: "No, cancel",
    });

    if (result.isConfirmed) {
      const tourPackage = {
        image: tourPackageItem.images[0],
        _id: tourPackageItem._id,
        tripTitle: tourPackageItem.tripTitle,
        tourType: tourPackageItem.tourType,
        price: tourPackageItem.price,
        userEmail: user?.email,
      };

      setWishlist((prevWishlist) =>
        isPackageInWishlist
          ? prevWishlist.filter((item) => item._id !== tourPackage._id)
          : [...prevWishlist, tourPackage]
      );

      try {
        const response = await axiosPublic.post("/wishlists", tourPackage);

        console.log("Wishlist added:", response.data);
        toast.success(`${tourPackage.tripTitle} is saved in wishlist!`);
      } catch (error) {
        console.error("Error adding wishlist:", error);
        toast.error("Failed to add to wishlist");
      }
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto">
      <Helmet>
        <title>All Packages | GoTrip - Travel Agency</title>
      </Helmet>
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
                  data-aos="flip-right"
                  data-aos-duration="1500"
                />
                <div className="absolute top-6 right-5">
                  <FaRegHeart
                    className={`text-4xl transition-transform transform hover:scale-110 bg-gray-200 rounded-full p-2 ${
                      wishlist.find((item) => item._id === tourPackage._id) !==
                      undefined
                        ? "text-red-500"
                        : "text-black"
                    }`}
                    onClick={() => handleWishlistToggle(tourPackage)}
                  />
                </div>
              </figure>
              <div className="card-body p-4">
                <h2 className="text-xl text-[#313041] text-center font-semibold mb-2">
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
