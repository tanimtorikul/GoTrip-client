
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AllStories = () => {
  const axiosSecure = useAxiosSecure();

  // tanstack query to load stories data
  const { data: stories = [] } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axiosSecure.get("/stories");
      return res.data;
    },
  });

  return (
    <div className="max-w-[1400px] mx-auto py-8">
      <Helmet>
        <title>All Stories | GoTrip - Travel Agency</title>
      </Helmet>
      <SectionTitle
        heading="Travel Diaries Unfold"
        subHeading="Capturing Moments, Sharing Adventures on the Road"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stories.map((story, index) => (
          <div key={index} className="group relative block overflow-hidden">
            <Link to={`/stories/${story._id}`}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={story.image}
                alt={`Image ${index + 1}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStories;
