import { useFonts } from "expo-font"
import { NavigationContainer } from "@react-navigation/native"
import BottomTabNavigator from "./src/navigation/BottomTabNavigator"

export default function App() {
  const [fontsLoaded] = useFonts({
    ArchivoNarrowBold: require("/Users/coder/ReactNative/Prueba1/portfoliopelozo/src/assets/fonts/Archivo_Narrow/static/ArchivoNarrow-Bold.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return ( 
  <NavigationContainer>
    <BottomTabNavigator/>
  </NavigationContainer>
  )
}