
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function SubmitButton({ buttonName }) {
    return (
        <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>{buttonName}</Text>
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
