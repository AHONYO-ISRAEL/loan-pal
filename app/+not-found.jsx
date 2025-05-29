import { Stack } from 'expo-router'
import React from 'react'
import { View, Text, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const NotFound = () => {
    const colorScheme = useColorScheme()

    return (
        <>
            <Stack.Screen options={{ title: 'Oops!' }} />
            <View style={{
                flex:1,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
            }}>
                <Text style={{
                    color: Colors[colorScheme ??  'light'].text
                }}>
                    This page does not exist
                </Text>
            </View>
        </>

    )
}

export default NotFound
