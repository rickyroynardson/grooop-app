import { useEditPassword } from "@/features/profile";
import { EditPasswordForm } from "@/features/profile/components/EditPasswordForm";
import {
  EditPasswordFormValues,
  editPasswordFormSchema,
} from "@/features/profile/forms/edit-password";
import { ScrollView } from "@gluestack-ui/themed";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { router } from "expo-router";
import { FormProvider, useForm } from "react-hook-form";
import Toast from "react-native-toast-message";

const ProfileUpdatePasswordScreen = () => {
  const { mutateAsync, isPending } = useEditPassword();

  const formMethods = useForm<EditPasswordFormValues>({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    resolver: zodResolver(editPasswordFormSchema),
    mode: "onChange",
  });

  const onEditPasswordSubmit = async (values: EditPasswordFormValues) => {
    try {
      const response = await mutateAsync(values);
      Toast.show({
        type: "success",
        text1: "Success",
        text2: response.data.message,
      });
      router.navigate("/profile");
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
        <EditPasswordForm
          onEditPasswordSubmit={formMethods.handleSubmit(onEditPasswordSubmit)}
          isPending={isPending}
        />
      </FormProvider>
    </ScrollView>
  );
};

export default ProfileUpdatePasswordScreen;
