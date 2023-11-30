
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaInfoCircle, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const WishList = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const { data: wishList = [] } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: async () => {
      console.log("Making request with email:", user?.email);
      const res = await axiosSecure.get(`/wishlists?email=${user.email}`);
      return res.data;
    },
  });
  

  const handleDelete = async (wishlistId) => {
    await axiosSecure.delete(`/wishlists/${wishlistId}`);
    queryClient.invalidateQueries("wishlist");
  };

  return (
    <div className="bg-base-300 shadow-lg text-black p-6">
      <h1 className="text-2xl font-semibold mb-4 text-end">
        Your Wishlist {wishList.length}
      </h1>
      {wishList && wishList.length > 0 ? (
        <div className="table-container">
          <table className="table">
            <thead className="">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Trip Title</th>
                <th>Tour Type</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishList.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                          <img src={item.image} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.tripTitle}</td>
                  <td>{item.tourType}</td>
                  <td>${item.price}</td>
                  <td className="space-x-4">
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(item._id)}
                    >
                      <FaTrash />
                    </button>
                    <Link
                      className="btn btn-details"
                      to={`/package/${item._id}`}
                    >
                      <FaInfoCircle />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="empty-message text-center">No items in the wishlist.</p>
      )}
    </div>
  );
};

export default WishList;
