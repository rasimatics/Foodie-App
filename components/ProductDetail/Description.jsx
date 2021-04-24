
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Description(props) {
    return (
        <View style={styles.description}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.paragraph}>{props.paragraph}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    description: {
        marginVertical: 20,
    },
    title: {
        fontSize: 17,
        fontWeight: "bold",
    },
    paragraph: {
        fontSize: 15,
        color: "#9A9A9D",
    }
});
