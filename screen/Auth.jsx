import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import {SubmitButton} from '../components/Common/SubmitButton'
import {LoginForm} from '../components/Auth/LoginForm'
import {SignupForm} from '../components/Auth/SignupForm'


export default function Auth() {
    const [loginActive, setLoginActive] = useState(true);

    const activeStyle = {
        borderBottomWidth: 2,
        borderBottomColor: "red"
    }

    const clickTopButton = () => {
        setLoginActive(!loginActive)
    }

    return (
        <View style={styles.container}>

            <View style={styles.topPart}>
                <Image style={styles.logo} source={require('../assets/images/logo.png')} />
                <View style={styles.buttons}>
                    <TouchableOpacity
                        onPress={clickTopButton}
                        style={[styles.buttonContainer, loginActive && activeStyle]}>
                        <Text style={styles.topText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={clickTopButton}
                        style={[styles.buttonContainer, !loginActive && activeStyle]}>
                        <Text style={styles.topText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottomPart}>
                {loginActive ?<LoginForm />:<SignupForm />}
                <SubmitButton buttonName={loginActive? "Login":"Sign up" } />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
    },

    topPart: {
        backgroundColor: "#FFFFFF",
        height: "40%",
        justifyContent: "flex-end",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    logo: {
        alignSelf: "center",
        marginBottom: 25,
        width: 150,
        height: 150,
    },

    buttons: {
        flexDirection: "row",
        justifyContent: 'space-around',
    },

    buttonContainer: {
        width: "30%",
    },

    topText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "bold",
        padding: 10,
    },

    bottomPart: {
        height: "60%",
        width:"100%",
        justifyContent:"space-around",
        alignItems:'center',
    },
});
