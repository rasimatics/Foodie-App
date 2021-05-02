import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, FlatList, Dimensions } from 'react-native';
import { Description } from "../components/ProductDetail/Description"
import { SubmitButton } from '../components/Common/SubmitButton'
import { Header } from "../components/Common/Header"

export function ProductDetail({ navigation }) {
    const [activeDotId, setActiveDotId] = useState(0)

    const activeDotStyle = {
        backgroundColor: "#FA4A0C"
    }

    const IMAGES = [
        { image: require("../assets/images/plateBig1.png"), id: 1 },
        { image: require("../assets/images/plateBig1.png"), id: 2 },
        { image: require("../assets/images/plateBig1.png"), id: 3 },
        { image: require("../assets/images/plateBig1.png"), id: 4 },
    ]

    const NUM_DOTS = IMAGES.length

    const width = Dimensions.get("screen").width

    const changePosition = (e) => {
        const offset = e.nativeEvent.contentOffset.x
        const index = Math.ceil(offset / width)
        setActiveDotId(index)
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Header navigation={navigation} icon={"heart-outline"}/>
                <View style={styles.imagesContainer}>
                    <FlatList
                        data={IMAGES}
                        horizontal
                        pagingEnabled
                        onScroll={changePosition}
                        style={styles.images}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <Image source={item.image} key={item.id} />
                        )}
                    />
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
                <SubmitButton buttonName="Add to cart" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 10,
        marginVertical: 40,
        marginHorizontal: 25
    },
    imagesContainer: {
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
