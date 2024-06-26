import {
  Box,
  Center,
  HStack,
  Heading,
  VStack,
  Text,
} from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginForm } from "@/features/auth/components/LoginForm";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, loginFormSchema } from "@/features/auth/forms/login";
import { useLogin } from "@/features/auth";
import { AxiosError } from "axios";
import { useStore } from "@/store";
import Toast from "react-native-toast-message";

const LoginScreen = () => {
  const { onAuthSuccess } = useStore();
  const { mutateAsync, isPending } = useLogin();
  const formMethods = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
    mode: "onChange",
  });

  const onLoginSubmit = async (values: LoginFormValues) => {
    try {
      const response = await mutateAsync(values);
      Toast.show({
        type: "success",
        text1: "Success",
        text2: response.data.message,
      });
      onAuthSuccess(response.data.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        Toast.show({
          type: "error",
          text1: "Login failed",
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
          <Heading color="$trueGray900">Welcome</Heading>
          <Heading color="$trueGray900" size="sm" fontWeight="$medium">
            Sign in to continue!
          </Heading>
          <VStack gap="$5" mt="$5">
            <FormProvider {...formMethods}>
              <LoginForm
                onLoginSubmit={formMethods.handleSubmit(onLoginSubmit)}
                isPending={isPending}
              />
            </FormProvider>
            <HStack space="xs" justifyContent="center">
              <Text color="$trueGray600" size="sm">
                I&apos;am a new user.
              </Text>
              <Link href="/register" replace asChild>
                <Text color="$trueGray600" size="sm" fontWeight="$medium">
                  Make an account
                </Text>
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </SafeAreaView>
  );
};

export default LoginScreen;
