
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
        width: "75%",
        padding: 20,
        backgroundColor: "#FA4A0C",
        borderRadius: 25,
    },

    submitButtonText: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 17,
    },
});
