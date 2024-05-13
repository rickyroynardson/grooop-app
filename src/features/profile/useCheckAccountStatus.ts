import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useCheckAccountStatus = () => {
  return useQuery({
    queryKey: ["checkAccountStatus"],
    queryFn: async () => {
      return await axiosInstance.get("/user/me");
    },
  });
};
