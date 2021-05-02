import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {Header} from "../components/Common/Header"
import {InfoCard} from "../components/Profile/InfoCard";
import {PaymentCard} from "../components/Profile/PaymentCard";

export function Cart({navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={{flex: 1}}>
                    <Header navigation={navigation} title="Cart"/>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
    },
    innerContainer: {
        flex: 1,
        padding: 10,
        marginVertical: 40,
        marginHorizontal: 25,
    },
})