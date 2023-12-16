import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useaxiosPublic from "../../hooks/useAxiosPublic";
import BookingForm from "../../components/BookingForm/BookingForm";
import { Helmet } from "react-helmet-async";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loading from "../../components/Loading";

const PackageDetails = () => {
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState({});
  const axiosPublic = useaxiosPublic();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get(`/packages/${id}`);
        setPackageDetails(response.data);
        setLoading(false);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Error fetching package details:", error);
      }
    };

    fetchData();
  }, [axiosPublic, id]);

  const tourGuides = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ];

  return (
    <div className="container mx-auto mt-12 md:mt-0">
      <Helmet>
        <title>{`${
          packageDetails.tripTitle || "Package"
        } - GoTrip - Travel Agency`}</title>
      </Helmet>

      {loading ? (
        <Loading />
      ) : (
        packageDetails && (
          <>
            <h2 className="text-4xl font-bold text-center mb-8 text-teal-500">
              {packageDetails.tripTitle}
            </h2>

            {packageDetails.images && packageDetails.images.length > 0 && (
              <Carousel
                showThumbs={true}
                thumbWidth={100}
                autoPlay={true}
                interval={2000}
                infiniteLoop={true}
                className="w-full text-center max-w-7xl mx-auto rounded-lg md:rounded-none"
              >
                {packageDetails.images.map((image, index) => (
                  <div key={index} className="h-96">
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </Carousel>
            )}

            <div className="mt-8 text-center shadow-lg bg-gray-100 p-10 md:w-1/2 mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-teal-500">
                Overview
              </h3>
              <p className="text-gray-700">{packageDetails.description}</p>
            </div>

            <div className="space-y-4 py-6 md:w-1/2 mx-auto">
              <div className="collapse collapse-plus bg-teal-500 text-white">
                <input type="checkbox" id="dayOne" />
                <div className="collapse-title text-2xl font-bold">
                  Day One Plan
                </div>
                <div className="collapse-content">
                  {packageDetails.dayOnePlan ? (
                    <p className="text-gray-200">{packageDetails.dayOnePlan}</p>
                  ) : (
                    <p className="text-gray-200">No Plan For this package</p>
                  )}
                </div>
              </div>

              <div className="collapse collapse-plus bg-teal-500 text-white">
                <input type="checkbox" id="dayTwo" />
                <div className="collapse-title text-2xl font-bold">
                  Day Two Plan
                </div>
                <div className="collapse-content">
                  {packageDetails.dayTwoPlan ? (
                    <p className="text-gray-200">{packageDetails.dayTwoPlan}</p>
                  ) : (
                    <p className="text-gray-200">No Plan For this package</p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="py-12">
                <h3 className="text-2xl font-bold mb-4 text-teal-500 text-center">
                  Booking Form
                </h3>
                <BookingForm
                  packageDetails={packageDetails}
                  tourGuides={tourGuides}
                />
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default PackageDetails;
