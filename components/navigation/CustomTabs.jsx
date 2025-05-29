import { Dimensions, StyleSheet, useColorScheme, View, Animated } from "react-native";
import { BlurView } from "expo-blur";
import { useEffect, useRef, useState } from "react";
import TabButton from "./TabButton";
import { router } from "expo-router";

const CustomTabs = ({ setLoginMethod, setOpenActionPane, actionPane, position }) => {
  const { width, height } = Dimensions.get("window");
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const [isActiveIndex, setIsActiveIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false); // Start hidden

  const fadeAnim = useRef(new Animated.Value(0)).current; // Start transparent

  const navigationOptions = [
    { id: 1, title: "Dashboard", icon: "view-dashboard-outline", code: "/dashboard" },
    { id: 2, title: "Loans", icon: "bank-outline", code: "/loans" },
    { id: 3, title: "Home", icon: "home-outline", code: "/" },
    { id: 4, title: "Contacts", icon: "account-group-outline", code: "/contacts" },
  ];

  const getTabByPosition = (pos) => {
    switch (pos) {
      case "Q2": return { code: "/dashboard", id: 1 };
      case "Q1": return { code: "/loans", id: 2 };
      case "Q3": return { code: "/", id: 3 };
      case "Q4": return { code: "/contacts", id: 4 };
      default: return null;
    }
  };

  useEffect(() => {
    if (!position || position === 0) {
      setOpenActionPane(false);
      return;
    }

    const tab = getTabByPosition(position);
    if (!tab) return;

    setIsActiveIndex(tab.id);
    setIsVisible(true);

    // Fade in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      // After fade-in, redirect
      router.replace(tab.code);

      // Then fade out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setIsVisible(false); // Hide completely after fade out
      });
    });
  }, [position]);

  const activeMethod = navigationOptions.find((mx) => mx.id === isActiveIndex) || navigationOptions[0];

  useEffect(() => {
    setLoginMethod(activeMethod.code);
  }, [activeMethod]);

  if (!isVisible) return null;

  return (
    <Animated.View
      style={[
        styles.container(width, height, isDark),
        { opacity: fadeAnim },
      ]}
    >
      <BlurView intensity={70} tint={isDark ? "dark" : "light"} style={StyleSheet.absoluteFill} />
      {actionPane ? (
        <View style={styles.grid}>
          {navigationOptions.map((method) => (
            <TabButton
              key={method.id}
              label={method.title}
              icon={method.icon}
              style={styles.buttonItem}
              active={isActiveIndex === method.id}
              onClick={() => {}}
            />
          ))}
        </View>
      ) : (
        <TabButton
          key={activeMethod.id}
          label={activeMethod.title}
          icon={activeMethod.icon}
          style={{ width: "100%" }}
          active={true}
        />
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: (_width, _height, _isDark) => ({
    width: 0.9 * _width,
    backgroundColor: _isDark ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)",
    borderColor: _isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
    borderWidth: 1,
    position: "absolute",
    top: 30,
    alignSelf: "center",
    borderRadius: 20,
    padding: 10,
    zIndex: 999,
    overflow: "hidden",
  }),
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  buttonItem: {
    width: "48%",
    marginVertical: 5,
  },
});

export default CustomTabs;
