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
import { LoginForm } from "@/features/components/LoginForm";

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <Center h={"$full"}>
        <Box w="90%">
          <Heading color="$trueGray900">Welcome</Heading>
          <Heading color="$trueGray900" size="sm" fontWeight="$medium">
            Sign in to continue!
          </Heading>
          <VStack gap="$5" mt="$5">
            <LoginForm />
            <HStack space="xs" justifyContent="center">
              <Text color="$trueGray600" size="sm">
                I&apos;am a new user.
              </Text>
              <Link href="/login" replace asChild>
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
