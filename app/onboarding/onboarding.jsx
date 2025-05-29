import React, { useRef, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, StyleSheet, useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, Stack } from "expo-router";
import { ThemedView } from "../../components/ui/ThemedView";
import { Colors } from "../../constants/Colors";
import { returnColor } from "../../hooks/utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { setHasSeenOnboarding } from "../../store/utilsSlice";
const { width, height } = Dimensions.get("window");

const
    slides = [
        {
            id: "1",
            title: "Welcome to Done-ish!",
            description: "A chill space to track your wins — big, small, or ‘eh, close enough.",
            image: require("../../assets/images/board1.png"),
        },
        {
            id: "2",
            title: "Stay Organized",
            description: "Your personalized learning adventure awaits. Choose your interests and begin your journey today!",
            image: require("../../assets/images/board2.png"),

        },
        {
            id: "3",
            title: "Get Started",
            description: "Unlock your full potential with a personalized learning journey designed just for you.",
            image: require("../../assets/images/board3.png"),

        },
    ];

const OnBoarding = ({ navigation }) => {
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const colorScheme = useColorScheme();
    const [currentColor, setCurrentColor] = useState('');
    const dispatch = useDispatch();

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
            setCurrentIndex(currentIndex + 1);
        } else {
            completeOnboarding();
        }
    };

    const completeOnboarding = async () => {
        dispatch(setHasSeenOnboarding(true));
        console.log('completeOnboarding', onboarding)
        router.replace('/')
    };

    const onboarding = useSelector((state) => state.utils.hasSeenOnboarding)
    console.log(onboarding)

    const renderItem = ({ item }) => (
        <View style={styles.slide}>
            <Stack.Screen options={{
                headerShown: false
            }} />
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description(colorScheme)}>{item.description}</Text>

        </View>
    );


    return (
        <ThemedView style={styles.container(currentColor, currentIndex, colorScheme)}>
            <FlatList
                ref={flatListRef}
                data={slides}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                /*   scrollEnabled={currentIndex !== 1}
                   bounces={currentIndex === 1}*/
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                    const index = Math.round(event.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(index);
                }}
            />

            {/* Dots Indicator */}
            <View style={styles.dotsContainer}>
                {slides.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentIndex === index ? styles.activeDot : {},
                        ]}
                    />
                ))}
            </View>

            {/* Navigation Buttons */}
            <View style={styles.buttonContainer}>
                {currentIndex < slides.length - 1 ? (
                    <TouchableOpacity onPress={handleNext} style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={completeOnboarding} style={styles.button}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                )}
            </View>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: (_currentColor, _currentIndex, _colorScheme) => ({
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        // backgroundColor: _currentIndex !== 0 && 'transparent',
    }),
    slide: {
        width,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: width * 0.8,
        height: height * 0.5,
        resizeMode: "contain",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
    },
    description: (colorScheme) => ({
        fontSize: 16,
        textAlign: "center",
        marginHorizontal: 40,
        marginTop: 10,
        color: returnColor('text', colorScheme),
    }),
    dotsContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#ccc",
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: "#FFC100",
        width: 16,
    },
    buttonContainer: {
        position: "absolute",
        bottom: 50,
        width: "100%",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#FFC100",
        padding: 15,
        width: "80%",
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default OnBoarding;