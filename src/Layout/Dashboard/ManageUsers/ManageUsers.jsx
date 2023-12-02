import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`
        },
      });
      return res.data;
    },
  });
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${user.name} is admin now`);
      }
    });
  };
  console.log(users);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl text-black font-bold">Manage Users</h2>
        <div className="text-gray-600">
          <span className="mr-2">Total Users:</span>
          <span className="text-2xl font-bold">{users.length}</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-black border border-gray-200">
          <thead className="bg-black">
            <tr>
              <th className="py-2 px-4 border-b">No</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="text-center">
                <td className="py-2 px-4 border-b">#{index + 1}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                {user.role === "admin" ? (
                  <td className="py-2 px-4 border-b">Admin</td>
                ) : (
                  <td className="py-2 px-4 border-b">Tourist</td>
                )}
                <td className="py-2 px-4 border-b">
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      className={`bg-blue-500 text-white px-2 py-1 rounded ${
                        user.role === "admin"
                          ? "bg-gray-400 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() => handleMakeAdmin(user)}
                      disabled={user.role === "admin"}
                    >
                      Make Admin
                    </button>
                    <button
                      className={`bg-blue-500 text-white px-2 py-1 rounded ${
                        user.role === "admin"
                          ? "bg-gray-400 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() => handleMakeTourGuide(user)}
                      disabled={user.role === "admin"}
                    >
                      Make Tour Guide
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
