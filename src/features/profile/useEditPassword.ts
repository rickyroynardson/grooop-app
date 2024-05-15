import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { EditPasswordFormValues } from "./forms/edit-password";

export const useEditPassword = () => {
  return useMutation({
    mutationFn: async (body: EditPasswordFormValues) => {
      return await axiosInstance.patch("/user/me/password", body);
    },
  });
};
