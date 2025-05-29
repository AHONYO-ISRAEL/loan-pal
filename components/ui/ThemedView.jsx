import { useColorScheme, View, StyleSheet, Image } from 'react-native';
import React from 'react';
import { returnColor } from '../../hooks/utils/functions';

export function ThemedView({ style, children, ...otherProps }) {
    const colorScheme = useColorScheme();
    const backgroundColor =
        colorScheme === 'dark' ? 'rgba(18,18,18,0.6)' : returnColor('container', colorScheme);

    return (
        <View style={[styles.container, { backgroundColor }, style]} {...otherProps}>
            {/* Noise overlay */}

            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        overflow: 'hidden',
        backdropFilter: 'blur(10px)', // for web support, doesn't work in native
    },
    noise: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.08,
    },
});
