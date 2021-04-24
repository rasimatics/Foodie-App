import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Auth } from "../screen/Auth";
import { MyTab } from "./MyTab";

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Home" component={MyTab} />
    </Stack.Navigator>
  )
}

