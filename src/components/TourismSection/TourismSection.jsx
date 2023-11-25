import { useState } from "react";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TourismSection = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="text-center">
      <SectionTitle
        heading="Explore Bangladesh with Us"
        subHeading="Discover Unforgettable Experiences through our Overview, Choose Your Adventure with Our Packages, and Meet the Experts - Our Tour Guides!"
      />

      <div className="mx-auto max-w-2xl">
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="my-8"
        >
          <TabList className="flex justify-center space-x-4">
            <Tab className="text-xl font-semibold border-b-2 border-transparent  focus:outline-none focus:border-blue-500">
              Overview
            </Tab>
            <Tab className="text-xl font-semibold border-b-2 border-transparent  focus:outline-none focus:border-blue-500">
              Our Packages
            </Tab>
            <Tab className="text-xl font-semibold border-b-2 border-transparent  focus:outline-none focus:border-blue-500">
              Meet Our Tour Guides
            </Tab>
          </TabList>

          <TabPanel></TabPanel>

          <TabPanel></TabPanel>

          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TourismSection;
