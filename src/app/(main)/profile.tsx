import { useStore } from "@/store";
import {
  Badge,
  BadgeText,
  Box,
  Button,
  ButtonText,
  HStack,
  Heading,
  LinkText,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Link } from "expo-router";

const ProfileScreen = () => {
  const { user, onLogout, onSetCooldown } = useStore();

  const handleLogout = () => {
    onSetCooldown("");
    onLogout();
  };

  return (
    <ScrollView p="$4">
      <VStack space="lg">
        <Box bg="$white" p="$4" borderRadius="$md">
          {(user?.firstName || user?.lastName) && (
            <Heading size="lg" color="$trueGray900">
              {user?.firstName} {user?.lastName}
            </Heading>
          )}
          <Text color="$trueGray600">{user?.email}</Text>
          <HStack gap="$2" mt="$3">
            {user?.emailVerifiedAt ? (
              <Badge borderRadius="$md" action="success">
                <BadgeText>Verified</BadgeText>
              </Badge>
            ) : (
              <>
                <Badge borderRadius="$md" action="muted">
                  <BadgeText>Unverified</BadgeText>
                </Badge>
                <Link href="/profile/verification">
                  <LinkText fontSize="$sm">Verify email</LinkText>
                </Link>
              </>
            )}
          </HStack>
        </Box>
        <Link href="/profile/update" asChild>
          <Button variant="solid" bg="$trueGray400" $active-bg="$trueGray600">
            <ButtonText>Update profile</ButtonText>
          </Button>
        </Link>
        <Link href="/profile/update-password" asChild>
          <Button variant="solid" bg="$trueGray400" $active-bg="$trueGray600">
            <ButtonText>Update Password</ButtonText>
          </Button>
        </Link>
        <Button action="negative" onPress={handleLogout}>
          <ButtonText>Sign out</ButtonText>
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default ProfileScreen;
