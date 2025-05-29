import { Stack } from "expo-router";
import { View, Text } from "react-native"

const Loans = () => {
    return (
        <View>
             <Stack.Screen options={{
                headerTitle: 'Loans'
            }} />
            <Text>Loans</Text>
        </View>
    )
}

export default Loans;