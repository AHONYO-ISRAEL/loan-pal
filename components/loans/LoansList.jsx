import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    useColorScheme,
    useWindowDimensions,
} from "react-native";
import { SIZES, FONTS, COLORS, FONT } from "../../constants/Thems";
import { getContactNameByid, returnColor } from "../../hooks/utils/functions";

const LoansFlatList = ({ loans }) => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";
    const { width } = useWindowDimensions();

    const renderItem = ({ item }) => {
        const name = getContactNameByid(item.contactId)?.name || "Inconnu";
        const amountText = `${item.amount.toLocaleString()} ${item.currency}`;
        const issued = new Date(item.issuedAt).toLocaleDateString();
        const due = new Date(item.dueDate).toLocaleDateString();
        const progress = item.repaymentProgress;

        return (
            <View style={styles.card(width, isDark)}>
                {/* Row 1: Name & Amount */}
                <View style={styles.rowBetween}>
                    <Text style={styles.title(colorScheme)}>{name}</Text>
                    <Text style={styles.amount(colorScheme)}>{amountText}</Text>
                </View>

                {/* Row 2: Dates */}
                <View style={[styles.rowBetween, { marginTop: 6 }]}>
                    <Text style={styles.label(colorScheme)}>Démarré: {issued}</Text>
                    <Text style={styles.label(colorScheme)}>Échéance: {due}</Text>
                </View>

                {/* Bottom Progress Bar */}
                <View style={styles.progressWrapper}>
                    <View
                        style={[
                            styles.progressBar,
                            {
                                width: `${progress * 100}%`,
                                backgroundColor:
                                    progress === 1
                                        ? COLORS.success
                                        : COLORS.primary,
                            },
                        ]}
                    />
                </View>

                <Text style={styles.progressText(colorScheme)}>
                    {Math.round(progress * 100)}% remboursé
                </Text>
            </View>
        );
    };

    return (
        <FlatList
            data={loans}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        gap: SIZES.medium,
    },
    card: (width, isDark) => ({
        width: width * 0.9,
        borderRadius: 12,
        borderWidth: 1,
        borderClor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
        padding: SIZES.medium,
        shadowColor: isDark ? "#fff" : "#000",
        shadowOpacity: 0.1,
    }),
    title: (colorScheme) => ({
        fontFamily: FONT.medium,
        fontSize: 16,
        color: returnColor("text", colorScheme),
    }),
    amount: (colorScheme) => ({
        fontFamily: FONT.bold,
        fontSize: 15,
        color: returnColor("text", colorScheme),
    }),
    label: (colorScheme) => ({
        fontSize: 13,
        color: returnColor("text", colorScheme),
    }),
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    progressWrapper: {
        marginTop: 12,
        height: 6,
        backgroundColor: "#ccc",
        borderRadius: 3,
        overflow: "hidden",
    },
    progressBar: {
        height: "100%",
        borderRadius: 3,
    },
    progressText: (colorScheme) => ({
        marginTop: 4,
        fontSize: 12,
        textAlign: "right",
        color: returnColor("text", colorScheme),
    }),
});

export default LoansFlatList;
