import useAuth from "../../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="p-4 border rounded-md shadow-md bg-black">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
      <div className="flex items-center space-x-6">
        <img
          src={user?.photoURL}
          alt="User Avatar"
          className="w-24 h-24 rounded-full border-4 border-white"
        />
        <div>
          <p className="text-2xl font-semibold">{user?.displayName}</p>
          <p className="text-gray-300">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
