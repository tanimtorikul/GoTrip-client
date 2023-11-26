import { useState } from "react";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import usePackages from "../../hooks/usePackages";
import { FaRegHeart } from "react-icons/fa";

const TourismSection = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [packages] = usePackages();
  console.log(packages);

  return (
    <div className="text-center">
      <SectionTitle
        heading="Explore Bangladesh with Us"
        subHeading="Discover Unforgettable Experiences through our Overview, Choose Your Adventure with Our Packages, and Meet the Experts - Our Tour Guides!"
      />

      <div className="mx-auto max-w-[1400px]">
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="my-8"
        >
          <TabList className="flex justify-center space-x-4">
            <Tab className="text-xl font-semibold border-b-2 border-transparent  focus:outline-none focus:border-blue-500 cursor-pointer">
              Overview
            </Tab>
            <Tab className="text-xl font-semibold border-b-2 border-transparent  focus:outline-none focus:border-blue-500 cursor-pointer">
              Our Packages
            </Tab>
            <Tab className="text-xl font-semibold border-b-2 border-transparent  focus:outline-none focus:border-blue-500 cursor-pointer">
              Meet Our Tour Guides
            </Tab>
          </TabList>

          <TabPanel></TabPanel>

          <TabPanel>
            {packages.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
                {packages.slice(0, 4).map((tourPackage) => (
                  <div
                    key={tourPackage.id}
                    className="card group w-full bg-white shadow-lg rounded-md overflow-hidden"
                  >
                    <figure className="relative">
                      <img
                        src={tourPackage.image}
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
                      <p className="text-lg font-bold mb-2">
                        ${tourPackage.price}
                      </p>
                      <div className="card-actions justify-center">
                        <button className="btn bg-[#FAF5EE]">
                          View Package
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <button className="mt-4 bg-black text-white py-2 px-4 rounded-md">
              All Packages
            </button>
          </TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TourismSection;
