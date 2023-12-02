import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAdmin from "../../../hooks/useAdmin";
import useTourGuides from "../../../hooks/useTourGuides";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Profile = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useAdmin();
  const [isTourGuides] = useTourGuides();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const checkAdminStatus = async () => {
      setLoading(false);
    };

    checkAdminStatus();
  }, [setIsAdmin]);

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const story = {
        userEmail: user?.email,
        userDisplayName: user?.displayName,
        storyTitle: data.title,
        storyContent: data.content,
        image: res.data.data.display_url,
        addedDate: data.image[0].lastModifiedDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      };
      console.log(story);

      const storyRes = await axiosSecure.post("/stories", story);
      console.log(storyRes.data);
      if (storyRes.data.insertedId) {
        reset();
        // a success toast
        toast.success("Your story added successfully!");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 border rounded-md shadow-md bg-white">
      <Helmet>
        <title>Profile | GoTrip - Travel Agency</title>
      </Helmet>
      {/* User Profile */}
      <div className="mb-6 text-center">
        <img
          src={user?.photoURL}
          alt="User Avatar"
          className="w-32 h-32 rounded-full border-4 border-black mx-auto mb-4"
        />
        <h2 className="text-2xl text-gray-800 font-semibold">
          {user?.displayName}
        </h2>
        <p className="text-gray-500">{user?.email}</p>
      </div>

      {!isAdmin && !isTourGuides ? (
        <div>
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl text-gray-800 mb-2 font-bold">
              Share Your Travel Experience
            </h1>
            <p className="text-gray-600">Create a story to inspire others</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-lg text-gray-800 font-semibold"
              >
                Story Title
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                name="title"
                placeholder="Enter the title of your story"
                className="w-full px-4 py-3 border rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:border-blue-500"
              />
              {errors.title && (
                <span className="text-red-500">Title is required</span>
              )}
            </div>

            <div>
              <label
                htmlFor="content"
                className="block mb-2 text-lg text-gray-800 font-semibold"
              >
                Story Content
              </label>
              <textarea
                {...register("content", { required: true })}
                name="content"
                placeholder="Share your travel experience..."
                className="w-full px-4 py-3 border rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:border-blue-500 resize-none"
                rows="4"
              />
              {errors.content && (
                <span className="text-red-500">Content is required</span>
              )}
            </div>

            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-lg text-gray-800 font-semibold"
              >
                Upload Image
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
                name="image"
                className="w-full px-4 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-800"
                multiple
              />
              {errors.image && (
                <span className="text-red-500">Image is required</span>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black text-white w-1/2 rounded-md py-3 text-lg"
              >
                Add Story
              </button>
            </div>
          </form>
        </div>
      ) : isAdmin ? (
        // for Admins
        <div>
          <p className="text-center text-gray-800 font-semibold">
            Welcome Admin {user?.displayName}!
          </p>
        </div>
      ) : (
        // for tour guide
        <div>
          <p className="text-center text-gray-800 font-semibold">
            Welcome Tour Guide {user?.displayName}!
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;
