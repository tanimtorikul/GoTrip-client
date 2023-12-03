import { useState } from "react";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import usePackages from "../../hooks/usePackages";
import { FaRegHeart } from "react-icons/fa";
import TourGuidesList from "../TourGuidesList/TourGuidesList";
import { Link } from "react-router-dom";

const TourismSection = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const [packages] = usePackages();
  console.log(packages);

  const videoUrl = [
    "https://www.youtube.com/embed/czXoYw8Zk54",
    "https://www.youtube.com/embed/czXoYw8Zk54",
    "https://www.youtube.com/embed/czXoYw8Zk54",
  ];

  return (
    <div className="text-center">
      <SectionTitle
        heading="Explore Bangladesh with Us"
        subHeading="Uncover Adventures, Choose Packages, and Meet Our Expert Guides!"
      />

      <div className="mx-auto max-w-[1400px]">
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="my-8"
        >
          <TabList className="flex justify-center space-x-4">
            <Tab className="md:text-xl font-semibold border-b-2 border-transparent  focus:outline-none focus:border-blue-500 cursor-pointer">
              Overview
            </Tab>
            <Tab className="md:text-xl font-semibold  border-b-2 border-transparent  focus:outline-none focus:border-blue-500 cursor-pointer">
              Our Packages
            </Tab>
            <Tab className="md:text-xl font-semibold border-b-2 border-transparent  focus:outline-none focus:border-blue-500 cursor-pointer">
              Meet Our Tour Guides
            </Tab>
          </TabList>

          <TabPanel>
            {/* Map over the YouTube video URLs and generate iframes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              {videoUrl.map((videoURL, index) => (
                <div
                  key={index}
                  className="youtube-video-container bg-gray-300 rounded-md overflow-hidden"
                >
                  <iframe
                    className="w-full h-64 object-cover"
                    src={videoURL}
                    title={`YouTube Video ${index + 1}`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            {packages.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 px-4 md:px-4 lg:px-0">
                {packages.slice(0, 4).map((tourPackage) => (
                  <div
                    key={tourPackage._id}
                    className="card group w-full  bg-white shadow-lg rounded-md overflow-hidden"
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
                      <h2 className="text-xl font-semibold mb-2">
                        {tourPackage.tripTitle}
                      </h2>
                      <p className="text-gray-600 mb-2">
                        {tourPackage.tourType}
                      </p>
                      <p className="text-lg text-[#EA6E5B] font-bold mb-2">
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
            )}
            <Link
              to="/allpackages"
              className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-md"
            >
              All Packages
            </Link>
          </TabPanel>
          <TabPanel>
            <TourGuidesList></TourGuidesList>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TourismSection;
