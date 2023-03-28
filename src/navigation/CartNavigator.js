import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CartScreen from "../screens/CartScreen"

const Stack = createNativeStackNavigator()

export default CartNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="Categories"
    screenOptions={{
      headerShadowVisible: false,
      headerTintColor: "#F2F2F2",
      headerStyle: {
        backgroundColor: "#D0D98B",
      },
      headerTitleStyle: {
          fontWeight: "bold",
          fontFamily: "ArchivoNarrowBold",
          fontSize: 30,
      },
  }}
    >
    <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: "Presupuesto"
          }}
          />
    </Stack.Navigator>
  )
}