import React from 'react';
import { StyleSheet, Text,TextInput,View } from 'react-native';

export function FormField ({fieldname, isPassword}){
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{fieldname}</Text>
        <TextInput secureTextEntry={isPassword} style={styles.inputBox} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginBottom:15,
    },
    label: {
        color:"#919191",
    },
    inputBox: {
        fontSize:17,
        fontWeight:'bold',
        paddingTop:5,
        paddingBottom:5,
        borderBottomWidth:1,
        borderBottomColor:"#979797",
    }
});
