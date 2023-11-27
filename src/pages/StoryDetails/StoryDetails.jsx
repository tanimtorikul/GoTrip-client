import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const StoryDetails = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {}, []);

  return <div></div>;
};

export default StoryDetails;
