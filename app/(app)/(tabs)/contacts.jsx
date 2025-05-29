import { Stack } from "expo-router";
import { View, Text, useColorScheme, ScrollView } from "react-native"
import ContactCard from "../../../components/ui/cards/ContactCard";
import { contacts } from "../../../constants/data/contacts";
import { returnColor } from "../../../hooks/utils/functions";

const Contacts = () => {

    const colorScheme = useColorScheme()
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
        }}>
            <Stack.Screen options={{
                headerTitle: 'Contacts',
                headerShadowVisible:false,
                headerStyle: {
                    backgroundColor: colorScheme === 'dark' ? 'rgba(18,18,18,0.6)' : returnColor('container', colorScheme)
                },
            }} />
            <ScrollView showsVerticalScrollIndicator={false} >
                {
                    contacts?.map((cx) => (
                        <>
                            <ContactCard contact={cx} key={cx.id} />
                        </>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default Contacts;