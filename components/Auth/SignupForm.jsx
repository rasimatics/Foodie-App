
import React from 'react';
import { StyleSheet, Text,View } from 'react-native';
import {FormField} from './FormField';

export function SignupForm() {
    return (
        <View style={styles.formContainer}>
            <FormField fieldname="Username" />
            <FormField fieldname="Email address" />
            <FormField fieldname="Password" isPassword={true}/>
        </View>

    );
}

const styles = StyleSheet.create({
    formContainer: {
        width:"80%",
        marginTop:10
    },

    forgetText:{
        marginTop:10,
        color:"#FA4A0C",
        fontSize:17,
        fontWeight: "bold",
    }
});
