import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons"


export function Header(props) {
    return (
        <View style={styles.topIcons}>
            <Ionicons name="chevron-back-outline" size={24} color="black" onPress={() => props.navigation.goBack()}/>
            {props.title && <Text style={[styles.title, !props.icon && {marginRight: 20}]}> {props.title}</Text>}
            <Ionicons name={props.icon} size={24} color="black" onPress={() => alert("Clicked wish")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    topIcons: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});
