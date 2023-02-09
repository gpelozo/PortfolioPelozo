import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'  
import { CART } from "../data/cart"
import CartItem from "../components/CartItem"

const CartScreen = () => {
    
        const total = 120

        const handleConfirmCart = () => {
            console.log("Confirmar Carrito")
        }

        const handleDeleteItem = () => {
            console.log("borrar elemento")
        }

        const renderCartItem = ({item}) => (
            <CartItem item={item} onDelete={handleDeleteItem}/>
        )
    
  return (
    <View style={styles.container}>
        <View style={styles.list}>
      <FlatList
      data={CART}
      keyExtractor={(item) => item.id}
      renderItem={renderCartItem}
      />
      </View>
    <View style={styles.footer}>
        <TouchableOpacity styles={styles.confirm} onPress={handleConfirmCart}>
            <Text>Confirmar</Text>
            <View style={styles.total}>
            <Text styles={styles.text}>Total</Text>
            <Text>${total}</Text>
            </View>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12, 
        paddingBottom: 120,
    },
    list: {
        flex: 1,
    },
    footer: {
        padding: 12,
        borderTopColor: "#ccc",
        borderTopWidth: 1,
    },
    confirm: {
        backgroundColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 18,
        padding: 8,
    },
    total: {
flexDirection: "row",
    },
})