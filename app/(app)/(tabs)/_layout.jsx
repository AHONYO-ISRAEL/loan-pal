import { Tabs } from "expo-router";
import { useColorScheme, useWindowDimensions } from "react-native";
import { Colors } from "../../../constants/Colors";
import TabBarIcon from "../../../components/navigation/TabBarIcon";

const TabsLayout = () => {
  const colorScheme = useColorScheme();
  const { width } = useWindowDimensions()

  return (
    <Tabs
      screenOptions={{
        title: "",
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarShowLabel: false, // hide label if you want just icons
        tabBarStyle: {
          height: 70,
          elevation: 2,
          shadowColor: "#000",
          shadowOffset: { width: 2, height: 1 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          backgroundColor: Colors[colorScheme ?? "light"].background,
          marginBottom: 30,
          borderRadius: 50,
          paddingBottom: 10,
          paddingTop: 10,
          width: 0.9 * width,
          alignItems: "center",
          justifyContent: "center",
          alignSelf:'center',

        },
        tabBarIconStyle: {
          alignItems: "center",
          justifyContent: "center",
          height: 40,
          width: 40,
        },
        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >

      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          headerTitle: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="view-dashboard-outline"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="loans"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="bank-outline"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="home-outline"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="account-group-outline"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="cog-outline"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
