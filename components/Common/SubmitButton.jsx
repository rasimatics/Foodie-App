
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function SubmitButton(props) {
    return (
        <TouchableOpacity style={styles.submitButton} {...props}>
            <Text style={styles.submitButtonText}>{props.buttonName}</Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    submitButton: {
        width: "80%",
        padding: 20,
        backgroundColor: "#FA4A0C",
        borderRadius: 25,
        alignSelf:"center",
    },

    submitButtonText: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 17,
    },
});
