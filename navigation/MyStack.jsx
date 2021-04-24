import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Auth } from "../screen/Auth";
import { MyTab } from "./MyTab";
import { Cart } from "../screen/Cart";
import { Delivery } from "../screen/Delivery";
import { Payment } from "../screen/Payment";
import { ProductDetail } from "../screen/ProductDetail";

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Home" component={MyTab} />
      <Stack.Screen name="Detail" component={ProductDetail} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Delivery" component={Delivery} />
    </Stack.Navigator>
  )
}

