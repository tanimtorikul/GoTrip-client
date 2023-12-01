import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const BookingForm = ({ packageDetails, tourGuides }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    // uploading image to the imgbb
    const imageFile = { image: data.touristImage[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });


    if (res.data.success) {
      console.log(data.packageName, user.email );
      //  booking data
      const bookingData = {
        userEmail: user?.email,
        userDisplayName: user?.displayName,
        packageName: data?.packageName,
        image: res.data.data.display_url,
        price: data.price,
        tourDate: data.tourDate,
        tourGuide: data.tourGuide,
      };

      console.log("Booking Data:", bookingData);

      const bookingResponse = await axiosSecure.post("/bookings", bookingData);

      if (bookingResponse.data.success) {
        toast.success("Booking successful!");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[1200px] mx-auto grid grid-cols-2 gap-12 p-6 bg-white shadow-lg rounded-lg"
    >
      {/* Tourist Name */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="touristName"
        >
          Tourist Name
        </label>
        <input
          type="text"
          name="touristName"
          defaultValue={user?.displayName}
          readOnly
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500 transition duration-300"
          {...register("touristName")}
        />
      </div>

      {/* Tourist Email */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="touristEmail"
        >
          Tourist Email
        </label>
        <input
          type="email"
          name="touristEmail"
          defaultValue={user?.email}
          readOnly
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500 transition duration-300"
          {...register("touristEmail")}
        />
      </div>

      {/* Tourist Image */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="touristImage"
        >
          Tourist Image
        </label>
        <input
          type="file"
          name="touristImage"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500 transition duration-300"
          {...register("touristImage")}
        />
      </div>

      {/* Package Name */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="packageName"
        >
          Package Name
        </label>
        <input
          type="text"
          name="packageName"
          readOnly
          defaultValue={packageDetails?.tripTitle}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500 transition duration-300"
          {...register("packageName")}
        />
      </div>

      {/* Price */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="price"
        >
          Price
        </label>
        <input
          type="text"
          name="price"
          readOnly
          defaultValue={packageDetails?.price}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500 transition duration-300"
          {...register("price")}
        />
      </div>

      {/* Tour Date */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tourDate"
        >
          Tour Date
        </label>
        <input
          type="date"
          name="tourDate"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500 transition duration-300"
          {...register("tourDate", { required: "Tour Date is required" })}
        />
        {errors.tourDate && (
          <span className="text-red-500 text-sm">
            {errors.tourDate.message}
          </span>
        )}
      </div>

      {/* Tour Guide Name (Dropdown) */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tourGuide"
        >
          Tour Guide
        </label>
        <select
          name="tourGuide"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500 transition duration-300"
          {...register("tourGuide", { required: "Tour Guide is required" })}
        >
          <option value="" disabled>
            Select a guide
          </option>
          {tourGuides.map((guide) => (
            <option key={guide.id} value={guide.name}>
              {guide.name}
            </option>
          ))}
        </select>
        {errors.tourGuide && (
          <span className="text-red-500 text-sm">
            {errors.tourGuide.message}
          </span>
        )}
      </div>

      {/* Book Now Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-teal-500 text-white py-3 px-6 rounded-full hover:bg-teal-600 transition duration-300"
        >
          Book Now
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
