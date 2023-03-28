import React from 'react'
import { Platform, TouchableOpacity } from 'react-native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from "@expo/vector-icons/Ionicons"

import { COLORS } from "../constants" 

// screens
import PlaceListScreen from "../screens/PlaceListScreen"
import PlaceDetailScreen from '../screens/PlaceDetailScreen'
import NewPlaceScreen from '../screens/NewPlaceScreen'
import MapScreen from '../screens/MapScreen'

const PlaceStack = createNativeStackNavigator()

const PlaceNavigator = () => {
    return(
    <PlaceStack.Navigator
        initialRoute="Categories"
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
        <PlaceStack.Screen
            name="Direcciones"
            component={PlaceListScreen}
            options={({navigation}) => ({
                title: "Capturá lo que te motiva",
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("Nuevo")}>
                        <Ionicons
                            name="md-add" 
                            color={Platform.OS === "android" ? "white" : COLORS.DARK_SIENNA}
                            size={23}
                        />
                    </TouchableOpacity>
                )
            })} 
        />
        <PlaceStack.Screen
            name="Detalle"
            component={PlaceDetailScreen}
            options={{title:"Detalle direccion"}} 
        />
        <PlaceStack.Screen
            name="Nuevo"
            component={NewPlaceScreen}
            options={{title: "Nueva direccion"}} 
        />
        <PlaceStack.Screen
            name="Map"
            component={MapScreen}
            options={{title: "Mapa"}} 
        />
    </PlaceStack.Navigator>
    )
}


export default PlaceNavigator