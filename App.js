import React from 'react';
import { Provider } from 'react-redux'

import { useFonts } from "expo-font"
import { NavigationContainer } from "@react-navigation/native"
import BottomTabNavigator from "./src/navigation/BottomTabNavigator"

import store from './store'

import { init } from './src/db';

init()
  .then(() => console.log("Base de Datos Inicializada"))
  .catch((err) =>{
    console.log("Conexion a la base de datos fallida")
    console.log(err.message)
  })

export default function App() {
  const [fontsLoaded] = useFonts({
    ArchivoNarrowBold: require("/Users/coder/ReactNative/Prueba1/portfoliopelozo/src/assets/fonts/Archivo_Narrow/static/ArchivoNarrow-Bold.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return ( 
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  )
}