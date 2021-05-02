import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {FontAwesome, Ionicons} from '@expo/vector-icons';


export function PaymentCardItem(props) {
    return (
        <View style={styles.container}>
            <Ionicons name={props.active?"radio-button-on":"radio-button-off"} size={24} color="#FA4A0C"/>
            <TouchableOpacity onPress={()=>props.setActive(props.id)} style={[styles.iconAndText,!props.lastItem&&{ borderBottomWidth:1, paddingBottom:10}]}>
                <View style={[styles.iconContainer,{backgroundColor: props.color}]}>
                    <FontAwesome name={props.icon} size={18} color="#fff"/>
                </View>
                <Text style={styles.text}>{props.type}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
    },
    iconAndText: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderColor:"#C2C2C2",
        marginHorizontal: 5,
    },
    iconContainer: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    text: {
        fontSize: 17,
        marginHorizontal: 5,
    }

})