import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FacebookShareCount, FacebookShareButton } from "react-share";
import { FaFacebook } from "react-icons/fa6";

const StoryDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosPublic.get(`/stories/${id}`);
      setStory(response.data);
    };

    fetchData();
  }, [axiosPublic, id]);

  const baseUrl = window.location.origin;
  const path = location.pathname.startsWith("/")
    ? location.pathname
    : `/${location.pathname}`;
  const shareUrl = `${baseUrl}${path}`;

  return (
    <div className="max-w-[1200px] mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
      {story && (
        <>
          <img
            src={story.image}
            alt={story.storyTitle}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-3xl font-bold mb-4 text-teal-500">
            {story.storyTitle}
          </h2>
          <p className="text-gray-700 mb-4">{story.storyContent}</p>
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-500 md:text-lg font-semibold">
              Shared at: {story.addedDate}
            </p>
            <p className="text-gray-500 md:text-lg font-semibold">
              Shared by: {story.userDisplayName}
            </p>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <div className="flex items-center justify-end">
              <FacebookShareCount url={shareUrl}>
                {(count) => <span className="mr-2">{count}</span>}
              </FacebookShareCount>
              <FacebookShareButton url={shareUrl}>
                <FaFacebook size={40} />
              </FacebookShareButton>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StoryDetails;
