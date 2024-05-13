import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useResendVerification = () => {
  return useMutation({
    mutationFn: async () => {
      return await axiosInstance.post("/auth/verification");
    },
  });
};
