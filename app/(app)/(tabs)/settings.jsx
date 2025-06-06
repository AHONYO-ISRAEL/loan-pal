import { Stack } from "expo-router";
import {
  View,
  Text,
  useColorScheme,
  ScrollView,
  Image,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { returnColor } from "../../../hooks/utils/functions";
import { ThemedView } from "../../../components/ui/ThemedView";
import { FONT, SIZES } from "../../../constants/Thems";
import { MaterialIcons } from "@expo/vector-icons";

const SettingsItem = ({ label }: { label: string }) => {
  const colorScheme = useColorScheme();
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={[styles.itemText, { color: returnColor("text", colorScheme) }]}>
        {label}
      </Text>
      <MaterialIcons
        name="arrow-forward-ios"
        size={SIZES.small}
        color={returnColor("text", colorScheme)}
      />
    </TouchableOpacity>
  );
};

const Settings = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "Settings",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor:
              colorScheme === "dark"
                ? "rgba(18,18,18,0.6)"
                : returnColor("container", colorScheme),
          },
        }}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          source={require("../../../assets/images/user/prof.png")}
          style={styles.profileImage}
          resizeMethod="contain"
        />
        <Text
          style={[
            styles.username,
            { color: returnColor("text", colorScheme) },
          ]}
        >
          Is._.eal
        </Text>

        <SectionTitle title="Paramètres" colorScheme={colorScheme} />
        <SettingsItem label="Informations personnelles" />
        <SettingsItem label="Numéro de Téléphone" />
        <SettingsItem label="Méthode de transfert" />

        <SectionTitle title="Sécurité" colorScheme={colorScheme} />
        <SettingsItem label="Authentification multi facteurs" />
        <SettingsItem label="Identification biomérique" />
      </ScrollView>
    </ThemedView>
  );
};

const SectionTitle = ({
  title,
  colorScheme,
}) => (
  <View style={styles.sectionTitleContainer}>
    <Text
      style={[
        styles.sectionTitle,
        { color: returnColor("text", colorScheme) },
      ]}
    >
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scroll: {
    alignItems: "center",
    paddingBottom: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  username: {
    marginTop: 10,
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
  },
  sectionTitleContainer: {
    width: "100%",
    alignItems: "flex-start",
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    textAlign: "left",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 30,
  },
  itemText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
  },
});

export default Settings;
