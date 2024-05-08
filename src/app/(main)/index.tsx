import { useStore } from "@/store";
import { Box, Text } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { user } = useStore();

  return (
    <SafeAreaView>
      <Box p="$4">
        <Text size="lg" fontWeight="$semibold" color="$trueGray900">
          Welcome back{user?.firstName && `, ${user.firstName}`}
        </Text>
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
