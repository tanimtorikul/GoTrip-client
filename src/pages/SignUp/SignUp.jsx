import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="bg-[#E5F0FD] flex justify-center items-center py-4 md:py-0 min-h-screen">
      <Helmet>
                <title>SignUp | GoTrip -Travel Agency</title>
            </Helmet>
      <div className="flex flex-col md:max-w-2xl rounded-md px-10 py-2 bg-white shadow-xl text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-2xl md:text-5xl font-bold">Sign Up</h1>
          <p className="md:text-lg text-gray-400">
            Create an account to get started
          </p>
        </div>
        <form
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="userName" className="block mb-4 text-lg">
                User Name
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                required
                placeholder="Enter Your User Name"
                className="w-full px-4 py-3 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-4 text-lg">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-4 py-3 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-lg mb-4">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-4 py-3 border rounded-md border-gray-300  bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#3554D1] w-full rounded-md py-4 text-white md:text-lg"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-2">
          <div className="flex-1 h-px sm:w-20 bg-gray-700"></div>
          <p className="px-4 md:text-lg text-gray-400">Or Continue With</p>
          <div className="flex-1 h-px sm:w-20 bg-gray-700"></div>
        </div>
        <div className="flex justify-center items-center space-x-4 border m-4 p-3 border-gray-300 rounded cursor-pointer">
          <FcGoogle size={36} />
          <p className="text-lg">Google</p>
        </div>
        <p className="px-8 md:text-lg text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-indigo-600 text-gray-600"
          >
            Log in
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Signup;
