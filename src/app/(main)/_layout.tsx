import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useToken } from "@gluestack-style/react";

const MainLayout = () => {
  const [primary, activeColor, inactiveColor]: string[] = [
    useToken("colors", "trueGray900"),
    useToken("colors", "blue500"),
    useToken("colors", "secondary400"),
  ];

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              size={28}
              name="home"
              color={focused ? activeColor : inactiveColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerTitle: "My Profile",
          headerTitleStyle: {
            color: primary,
          },
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              size={28}
              name="user"
              color={focused ? activeColor : inactiveColor}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default MainLayout;
