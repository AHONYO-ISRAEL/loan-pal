import React from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FONT, SIZES } from "../../constants/Thems";

const SlidingCards = ({ cards }) => {
  const { width } = useWindowDimensions();
  const CARD_WIDTH = width * 0.9;
  const SPACING = width * 0.5;

  return (
    <Carousel
      width={width}
      height={180}
      data={cards}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxAdjacentItemScale: 0.6,
      }}
      scrollAnimationDuration={500}

      pagingEnabled
      renderItem={({ item }) => (
        <LinearGradient
          colors={item.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.card, { width: CARD_WIDTH }]}
        >
          <View style={styles.header}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.value}>XOF{item.value}</Text>
          </View>
          {item.description && <Text style={styles.description}>{item.description}</Text>}
          <View style={styles.footer}>
            <View style={styles.avatars}>
              {item.avatars.map((uri, idx) => (
                <Image
                  key={idx}
                  source={{ uri }}
                  style={[styles.avatar, { marginLeft: idx === 0 ? 0 : -10 }]}
                />
              ))}
              <View style={styles.plusCircle}>
                <MaterialCommunityIcons name="plus" size={16} color="#fff" />
              </View>
            </View>
          </View>
        </LinearGradient>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 20,
    height: 180,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: "#fff",
    fontWeight: "600",
  },
  value: {
    fontSize: SIZES.xLarge,
    fontWeight: "700",
    color: "#fff",
    fontFamily: FONT.bold
  },
  description: {
    fontSize: SIZES.medium,
    color: "#fefefe",
    marginTop: 4,
    fontFamily: FONT.regular
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatars: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#fff",
  },
  plusCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#ffffff33",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -10,
  },
  visa: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 2,
  },
});

export default SlidingCards;
