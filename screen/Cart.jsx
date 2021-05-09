import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'
import {Header} from "../components/Common/Header"
import {MaterialIcons} from '@expo/vector-icons';
import {CartItem} from "../components/Cart/CartItem";
import {SubmitButton} from "../components/Common/SubmitButton";


export function Cart({navigation}) {
    const DATA = [
        {id: 1, name: "Veggie tomato mix", price: "1900"},
        {id: 2, name: "Potato", price: "2900"},
        {id: 3, name: "Cucumber", price: "1100"},
    ]
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={{flex: 1}}>
                    <Header navigation={navigation} title="Cart"/>
                    <View style={styles.textContainer}>
                        <MaterialIcons name="swipe" size={20} color="black"/>
                        <Text style={styles.text}> swipe on an item to delete</Text>
                    </View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={DATA}
                        renderItem={({item, index}) => (
                            <CartItem name={item.name} price={item.price}/>
                        )}/>
                </View>
                <View style={{position:"absolute", width:"100%", bottom:0, alignSelf:"center"}}>
                    <SubmitButton buttonName="Complete order"/>
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
    textContainer: {
        marginVertical: 30,
        flexDirection: "row",
        justifyContent: "center"
    },
    text: {
        fontSize: 13,
        textAlign: "center"
    },
})