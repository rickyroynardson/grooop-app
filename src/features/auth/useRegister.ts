import { useMutation } from "@tanstack/react-query";
import { RegisterFormValues } from "./forms/register";
import { axiosInstance } from "@/lib/axios";

export const useRegister = () => {
  return useMutation({
    mutationFn: async (body: RegisterFormValues) => {
      return await axiosInstance.post("/auth/register", body);
    },
  });
};
