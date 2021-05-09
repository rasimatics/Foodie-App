import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import Animated from 'react-native-reanimated';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {MyStack} from "./MyStack";
import {Ionicons} from "@expo/vector-icons";

const Drawer = createDrawerNavigator()


function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} style={styles.drawer} contentContainerStyle={{flex: 1}}>
            <View style={{flex: 1,}}>
                <DrawerItem style={styles.drawerItem}
                            labelStyle={styles.drawerItemLabel}
                            label={"Hello0"}
                            icon={() => <Ionicons style={styles.itemIcon} size={24} name={"heart"} color={"#fff"}/>}
                            onPress={() => console.log("h")}/>
                <DrawerItem style={styles.drawerItem}
                            labelStyle={styles.drawerItemLabel}
                            label={"Hello1"}
                            icon={() => <Ionicons style={styles.itemIcon} size={24} name={"heart"} color={"#fff"}/>}
                            onPress={() => console.log("h")}/>
                <DrawerItem style={styles.drawerItem}
                            labelStyle={styles.drawerItemLabel}
                            label={"Hello2"}
                            icon={() => <Ionicons style={styles.itemIcon} size={24} name={"heart"} color={"#fff"}/>}
                            onPress={() => console.log("h")}/>
                <DrawerItem style={styles.drawerItem}
                            labelStyle={styles.drawerItemLabel}
                            label={"Hello3"}
                            icon={() => <Ionicons style={styles.itemIcon} size={24} name={"heart"} color={"#fff"}/>}
                            onPress={() => console.log("h")}/>
            </View>
        </DrawerContentScrollView>
    )
}

export function MyDrawer() {
    const [progress, setProgress] = useState(new Animated.Value(0))

    const scale = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8],
    });
    const borderRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 16],
    });

    const animatedStyle = {borderRadius, transform: [{scale}]};

    return (
        <Drawer.Navigator
            drawerType={'slide'}
            drawerStyle={{
                width: "50%",
            }}
            sceneContainerStyle={{backgroundColor: '#FA4A0C'}}
            drawerContent={props => {
                // console.log(props.progress)
                setProgress(props.progress);
                return <CustomDrawerContent {...props}/>
            }
            }
            overlayColor="transparent"
        >
            <Drawer.Screen name="products">
                {props => <MyStack {...props} style={animatedStyle}/>}
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: "#FA4A0C",
    },
    drawerItem: {
        marginVertical: 0,
        marginHorizontal: 20,
    },
    drawerItemLabel: {
        color: "#fff",
        fontSize: 17,
        marginLeft: -16,
        borderBottomWidth: 0.3,
        borderBottomColor: "#fff",
        paddingBottom: 20
    },
    itemIcon: {
        alignSelf: "flex-start",
        marginTop: 6,
    }
})

