import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../screen/Home";
import { Profile } from "../screen/Profile";
import { Wishlist } from "../screen/Wishlist";
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export function MyTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "#F2F2F2",
          height: 60,
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          switch (route.name) {
            case "Home":
              return focused
                ? <Ionicons name="home" size={size} color="#FA4A0C" />
                : <Ionicons name="home-outline" size={size} color={color} />;
            case "Wishlist":
              return focused
                ? <Entypo name="heart" size={24} color="#FA4A0C" />
                : <Entypo name="heart-outlined" size={24} color={color} />
            case "Profile":
              return focused
                ? <MaterialCommunityIcons name="account-circle" size={24} color="#FA4A0C" />
                : <MaterialCommunityIcons name="account-circle" size={24} color={color} />;
            case "Auth3":
              return focused
                ? <Ionicons name="time" size={24} color={"#FA4A0C"} />
                : <Ionicons name="time-outline" size={size} color={color} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen options={{
        tabBarVisible: false,
      }} name="Profile" component={Profile} />
      <Tab.Screen name="Auth3" component={Home} />
    </Tab.Navigator>
  );
}