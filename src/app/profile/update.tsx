import { EditProfileForm } from "@/features/profile/components";
import {
  EditProfileFormValues,
  editProfileFormSchema,
} from "@/features/profile/forms/edit-profile";
import { useEditProfile } from "@/features/profile/useEditProfile";
import { useStore } from "@/store";
import { ScrollView } from "@gluestack-ui/themed";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { FormProvider, useForm } from "react-hook-form";
import Toast from "react-native-toast-message";

const ProfileUpdateScreen = () => {
  const { user, onProfileUpdate } = useStore();
  const { mutateAsync, isPending } = useEditProfile();

  const formMethods = useForm<EditProfileFormValues>({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
    },
    resolver: zodResolver(editProfileFormSchema),
    mode: "onChange",
  });

  const onEditProfileSubmit = async (values: EditProfileFormValues) => {
    try {
      const response = await mutateAsync(values);
      Toast.show({
        type: "success",
        text1: "Success",
        text2: response.data.message,
      });
      onProfileUpdate(response.data.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        Toast.show({
          type: "error",
          text1: "Update failed",
          text2: `Something went wrong, ${error.response?.data.message}`,
        });
      }
      return;
    }
  };

  return (
    <ScrollView p="$4">
      <FormProvider {...formMethods}>
        <EditProfileForm
          onEditProfileSubmit={formMethods.handleSubmit(onEditProfileSubmit)}
        />
      </FormProvider>
    </ScrollView>
  );
};

export default ProfileUpdateScreen;
