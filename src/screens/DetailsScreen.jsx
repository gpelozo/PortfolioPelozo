import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from "react-native"
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
        <Text>{servicio.explanation}</Text>
        <Text>${servicio.price}</Text>
      </View>
        <Button 
        title="Add to Cart" 
        onPress={handleAddItem}
        />
    </View>
  )
}


export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  detailContainer: {
    padding: 15,
    height: 150,
  },
  itemContainer: {
    flex: 1,
    borderRadius: 10,
    padding: 20,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  imageContainer: {
    height: "60%",
  },
  textContainer: {
    height: "60%",
    padding: 10,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  textContainer: {
    width: "60%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontFamily: "ArchivoNarrowBold",
    fontSize: 40,
    },
})