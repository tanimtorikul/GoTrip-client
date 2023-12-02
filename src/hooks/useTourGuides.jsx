import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTourGuides = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isTourGuides, isPending: isTourGuidesLoading } = useQuery({
    queryKey: [user?.email, "isTourGuides"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/tourguide/${user.email}`);
      console.log(res.data);
      return res.data?.tourguide;
    },
  });
  return [isTourGuides, isTourGuidesLoading];
};

export default useTourGuides;
