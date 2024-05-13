import { Stack, router } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query";
import { useStore } from "@/store";
import { useEffect } from "react";
import Toast from "react-native-toast-message";

const RootLayout = () => {
  const { user } = useStore();

  // redirect if user not authenticated
  useEffect(() => {
    if (!user) {
      router.replace("login");
    }
  }, [user]);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <GluestackUIProvider config={config}>
          <Stack>
            <Stack.Screen name="(main)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen
              name="profile/verification"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="profile/update"
              options={{ title: "Update Profile", headerBackTitle: "Back" }}
            />
          </Stack>
          <Toast position="bottom" />
        </GluestackUIProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default RootLayout;
