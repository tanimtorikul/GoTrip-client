import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Bookings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // Fetch bookings data using React Query
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user?.email}`);
      return res.data;
    },
  });

  const handlePay = (bookingId) => {
    // Implement logic to handle payment
  };

  const handleCancel = (bookingId) => {
    // Implement logic to handle cancellation
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
     <div className="flex justify-between">
     <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
        Your Bookings
      </h1>
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
        Total Bookings {bookings.length}
      </h1>
     </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                Package Name
              </th>
              <th scope="col" className="px-6 py-3">
                Tour Guide Name
              </th>
              <th scope="col" className="px-6 py-3">
                Tour Date
              </th>
              <th scope="col" className="px-6 py-3">
                Tour Price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking._id}
                className="bg-white border-b dark:border-gray-700 dark:0 transition-all"
              >
                <td className="w-4 p-4"></td>
                <td className="px-6 py-4">{booking.packageName}</td>
                <td className="px-6 py-4">{booking.tourGuide}</td>
                <td className="px-6 py-4">{booking.tourDate}</td>
                <td className="px-6 py-4">${booking.price}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block rounded-full ${
                      booking.status === "In Review"
                        ? "bg-yellow-500 text-white"
                        : booking.status === "Accepted"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    } px-3 py-1`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="flex items-center space-x-2 px-6 py-4">
                  {booking.status === "In Review" && (
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded transition-all"
                      onClick={() => handleCancel(booking._id)}
                    >
                      Cancel
                    </button>
                  )}
                  {booking.status === "In Review" && (
                    <button
                      className={`${
                        booking.canPay
                          ? "bg-green-500 text-white"
                          : "bg-gray-400 text-gray-700 cursor-not-allowed"
                      } px-4 py-2 rounded transition-all`}
                      onClick={() => handlePay(booking._id)}
                      disabled={!booking.canPay}
                    >
                      Pay
                    </button>
                  )}
                  <button
                    className="bg-teal-500 text-white px-4 py-2 rounded transition-all"
                    onClick={() => handleApply(booking._id)}
                  >
                    Apply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
