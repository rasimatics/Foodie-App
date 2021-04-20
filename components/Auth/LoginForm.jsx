
import React from 'react';
import { StyleSheet, Text,View, TouchableOpacity } from 'react-native';
import {FormField} from './FormField';

export function LoginForm() {
    return (
        <View style={styles.formContainer}>
            <FormField fieldname="Email address" />
            <FormField fieldname="Password" isPassword={true}/>
            <TouchableOpacity>
                <Text style={styles.forgetText}>Forget passcode?</Text>
            </TouchableOpacity>
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
