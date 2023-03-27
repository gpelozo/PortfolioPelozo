import { StyleSheet, View, Text, Button } from "react-native"
import React, { useEffect } from "react"
import DetailsItem from "../components/DetailsItem"
import { useSelector, useDispatch } from "react-redux"

import { addItem } from "../store/actions/cart.action"

const DetailsScreen = ({navigation, route}) => {
  const dispatch = useDispatch()
  const bread = useSelector(state => state.products.selected)

  useEffect(() => {
    console.log(route.params)
  }, [])

  const handleAddItem = () => {
    dispatch(addItem(bread))
  }
  
  const renderDetailsItem = ({item}) => (
    <DetailsItem/>
  )

  return (
    <View style={styles.container}>
      <Text>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>{bread.price}</Text>
      <Button title="Add to Cart" onPress={handleAddItem}/>
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
  categoriesContainer: {
    padding: 15,
    height: 150,
  },
})