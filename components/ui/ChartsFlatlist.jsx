import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    useColorScheme,
    useWindowDimensions,
    View,
} from "react-native";
import { BlurView } from "expo-blur";
import { returnColor } from "../../hooks/utils/functions";
import { FONT, SIZES } from "../../constants/Thems";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
const ChartsFlatList = ({ charts }) => {
    const { width } = useWindowDimensions();
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";

    const CARD_WIDTH = width * 0.8;
    const SPACING = width * 0.05;

    const renderItem = ({ item }) => {
        return (
            <View style={{  width: CARD_WIDTH / 2 , height:90,  }}>
                <BlurView
                    intensity={70}
                    tint={isDark ? "dark" : "light"}
                    style={styles.card(CARD_WIDTH, isDark)}
                >
                    <View style={styles.iconContainer(isDark)}>
                        <MaterialCommunityIcons
                            name={item.icon}
                            size={SIZES.large}
                            color={returnColor("primary", colorScheme)}
                        />
                    </View>
                    <Text style={styles.titleText(colorScheme)}>
                        {item.name}
                    </Text>


                </BlurView>
            </View>
        );
    };

    return (
        <FlatList
            data={charts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH + SPACING}
            decelerationRate="fast"
            style={{
               
                maxHeight:90
            }}
            contentContainerStyle={{
                paddingHorizontal: SPACING / 2,
                gap: 20,
            }}
        />
    );
};

const styles = StyleSheet.create({
    card: (width, isDark) => ({
        height: 80,
        width:'auto',
        backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
        borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
        borderWidth: 1,
        borderRadius: 20,
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        shadowColor: isDark ? "#ffffff" : "#000",
        gap:5

    }),
    titleText: (colorScheme) => ({
        color: returnColor("text", colorScheme),
        fontSize: SIZES.small,
        fontWeight: "600",
        fontFamily: FONT.medium,
    }),
    iconContainer: (isDark) => ({
        backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
        borderRadius: 12,
        padding: 8,
    }),
});

export default ChartsFlatList;
