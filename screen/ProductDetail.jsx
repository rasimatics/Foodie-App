import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Description } from "../components/ProductDetail/Description"
import { SubmitButton } from '../components/Common/SubmitButton'
import { Ionicons } from "@expo/vector-icons"

export function ProductDetail() {
    const [activeDotId, setActiveDotId] = useState(0)
    const NUM_DOTS = 4

    const activeDotStyle = {
        backgroundColor: "#FA4A0C"
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.topIcons}>
                    <Ionicons name="chevron-back-outline" size={24} color="black" />
                    <Ionicons name="heart-outline" size={24} color="black" />
                </View>
                <View style={styles.imagesContainer}>
                    <View style={styles.images}>
                        <Image source={require("../assets/images/plateBig1.png")} />
                    </View>
                    <View style={styles.dots}>
                        {Array.from(Array(NUM_DOTS), (elem, index) => {
                            return <View key={index} style={[styles.dot, index == activeDotId && activeDotStyle]}></View>
                        })
                        }
                    </View>
                </View>
                <View style={styles.mainTextContainer}>
                    <Text style={styles.name}>Veggie tomato mix</Text>
                    <Text style={styles.price}>N1,900</Text>
                </View>

                <Description title="Delivery info" paragraph="Delivered between monday aug and thursday 20 from 8pm to 91:32 pm" />
                <Description title="Return policy" paragraph="All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately." />
                <SubmitButton buttonName="Add to cart"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 25
    },
    innerContainer: {
        flex: 1,
        padding: 10,
    },
    topIcons: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    imagesContainer: {
        justifyContent: "center",
        alignItems: 'center',
    },

    dots: {
        flexDirection: "row",
        padding: 10,
    },
    dot: {
        width: 8,
        height: 8,
        margin: 5,
        backgroundColor: "#C4C4C4",
        borderRadius: 30,
    },
    mainTextContainer: {
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        fontSize: 28,
        fontWeight: "bold",
    },
    price: {
        margin: 5,
        fontSize: 22,
        fontWeight: "bold",
        color: "#FA4A0C"
    },

})
