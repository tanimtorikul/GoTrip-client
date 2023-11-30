import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import { Gallery } from "react-grid-gallery";
import { Link } from "react-router-dom";

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
      <SectionTitle
        heading="Travel Diaries Unfold"
        subHeading="Capturing Moments, Sharing Adventures on the Road"
      />
      <div className="flex flex-col md:flex-row mx-4">
        {stories.map((story) => (
          <div key={story._id} className="w-full">
            <Link
              to={`/stories/${story._id}`}
              className="group relative block overflow-hidden"
            >
              <Gallery
                images={[{ src: story.image }]}
                enableImageSelection={false}
                id={story._id}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStories;
