import { createNativeStackNavigator } from "@react-navigation/native-stack"
import OrdersScreen from "../screens/OrdersScreen"

const Stack = createNativeStackNavigator()

export default OrdersNavigator = () => {
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
          name="Orders"
          component={OrdersScreen}
          options={{
            title: "Presupuestos"
          }}
          />
    </Stack.Navigator>
  )
}