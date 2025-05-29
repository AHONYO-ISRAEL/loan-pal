import { Image, Text, useColorScheme, View } from "react-native";
import { Colors } from '../../../constants/Colors'
import { Stack } from 'expo-router'
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { returnColor } from "../../../hooks/utils/functions";
import { prof } from "../../../constants/Images";
import SlidingCards from "../../../components/ui/SlidingCards";
import { ThemedView } from "../../../components/ui/ThemedView";
import { FONT, SIZES } from "../../../constants/Thems";
import cards from "../../../constants/data/cards";
import ChartsFlatList from "../../../components/ui/ChartsFlatlist";
import charts from "../../../constants/data/charts";
import LoansFlatList from "../../../components/loans/LoansList";
import { loans } from "../../../constants/data/loans";


const Home = () => {
    const colorScheme = useColorScheme()
    return (
        <>
            <Stack.Screen options={{
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor:colorScheme === 'dark' ? 'rgba(18,18,18,0.6)' : returnColor('container', colorScheme)
                },
                headerShown: true, headerLeft: () => (
                    <View style={{
                        marginLeft: 20,
                        marginRight: 10,

                    }}>
                        <Octicons name="apps" size={24} color={returnColor('text', colorScheme)} />
                    </View>
                ), headerRight: () => (
                    <View style={{
                        marginLeft: 10,
                        marginRight: 10,
                        padding: 5,
                    }}>
                        <Image source={require('../../../assets/images/user/prof.png')} style={{
                            width: 35,
                            height: 40
                        }} width={35} height={35} resizeMethod="contain" />
                    </View>
                ),
            }} />
            <ThemedView style={{
                flex: 1,
                alignItems: 'center',
                padding: 20,
            }}>
                <View style={{

                    width: '100%'
                }}>
                    <Text style={{
                        color: returnColor('text', colorScheme),
                        fontSize: SIZES.xLarge,
                        fontFamily: FONT.bold,
                        fontWeight: 500,
                        textAlign: 'left'
                    }} >Hi, Is._.ael</Text>
                </View>
                <SlidingCards
                    cards={cards}
                />
                <View style={{
                    marginTop: 10,

                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 5
                    }}>
                        <Text style={{
                            color: returnColor('text', colorScheme), fontSize: SIZES.large,
                            fontFamily: FONT.bold
                        }}> Statistiques </Text>
                        <MaterialIcons name="arrow-forward-ios" size={SIZES.medium} color={returnColor('text', colorScheme)} />
                    </View>

                    <ChartsFlatList charts={charts?.filter(cx => cx.isRecent)} />
                </View>
                <View style={{
                    marginTop: 20,

                }} >
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 5,
                    }}>
                        <Text style={{
                            color: returnColor('text', colorScheme), fontSize: SIZES.large,
                            fontFamily: FONT.bold
                        }}> Prêts récents</Text>
                        <MaterialIcons name="arrow-forward-ios" size={SIZES.medium} color={returnColor('text', colorScheme)} />
                    </View>
                    <LoansFlatList loans={loans} />
                </View>

            </ThemedView>
        </>
    );
}

export default Home
