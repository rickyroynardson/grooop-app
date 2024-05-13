import { SafeAreaView } from "react-native-safe-area-context";
import {
  Box,
  Button,
  ButtonSpinner,
  ButtonText,
  Center,
  Heading,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import {
  useCheckAccountStatus,
  useResendVerification,
} from "@/features/profile";
import Toast from "react-native-toast-message";
import { AxiosError } from "axios";
import { useStore } from "@/store";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import moment from "moment";

const ProfileVerificationScreen = () => {
  const { user, cooldown, onProfileUpdate, onSetCooldown } = useStore();
  const [onCooldown, setOnCooldown] = useState(false);
  const { mutateAsync: resendMutate, isPending: resendMutateIsPending } =
    useResendVerification();
  const {
    refetch: refetchAccountStatus,
    isRefetching: refetchingAccountStatus,
  } = useCheckAccountStatus();

  const onResendVerification = async () => {
    try {
      const response = await resendMutate();
      onSetCooldown(moment().add(5, "m").toISOString());
      Toast.show({
        type: "success",
        text1: "Success",
        text2: response.data.message,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        Toast.show({
          type: "error",
          text1: "Send verification email failed",
          text2: `Something went wrong, ${error.response?.data.message}`,
        });
      }
      return;
    }
  };

  const onCheckAccountStatus = async () => {
    const response = await refetchAccountStatus();
    if (response.data?.data.data.emailVerifiedAt) {
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Account email verify success",
      });
      onProfileUpdate(response.data.data.data);
    } else {
      Toast.show({
        type: "info",
        text1: "Info",
        text2: "Account email not verified yet",
      });
    }
  };

  useEffect(() => {
    if (user?.emailVerifiedAt) {
      router.replace("/profile");
    }
  }, [user]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      if (now.isBefore(moment(cooldown))) {
        setOnCooldown(true);
      } else {
        setOnCooldown(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [cooldown]);

  return (
    <SafeAreaView>
      <Center h="$full" p="$4">
        <Box bg="$white" w="$full" p="$4">
          <Heading color="$trueGray900">Profile Verification</Heading>
          <Text textAlign="justify" color="$trueGray600">
            Access the verification link from your email. Then check account
            verification status below.
          </Text>
          <VStack space="xs" mt="$4">
            {onCooldown && (
              <Text textAlign="right" fontSize="$sm">
                Try again on{" "}
                {moment
                  .utc(moment(cooldown).diff(moment()))
                  .format("mm[m] ss[s]")}
              </Text>
            )}
            <Button
              size="sm"
              variant="solid"
              bg="$blue600"
              $active-bg="$blue800"
              onPress={onResendVerification}
              isDisabled={resendMutateIsPending || onCooldown}
            >
              <ButtonText>Send verification email</ButtonText>
            </Button>
            <Button
              size="sm"
              variant="solid"
              bg="$trueGray400"
              $active-bg="$trueGray600"
              onPress={onCheckAccountStatus}
              isDisabled={refetchingAccountStatus}
            >
              <ButtonText>Check account status</ButtonText>
            </Button>
          </VStack>
        </Box>
      </Center>
    </SafeAreaView>
  );
};

export default ProfileVerificationScreen;
