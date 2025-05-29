import { Text, TouchableOpacity, useColorScheme, View } from "react-native"
import { Colors } from "../../constants/Colors"
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"

const TabButton = ({ icon, label, style = {}, active, onClick }) => {
  const colorScheme = useColorScheme()
  const TEXT_COLOR = Colors[colorScheme ?? 'dark'].text

  return (
    <TouchableOpacity
    onPress={onClick}
      style={{
        backgroundColor: active ? TEXT_COLOR : '#A9A9A9',
        height: 40,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        ...style, 
      }}
    >
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 20,
          backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 10,
        }}
      >
        <MaterialCommunityIcons
          name={icon}
          size={22}
          color={colorScheme === 'dark' ? 'white' : 'black'}
        />
      </View>

      <Text style={{
        color: colorScheme === 'dark' ? 'black' : 'white',
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center',

      }}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default TabButton