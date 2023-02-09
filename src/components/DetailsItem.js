import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"

const ProductsDetailItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onSelected(item)}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.img,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>${item.price}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ProductsDetailItem

const styles = StyleSheet.create({
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
})