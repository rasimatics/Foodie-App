
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export function Card({ image, foodTitle, foodPrice, index }) {
    
    const firstElemMargin={
        marginLeft:40
    }

    return (
        <View style={[styles.foodCard,index==0 && firstElemMargin]}>
            <View style={styles.foodPlate}>
                <Image source={image} />
            </View>
            <View style={styles.foodBackground}>
                <Text style={styles.foodTitle}>{foodTitle}</Text>
                <Text style={styles.foodPrice}>{foodPrice}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    foodCard:{
        margin:10,
        marginLeft:20,
        width:220,
        height:321,
        alignItems:'center',
        position:"relative",
    },

    foodBackground:{
        width:220,
        height:270,
        backgroundColor: "#fff",
        position:"absolute",
        bottom:0,
        zIndex:-1,
        borderRadius:30,
        justifyContent:'flex-end',
        alignItems:'center',
        padding:25,
    },
    foodTitle:{
        width:125,
        flexWrap:"wrap",
        textAlign: 'center',
        fontSize:22,
        fontWeight:"bold",
    },
    foodPrice:{
        margin:15,
        fontSize: 17,
        fontWeight:"bold",
        color:"#FA4A0C"
    }
});
