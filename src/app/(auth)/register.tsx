import { useRegister } from "@/features/auth";
import { RegisterForm } from "@/features/auth/components";
import {
  RegisterFormValues,
  registerFormSchema,
} from "@/features/auth/forms/register";
import {
  Box,
  Center,
  HStack,
  Heading,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { Link, router } from "expo-router";
import { FormProvider, useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

const RegisterScreen = () => {
  const { mutateAsync, isPending } = useRegister();
  const formMethods = useForm<RegisterFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });

  const onRegisterSubmit = async (values: RegisterFormValues) => {
    try {
      const response = await mutateAsync(values);
      Toast.show({
        type: "success",
        text1: "Success",
        text2: response.data.message,
      });
      router.replace("/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        Toast.show({
          type: "error",
          text1: "Register failed",
          text2: `Something went wrong, ${error.response?.data.message}`,
        });
      }
      return;
    }
  };

  return (
    <SafeAreaView>
      <Center h="$full">
        <Box w="90%">
          <Heading color="$trueGray900">Sign up</Heading>
          <Heading color="$trueGray900" size="sm" fontWeight="$medium">
            Register new account to continue!
          </Heading>
          <VStack gap="$5" mt="$5">
            <FormProvider {...formMethods}>
              <RegisterForm
                onRegisterSubmit={formMethods.handleSubmit(onRegisterSubmit)}
                isPending={isPending}
              />
            </FormProvider>
            <HStack space="xs" justifyContent="center">
              <Text color="$trueGray600" size="sm">
                Already have an account?
              </Text>
              <Link href="/login" replace asChild>
                <Text color="$trueGray600" size="sm" fontWeight="$medium">
                  Sign in
                </Text>
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </SafeAreaView>
  );
};

export default RegisterScreen;
