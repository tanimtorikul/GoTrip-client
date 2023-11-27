import React from "react";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { Gallery } from "react-grid-gallery";

const TouristStory = () => {
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
    <div className="max-w-[1400px] mx-auto p-8">
      <SectionTitle
        heading="Travel Diaries Unfold"
        subHeading="Capturing Moments, Sharing Adventures on the Road"
      />
      <div>
        {stories.map((story) => (
          <Link
            to={`/stories/${story._id}`}
            key={story._id}
            className="group relative"
          >
            <div className="overflow-hidden rounded-md">
              <Gallery
                images={[{ src: story.image }]}
                enableImageSelection={false}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TouristStory;
