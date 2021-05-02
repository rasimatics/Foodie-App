import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {PaymentCardItem} from "./PaymentCardItem";


export function PaymentCard() {

    const [active, setActive] = useState(1)

    const DATA = [
        {id: 1, type: "Card", icon: "credit-card-alt", color:"#F47B0A"},
        {id: 2, type: "Bank acoount", icon: "bank", color:"#EB4796"},
        {id: 3, type: "Paypal", icon: "paypal", color:"#0038FF"}
    ]
    return (
        <View style={styles.container}>
            {DATA.map((item, index) =>
                <PaymentCardItem
                    key={item.id}
                    id={item.id}
                    type={item.type}
                    icon={item.icon}
                    color={item.color}
                    active={item.id == active}
                    setActive={setActive}
                    lastItem={DATA.length - 1 == index}/>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 20,
    },
})