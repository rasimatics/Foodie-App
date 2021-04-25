
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';


export function InfoCard(props) {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/profile1.png')} />
            </View>
            <View style={styles.rightPart}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.email}>{props.email}</Text>
                <Text style={styles.description}>{props.description}</Text>
                <TouchableOpacity style={styles.editIcon}>
                    <Feather name="edit-2" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 20,
    },
    rightPart: {
        width: "80%",
        paddingHorizontal: 15,
        paddingBottom: 10,
    },
    editIcon: {
        position: "absolute",
        top: 0,
        right: 0,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 3,
    },
    email: {
        fontSize: 13,
        color: "#9F9F9F",
        margin: 3,
    },
    description: {
        fontSize: 13,
        color: "#9F9F9F",
        margin: 3,
    }
});
