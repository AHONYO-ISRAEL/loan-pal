import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '../hooks/useColorScheme';
import { Provider } from 'react-redux';
import store, { persistor } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View } from 'react-native';

const AppContent = () => {
    const colorScheme = useColorScheme();

    const [loaded] = useFonts({
        QLight: require('../assets/fonts/Quicksand-Light.ttf'),
        QRegular: require('../assets/fonts/Quicksand-Regular.ttf'),
        QMedium: require('../assets/fonts/Quicksand-Medium.ttf'),
        QSemiBold: require('../assets/fonts/Quicksand-SemiBold.ttf'),
        QBold: require('../assets/fonts/Quicksand-Bold.ttf'),
    });

    useEffect(() => {
        SplashScreen.preventAutoHideAsync();
    }, []);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return <View style={{ flex: 1, backgroundColor: '#fff' }} />;
    }

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Slot />
                <StatusBar style="auto" />
            </GestureHandlerRootView>
        </ThemeProvider>
    );
};

const RootLayout = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <AppContent />
            </PersistGate>
        </Provider>
    );
};

export default RootLayout;
