import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    useWindowDimensions,
    View,
    Animated,
    Easing
} from "react-native";
import { useRef, useState } from "react";
import { returnColor } from "../../../hooks/utils/functions";
import { FONT, SIZES } from "../../../constants/Thems";
import TabButton from "../../navigation/TabButton";
import { BlurView } from "expo-blur";

const ContactCard = ({ contact }) => {
    const colorScheme = useColorScheme();
    const { width } = useWindowDimensions();
    const isDark = colorScheme === "dark";

    const uri = contact?.profileImage;
    const [isExpanded, setIsExpanded] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
        Animated.timing(animation, {
            toValue: isExpanded ? 0 : 1,
            duration: 200,
            easing: Easing.out(Easing.ease),
            useNativeDriver: false,
        }).start();
    };

    const animatedHeight = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 40], 
    });

    const animatedOpacity = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={toggleExpand}
        >
            <BlurView intensity={70} tint={isDark ? "dark" : "light"} style={styles.container(width, colorScheme, isDark)}>
                <View style={styles.header}>
                    <Image
                        source={{ uri }}
                        style={styles.avatar}
                    />
                    <View>
                        <Text style={styles.contactName(colorScheme)}> {contact.name} </Text>
                        <Text style={styles.email(colorScheme)}> {contact.email} </Text>
                    </View>
                </View>

                <Animated.View style={[styles.buttonsContainer, { height: animatedHeight, opacity: animatedOpacity }]}>
                    <TabButton icon={'folder'} label={'Consulter'} style={{ width: '48%' }} />
                    <TabButton icon={'plus'} label={'Détails'} style={{ width: '48%' }} />
                </Animated.View>
            </BlurView>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: (_width, _colorScheme, _isDark) => ({
        width: 0.9 * _width,
        borderRadius: SIZES.medium,
        padding: SIZES.medium,
        marginTop: 10,
        backgroundColor: _isDark ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)",
        borderColor: _isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
        borderWidth: 1,
    }),
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#fff",
    },
    contactName: (_colorSchema) => ({
        color: returnColor('text', _colorSchema),
        fontFamily: FONT.bold,
        fontSize: SIZES.medium
    }),
    email: (_colorSchema) => ({
        color: returnColor('text', _colorSchema),
        fontFamily: FONT.regular,
        fontSize: SIZES.small
    }),
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        overflow: 'hidden',
    }
});

export default ContactCard;
