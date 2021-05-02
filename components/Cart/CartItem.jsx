import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'


export function CartItem() {
    const [counter, setCounter] = useState(1)

    const handleCounter = (param) => {
        // get rid of negative counter
        if (counter !== 1 || param !== "decrease") {
            const value = param === "decrease" ? -1 : 1
            setCounter((counter) => counter + value)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} resizeMode={"contain"} source={require("../../assets/images/plate1.png")}/>
            </View>
            <View style={styles.dataContainer}>
                <Text style={{fontSize: 18, fontWeight: "bold", marginBottom: 8}}>Veggie tomato mix</Text>
                <Text style={{fontSize: 16, color: "#FA4A0C", fontWeight: "bold"}}>#1,900</Text>
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
    },
    image: {
        height: '100%',
        width: '100%',
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
    }


})