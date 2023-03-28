import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// reducers
import CategoryReducer from "./reducers/category.reducer"
import ProductReducer from "./reducers/products.reducer"
import CartReducer from "./reducers/cart.reducer"
import OrderReducer from "./reducers/order.reducer"
import AuthReducer from "./reducers/auth.reducer"
import PlacesReducer from "./reducers/places.reducer"

const appReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
    orders: OrderReducer,
    auth: AuthReducer,
    places: PlacesReducer,
})

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        return appReducer(undefined, action)
      }
    return appReducer(state, action)
}

export default createStore(rootReducer, applyMiddleware(thunk))

