import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AssignedTour = () => {
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

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Assigned Tours</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Package Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tourist Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tour Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tour Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {booking.packageName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {booking.touristName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {booking.tourDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {booking.tourPrice}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {booking.status === "In Review" && (
                  <>
                    <button className="bg-green-500 text-white px-4 py-2 mr-2 rounded">
                      Accept
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded">
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignedTour;
