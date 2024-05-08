import { useMutation } from "@tanstack/react-query";
import { LoginFormValues } from "./forms/login";
import { axiosInstance } from "@/lib/axios";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (body: LoginFormValues) => {
      return await axiosInstance.post("/auth/login", body);
    },
  });
};
