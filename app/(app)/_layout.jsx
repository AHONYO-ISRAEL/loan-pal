import { Redirect, router, Stack } from "expo-router"
import { useEffect, useRef, useState } from "react"
import { StyleSheet, View } from "react-native"
import { useSelector } from "react-redux"
import AnalogNavigation from "../../components/navigation/AnalogNavigation"
import CustomTabs from "../../components/navigation/CustomTabs"

const AppLayout = () => {
  const onboarding = useSelector((state) => state.utils.hasSeenOnboarding)
  const [openActionPane, setOpenActionPane] = useState()
  const [position, setPosition] = useState(-10)
  const [navTab, setNavTab] = useState('/')

  if (!onboarding) {
    return (
      <Redirect href={'/onboarding/onboarding'} />
    )
  }

 
  return (
    <>
      {/* <CustomTabs setLoginMethod={setNavTab} setOpenActionPane={setOpenActionPane} actionPane={openActionPane} position={position} /> */}
      <Stack>
        <Stack.Screen name={"(tabs)"} options={{ headerShown: false }} />
      </Stack>
      {/* <View style={styles.analog}>
        <AnalogNavigation setFocused={setOpenActionPane} setPosition={setPosition} />
      </View> */}
    </>

  )
}

const styles = StyleSheet.create({
  analog: {
    bottom: 30,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: 160
  }
})

export default AppLayout
