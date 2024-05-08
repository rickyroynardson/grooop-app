import { useStore } from "@/store";
import { Stack, router } from "expo-router";
import { useEffect } from "react";

const AuthLayout = () => {
  const { user } = useStore();

  // redirect if user authenticated
  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [user]);

  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
