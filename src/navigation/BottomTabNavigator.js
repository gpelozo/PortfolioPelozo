import { StyleSheet,View, Text } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "@expo/vector-icons/Ionicons"

import ShopNavigator from "./ShopNavigator"
import CartNavigator from "./CartNavigator"
import OrdersNavigator from "./OrdersNavigator"
import PlaceNavigator from "./PlaceNavigator";

const BottomTabs = createBottomTabNavigator()

export default BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName="ShopTab" 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <BottomTabs.Screen name="ShopTab" component={ShopNavigator}
            options={{
                tabBarIcon: () => (
                    <View style={styles.icon}>
                        <Ionicons name="bulb-outline" size={20} color="black" />
                        <Text>Servicios</Text>
                    </View>
                )
            }}
            />
            <BottomTabs.Screen name="CartTab" component={CartNavigator}
            options={{
                tabBarIcon: () => (
                    <View style={styles.icon}>
                        <Ionicons name="clipboard-outline" size={20} color="black" />
                        <Text>Seleccion</Text>
                    </View>
                )
            }}
            />
            <BottomTabs.Screen name="PlacesTab" component={PlaceNavigator}
            options={{
                tabBarIcon: () => (
                    <View style={styles.icon}>
                        <Ionicons name="images-outline" size={20} color="black" />
                        <Text>Tu Idea</Text>
                    </View>
                )
            }}
            />
            <BottomTabs.Screen name="OrdersTab" component={OrdersNavigator}
            options={{
                tabBarIcon: () => (
                    <View style={styles.icon}>
                        <Ionicons name="list" size={20} color="black" />
                        <Text>Presupuestos</Text>
                    </View>
                )
            }}
            />
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 0.5,
        elevation: 5,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    icon: {
        flex: "1",
        justifyContent: "center",
        alignItems: "center",
    },
})