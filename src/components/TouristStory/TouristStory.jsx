import React from "react";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

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
        subHeading="Discover Moments and Adventures Shared by Travelers"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stories.map((story) => (
          <Link
            to={`/stories/${story._id}`}
            key={story._id}
            className="group relative overflow-hidden rounded-md transition-transform transform hover:scale-105"
          >
            <img
              className="h-72 w-full object-cover"
              src={story.image}
              alt=""
            />
            <div className="absolute bottom-0 right-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity">
              <div className="flex items-center justify-center h-full">
                <p className="text-white text-base font-bold bg-black">
                  Shared by {story.userDisplayName}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to="/allstories"
          className="mt-4 bg-black text-white py-2 px-4 rounded-md"
        >
          All Stories
        </Link>
      </div>
    </div>
  );
};

export default TouristStory;
