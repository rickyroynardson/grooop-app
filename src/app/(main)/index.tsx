import { Box, Text } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Box p="$4">
        <Text size="lg" fontWeight="$semibold" color="$trueGray900">
          Welcome back, Ricky
        </Text>
        <Link href="/login">login</Link>
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
