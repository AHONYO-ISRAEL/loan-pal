import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    runOnJS,
} from 'react-native-reanimated';

const CONTAINER_SIZE = 60;
const PRESS_BOX_SIZE = 30;
const RADIUS = CONTAINER_SIZE / 2 - PRESS_BOX_SIZE / 2;

const AnalogNavigation = ({ setFocused, setPosition }) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const startX = useSharedValue(0);
    const startY = useSharedValue(0);


    const panGesture = Gesture.Pan()
        .onStart(() => {
            startX.value = translateX.value;
            startY.value = translateY.value;
            runOnJS(setFocused)(true)
        })
        .onUpdate((event) => {
            const newX = startX.value + event.translationX;
            const newY = startY.value + event.translationY;

            // Calculate distance from center
            const distance = Math.sqrt(newX ** 2 + newY ** 2);

            if (distance <= RADIUS) {
                translateX.value = newX;
                translateY.value = newY;
            } else {
                // Clamp position to the edge of the circular boundary
                const angle = Math.atan2(newY, newX);
                translateX.value = Math.cos(angle) * RADIUS;
                translateY.value = Math.sin(angle) * RADIUS;
            }
            let quadrant = '';
            if (translateX.value > 0 && translateY.value < 0) quadrant = 'Q1';
            else if (translateX.value < 0 && translateY.value < 0) quadrant = 'Q2';
            else if (translateX.value < 0 && translateY.value > 0) quadrant = 'Q3';
            else if (translateX.value > 0 && translateY.value > 0) quadrant = 'Q4';
            else quadrant = '0';
            runOnJS(setPosition)(quadrant)
        })
        .onFinalize(() => {
            translateX.value = 0
            translateY.value = 0
            runOnJS(setPosition)(0)
        })
        ;

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
        ],
    }));




    return (
        <View style={styles.container}>
            <GestureDetector gesture={panGesture}>
                <Animated.View style={[styles.pressBox, animatedStyles]} />
            </GestureDetector>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: CONTAINER_SIZE,
        width: CONTAINER_SIZE,
        borderRadius: CONTAINER_SIZE / 2,
        backgroundColor: '#eee',
        overflow: 'hidden',
    },
    pressBox: {
        width: PRESS_BOX_SIZE,
        height: PRESS_BOX_SIZE,
        borderRadius: PRESS_BOX_SIZE / 2,
        backgroundColor: '#000000',
        position: 'absolute',
    },
});

export default AnalogNavigation