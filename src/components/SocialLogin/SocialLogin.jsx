import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result) => {
      console.log(result.user);
      navigate("/");
    });
  };

  return (
    <div className="p-8">
      <div onClick={handleGoogleSignIn} className="flex justify-center items-center space-x-4 border m-4 p-3 border-gray-300 rounded cursor-pointer">
        <FcGoogle size={36} />
        <p className="text-lg">Google</p>
      </div>
    </div>
  );
};

export default SocialLogin;
