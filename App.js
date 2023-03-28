import React from 'react';
import { Provider } from 'react-redux'

import { useFonts } from "expo-font"
import { NavigationContainer } from "@react-navigation/native"
import MainNavigation from "./src/navigation"

import store from "./src/store"

import { init } from "./src/db";

init()
  .then(() => console.log("Base de Datos Inicializada"))
  .catch((err) =>{
    console.log("Conexion a la base de datos fallida")
    console.log(err.message)
  })

export default function App() {
  const [fontsLoaded] = useFonts({
    ArchivoNarrowBold: require("./src/assets/fonts/ArchivoNarrow-Bold.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return ( 
    <Provider store={store}>
      <NavigationContainer>
      <MainNavigation />
      </NavigationContainer>
    </Provider>
  )
}