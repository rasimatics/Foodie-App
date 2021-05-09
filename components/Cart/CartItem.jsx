import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Animated} from 'react-native'
import {Swipeable} from "react-native-gesture-handler";
import {Ionicons} from "@expo/vector-icons";

export function CartItem({id, name, price}) {
    const [counter, setCounter] = useState(1)

    const handleCounter = (param) => {
        // get rid of negative counter
        if (counter !== 1 || param !== "decrease") {
            const value = param === "decrease" ? -1 : 1
            setCounter((counter) => counter + value)
        }
    }

    const rightAction = () => (
        <View style={{flexDirection: "row", alignItems: "center", marginHorizontal:10}}>
            <TouchableOpacity style={styles.iconContainer}>
                <Ionicons name={"heart-outline"} size={20} color={"#fff"}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <Ionicons name={"trash-outline"} size={20} color={"#fff"}/>
            </TouchableOpacity>
        </View>
    )

    return (
        <Swipeable
            renderRightActions={rightAction}
            overshootLeft={false}
            overshootRight={false}
        >
            <View
                style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require("../../assets/images/plateBig1.png")}/>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={{fontSize: 18, fontWeight: "bold", marginBottom: 8}}>{name}</Text>
                    <Text style={{fontSize: 16, color: "#FA4A0C", fontWeight: "bold"}}>{price}</Text>
                    <View style={styles.counterContainer}>
                        <TouchableOpacity onPress={() => handleCounter("decrease")} style={styles.button}>
                            <Text style={styles.text}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}>{counter}</Text>
                        <TouchableOpacity onPress={() => handleCounter("increase")} style={styles.button}>
                            <Text style={styles.text}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        borderRadius: 15,
        marginBottom: 15,
    },

    imageContainer: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: '80%',
        width: '80%',
    },
    dataContainer: {
        flex: 1,
        marginVertical: 10,
    },
    counterContainer: {
        position: "absolute",
        bottom: 15,
        right: 15,
        borderRadius: 25,
        backgroundColor: "#FA4A0C",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        fontSize: 15,
        color: "#fff",
        padding: 2,
        textAlignVertical: "center"
    },
    button: {
        paddingHorizontal: 6,
    },
    iconContainer:{
        backgroundColor:"#DF2C2C",
        borderRadius:30,
        padding: 10,
        margin:5,
    }




})