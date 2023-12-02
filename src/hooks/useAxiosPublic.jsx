import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://go-trip-server-seven.vercel.app",
});
const useaxiosPublic = () => {
  return axiosPublic;
};

export default useaxiosPublic;
