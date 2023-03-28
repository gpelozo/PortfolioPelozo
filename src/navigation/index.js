import React from "react"

// stacks
import BottomTabNavigator from "./BottomTabNavigator"
import AuthNavigator from "./AuthNavigator";

import { useSelector } from "react-redux";


export default () => {
    const userId = useSelector(state => state.auth.userId)
    return <>{userId ? <BottomTabNavigator /> : <AuthNavigator />}</>
}