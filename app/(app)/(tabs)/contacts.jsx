import { Stack } from "expo-router";
import { View, Text, useColorScheme, ScrollView } from "react-native"
import ContactCard from "../../../components/ui/cards/ContactCard";
import { contacts } from "../../../constants/data/contacts";
import { returnColor } from "../../../hooks/utils/functions";
import { ThemedView } from "../../../components/ui/ThemedView";

const Contacts = () => {

    const colorScheme = useColorScheme()
    return (
        <ThemedView style={{
            flex: 1,
            alignItems: 'center',
        }}>
            <Stack.Screen options={{
                headerTitle: 'Contacts',
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: colorScheme === 'dark' ? 'rgba(18,18,18,0.6)' : returnColor('container', colorScheme)
                },
            }} />
            <ScrollView showsVerticalScrollIndicator={false} >
                {
                    contacts?.map((cx, _index) => (
                        <>
                            <ContactCard contact={cx} key={_index} />
                        </>
                    ))
                }
            </ScrollView>
        </ThemedView>
    )
}

export default Contacts;