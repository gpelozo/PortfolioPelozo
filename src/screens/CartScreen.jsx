import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'
import React, {useEffect} from 'react'  
import CartItem from "../components/CartItem"

import { useSelector, useDispatch } from 'react-redux'
import { confirmCart, removeItem } from '../store/actions/cart.action'

const CartScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const items = useSelector( (state) => state.cart.items)
    const total = useSelector( (state) => state.cart.total)

        const handleConfirmCart = () => {
            dispatch(confirmCart(items, total))
            navigation.navigate("OrdersTab")
        }

        const handleDeleteItem = (id) => {
           dispatch(removeItem(id))
        }

        const renderCartItem = ({item}) => (
            <CartItem item={item} onDelete={handleDeleteItem}/>
        )
    
  return (
    <View style={styles.container}>
        <View style={styles.list}>
      <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderCartItem}
      />
      </View>
    <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
            <Text>Confirmar</Text>
            <View style={styles.total}>
                <Text style={styles.text}>Total</Text>
                <Text style={styles.text}>${total}</Text>
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
        backgroundColor: "#fff",
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