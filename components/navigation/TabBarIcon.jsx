import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const TabBarIcon = ({ focused, style, ...rest }) => {
    return (
        <View>
            <MaterialCommunityIcons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        borderRadius: 16,  // Rounded corners
    },
    activeContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Slightly transparent background color
    }
});

export default TabBarIcon