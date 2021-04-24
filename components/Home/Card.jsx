
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export function Card({ image, foodTitle, foodPrice, index, lastIndex, navigation }) {
    const firstCard = {
        marginLeft: 40
    }

    const lastCard = {
        marginRight: 20
    }

    return (
        <TouchableOpacity
            style={[styles.foodCard, index == 0 && firstCard, index == lastIndex && lastCard]}
            onPress={() => navigation.navigate("Detail")}
        >
            <View style={styles.foodPlate}>
                <Image source={image} />
            </View>
            <View style={styles.foodBackground}>
                <Text style={styles.foodTitle}>{foodTitle}</Text>
                <Text style={styles.foodPrice}>{foodPrice}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    foodCard: {
        margin: 5,
        marginLeft: 20,
        width: 220,
        height: 321,
        alignItems: 'center',
        position: "relative",
    },

    foodBackground: {
        width: 220,
        height: 270,
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 0,
        zIndex: -1,
        borderRadius: 30,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 25,
    },
    foodTitle: {
        width: 125,
        flexWrap: "wrap",
        textAlign: 'center',
        fontSize: 22,
        fontWeight: "bold",
    },
    foodPrice: {
        margin: 15,
        fontSize: 17,
        fontWeight: "bold",
        color: "#FA4A0C"
    }
});
