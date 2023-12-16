import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password).then((result) => {
      const user = result.user;

      toast.success("Logged in successfully!");
      navigate(location?.state ? location.state : "/");
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
      toast.error("Invalid email or password. Please try again.");

    });
  };
  return (
    <div className="bg-[#E5F0FD] flex flex-col justify-center items-center py-4 md:py-0 min-h-screen">
      <Helmet>
        <title>Login | GoTrip -Travel Agency</title>
      </Helmet>
      <div className="mb-4 text-center bg-base-100 p-4">
      <p className="text-gray-600">
        Use the following credentials to log in as a admin:
      </p>
      <div className="mt-2">
        <p className="font-semibold">Email: admin@admin.com</p>
        <p className="font-semibold">Password: T@nim017718</p>
      </div>
    </div>
      <div className="flex flex-col md:max-w-2xl rounded-md py-2 px-10 bg-white shadow-xl text-gray-900">
     
        <div className="mb-2 text-center">
          <h1 className="my-2 text-2xl md:text-5xl font-bold">Log In</h1>
          <p className="md:text-lg text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-4 text-lg">
                Email address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-4 py-3 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-lg mb-4">
                  Password
                </label>
              </div>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                autoComplete="new-password"
                required
                placeholder="*******"
                className="w-full px-4 py-3 border rounded-md border-gray-300  bg-gray-200 text-gray-900"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#3554D1] w-full rounded-md py-4 text-white md:text-lg"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-2">
          <div className="flex-1 h-px sm:w-20 bg-gray-700"></div>
          <p className="px-4 md:text-lg text-gray-400">Or Continue With</p>
          <div className="flex-1 h-px sm:w-20 bg-gray-700"></div>
        </div>
        <SocialLogin />
        <p className="px-8 md:text-lg text-center text-gray-400">
          Don&apos;t have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-indigo-600 text-gray-600"
          >
            Sign Up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
