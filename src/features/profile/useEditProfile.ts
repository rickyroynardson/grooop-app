import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { EditProfileFormValues } from "./forms/edit-profile";

export const useEditProfile = () => {
  return useMutation({
    mutationFn: async (body: EditProfileFormValues) => {
      return await axiosInstance.patch("/user/me", body);
    },
  });
};
