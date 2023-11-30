import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useaxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPackages = () => {
  const { user } = useAuth();
  const axiosPublic = useaxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const images = [];

    for (let i = 0; i < data.images.length; i++) {
      const formData = new FormData();
      formData.append("image", data.images[i]);

      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      console.log(res.data);

      if (res.data.success) {
        console.log(res.data);

        images.push(res.data.data.display_url);
      }
    }

    const packageInfo = {
      tripTitle: data.tripTitle,
      tourType: data.tourType,
      price: data.price,
      dayOnePlan: data.day1,
      dayTwoPlan: data.day2,
      description: data.description,
      images: images,
    };

    console.log("Package Info:", packageInfo);

    const packageRes = await axiosSecure.post("/packages", packageInfo);

    console.log("Package Response:", packageRes.data);

    if (packageRes.data.insertedId) {
      toast.success("Package added successfully!");
    }
  };

  return (
    <div className="flex justify-center items-center py-8 md:py-2">
      <Helmet>
        <title>Add Package | GoTrip - Travel Agency</title>
      </Helmet>
      <div className="flex flex-col w-full rounded-md px-6 bg-white shadow-lg text-gray-900">
        <div className="mb-4 text-center">
          <h1 className="my-2 text-2xl md:text-4xl font-bold">
            Add a New Package
          </h1>
          {user && (
            <p className="text-lg text-gray-500">
              Welcome, {user.displayName}! Add a new package to your offerings.
            </p>
          )}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-4"
        >
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="images" className="block mb-4 text-lg">
                Images
              </label>
              <input
                type="file"
                {...register("images", { required: true })}
                name="images"
                multiple
                accept="image/*"
                className="w-full px-4 py-2 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
              />
              {errors.images && (
                <span className="text-red-500">Images are required</span>
              )}
            </div>

            {/* Tour Type */}
            <div>
              <label htmlFor="tourType" className="block  mb-4 text-lg">
                Tour Type
              </label>
              <select
                {...register("tourType", { required: true })}
                name="tourType"
                className="w-full px-4 py-3 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
              >
                <option value="" disabled hidden>
                  Select Tour Type
                </option>
                <option value="Adventure">City</option>
                <option value="Cultural">TeaGardens</option>
                <option value="Beach">SwampForest</option>
                <option value="Beach">Beach</option>
                <option value="Beach">Adventure</option>
                <option value="Beach">Nature</option>
                <option value="Beach">Historical</option>
                <option value="Beach">Island</option>
              </select>
              {errors.tourType && (
                <span className="text-red-500">Tour Type is required</span>
              )}
            </div>
          </div>

          {/* Trip Title and Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Trip Title */}
            <div>
              <label htmlFor="tripTitle" className="block mb-4 text-lg">
                Trip Title
              </label>
              <input
                type="text"
                {...register("tripTitle", { required: true })}
                name="tripTitle"
                required
                placeholder="Enter Trip Title"
                className="w-full px-4 py-3 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
              />
              {errors.tripTitle && (
                <span className="text-red-500">Trip Title is required</span>
              )}
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="block mb-4 text-lg">
                Price
              </label>
              <input
                type="number"
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true,
                  min: 0,
                })}
                name="price"
                required
                placeholder="Enter Price"
                onInput={(e) => {
                  if (e.target.value < 0) {
                    e.target.value = 0;
                  }
                }}
                className="w-full px-4 py-3 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
              />
              {errors.price && (
                <span className="text-red-500">{errors.price.message}</span>
              )}

              {errors.price && (
                <span className="text-red-500">{errors.price.message}</span>
              )}

              {errors.price && (
                <span className="text-red-500">{errors.price.message}</span>
              )}
            </div>
          </div>

          {/* Day Plans */}
          <div>
            <label htmlFor="day1" className="block mb-4 text-lg">
              Day 1 Plan
            </label>
            <textarea
              {...register("day1", { required: true })}
              name="day1"
              rows="3"
              placeholder="Enter Day 1 Plan"
              className="w-full px-4 py-3 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
            ></textarea>
            {errors.day1 && (
              <span className="text-red-500">Day 1 Plan is required</span>
            )}

            <label htmlFor="day2" className="block mb-4 text-lg">
              Day 2 Plan
            </label>
            <textarea
              {...register("day2", { required: true })}
              name="day2"
              rows="3"
              placeholder="Enter Day 2 Plan"
              className="w-full px-4 py-3 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
            ></textarea>
            {errors.day2 && (
              <span className="text-red-500">Day 2 Plan is required</span>
            )}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block mb-4 text-lg">
              Description
            </label>
            <textarea
              {...register("description", { required: true })}
              name="description"
              rows="3"
              placeholder="Enter Package Description"
              className="w-full px-4 py-3 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
            ></textarea>
            {errors.description && (
              <span className="text-red-500">Description is required</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-6 w-1/2 mx-auto">
            <button
              type="submit"
              className="bg-[#3554D1] w-full  rounded-md py-3 text-white text-lg hover:bg-blue-600 transition duration-300"
            >
              Add Package
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-500">
          Back to{" "}
          <Link
            to="/"
            className="hover:underline hover:text-indigo-600 text-gray-600"
          >
            Home
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default AddPackages;
