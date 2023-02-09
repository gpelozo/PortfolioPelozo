import { createNativeStackNavigator } from "@react-navigation/native-stack"

import CategoriesScreen from "../screens/CategoriesScreen"
import ProductsScreen from "../screens/ProductsScreen"
import DetailsScreen from "../screens/DetailsScreen"

const Stack = createNativeStackNavigator()

export default ShopNavigator = () => {
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
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "Portfolio",
          }}
          />
          <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({route}) => ({
            title: route.params.title
          })}
          />
          <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({route}) => ({
            title: route.params.name
          })}
          /> 
        </Stack.Navigator>
  )
}
