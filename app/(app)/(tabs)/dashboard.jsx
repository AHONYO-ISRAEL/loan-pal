import { Stack } from "expo-router";
import { View, Text, useColorScheme } from "react-native"
import { returnColor } from "../../../hooks/utils/functions";

const Dashboard = () => {
    const colorScheme = useColorScheme()
    return (
        <View>
            <Stack.Screen options={{
                headerTitle: 'Dashboard'
            }} />
           
        </View>
    )
}

export default Dashboard;