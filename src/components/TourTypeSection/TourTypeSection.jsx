import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import usePackages from "../../hooks/usePackages";

const TourTypeSection = () => {
  const [packages] = usePackages();

  return (
    <div className="my-12">
      <SectionTitle
        heading="Discover Your Adventure"
        subHeading="Explore Our Diverse Range of Tour Types and Create Unforgettable Memories"
      ></SectionTitle>
      <div className="flex flex-wrap justify-center gap-12">
        {packages.map((tourType) => (
          <div key={tourType._id}>
            <Link
              to={`/packages/${tourType.tourType}`}
              className="text-xl md:text-2xl font-bold overflow-hidden"
            >
              {tourType.tourType}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourTypeSection;
