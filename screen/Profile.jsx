import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {Header} from "../components/Common/Header"
import {SubmitButton} from "../components/Common/SubmitButton"
import {InfoCard} from "../components/Profile/InfoCard"
import {PaymentCard} from "../components/Profile/PaymentCard";


export function Profile({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={{flex: 1}}>
                    <Header navigation={navigation} title="My Profile"/>
                    <View style={styles.info}>
                        <Text style={styles.title}>Information</Text>
                        <InfoCard name="Marvis Ighedosa" email="dosamarvis@gmail.com"
                                  description="No 15 uti street off ovie palace road effurun delta state"/>
                    </View>
                    <View style={styles.payment}>
                        <Text style={styles.title}>Payment Method</Text>
                        <PaymentCard/>
                    </View>
                </View>
                <SubmitButton buttonName="Update"/>
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

    info: {
        marginTop: 30,
    },

    title: {
        fontSize: 17,
        fontWeight: "bold",
        paddingVertical: 10,
    },
    payment: {
        marginVertical: 30,
    },
    buttonContainer: {}
})