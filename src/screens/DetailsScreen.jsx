import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { addItem } from "../store/actions/cart.action"

const DetailsScreen = ({navigation, route}) => {
  const dispatch = useDispatch()
  const servicio = useSelector((state) => state.products.selected)

  useEffect(() => {
    console.log(route.params)
  }, [])

  const handleAddItem = () => {
    dispatch(addItem(servicio))
    navigation.navigate("CartTab")
  }

  return (
      <View
      style={styles.detailContainer}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: servicio.img,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{servicio.name}</Text>
        <Text style={styles.text2}>{servicio.explanation}</Text>
        <Text style={styles.text3}>${servicio.price}</Text>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={handleAddItem}>
          <View>
            <Text style={{fontSize:30, color:'white'}}>Seleccionar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  detailContainer: {
    padding: 15,
    height: "100%",
  },
  imageContainer: {
    flex: 0.5,
    height: "50%",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  textContainer: {
    width: "100%",
    height: "20%",
    alignItems: "center",
  },
  text: {
    color: "red",
    fontFamily: "ArchivoNarrowBold",
    fontSize: 50,
    textAlign: "center",
    },
  text2: {
    color: "brown",
    fontFamily: "ArchivoNarrowBold",
    fontSize: 20,
    },
  text3: {
    color: "lightblue",
    fontFamily: "ArchivoNarrowBold",
    fontSize: 60,
    },
    TouchableOpacity:{
      paddingHorizontal:10,
      paddingVertical:5,
      borderRadius:5,
      borderColor:'gray',
      backgroundColor:'#84563c'
    },
})