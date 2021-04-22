import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Image, View, FlatList, TouchableOpacity } from 'react-native';
import {Card} from "../components/Home/Card"

export default function Home() {
    const [activeNav, setActiveNav] = useState({
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    })

    const NAVITEMS = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Foods',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Drinks',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Snacks',
        },
        {
            id: '58694a0f-3da2-491f-bd99-145577eb9d72',
            title: 'Souce',
        },
    ];

    const FOODS = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Foods',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Drinks',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Snacks',
        },
        {
            id: '58694a0f-3da2-491f-bd99-145577eb9d72',
            title: 'Souce',
        },
    ];

    const changeActive = (id) => {
        setActiveNav({ id: id })
    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.topIcons}>
                    <TouchableOpacity><Image source={require('../assets/images/hamburger.png')} /></TouchableOpacity>
                    <TouchableOpacity><Image source={require('../assets/images/shopping-cart.png')} /></TouchableOpacity>
                </View>
                <View style={styles.topTextContainer}>
                    <Text style={styles.topText}>Delicious</Text>
                    <Text style={styles.topText}>food for you</Text>
                </View>
                <View style={styles.searchBoxContainer}>
                    <TextInput style={styles.searchBox} />
                    <Image style={styles.searchIcon} source={require('../assets/images/search.png')} />
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <FlatList
                    data={NAVITEMS}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index}) => (
                        <TouchableOpacity
                            onPress={() => changeActive(item.id)}
                            style={[styles.item, activeNav.id == item.id && { borderColor: "#FA4A0C", borderBottomWidth: 2 },index==0&&{marginLeft:60}]}>
                            <Text
                                style={[styles.itemTitle, activeNav.id == item.id && { color: "#FA4A0C" }]}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    )}
                />

                <View style={styles.foodContainer}>
                    <TouchableOpacity style={styles.seeMoreButton}><Text style={styles.seeMoreText}>see more</Text></TouchableOpacity>
                    <FlatList 
                        data={FOODS}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index}) => (
                            <Card 
                                image={require('../assets/images/plate1.png')} 
                                foodTitle="Veggie tomato mix" 
                                foodPrice="N1,900"
                                index={index}
                                />
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
    },
    topContainer: {
        padding: 35,
        paddingBottom:15
    },
    topIcons: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    topTextContainer: {
        marginTop: 15,
    },
    topText: {
        fontSize: 34,
        fontWeight: "bold",
    },
    searchBoxContainer: {
        marginTop: 15,
        position: 'relative'
    },
    searchBox: {
        backgroundColor: "#EFEEEE",
        borderRadius: 30,
        width: "95%",
        fontSize: 17,
        padding: 12,
        paddingLeft: 60,
    },
    searchIcon: {
        position: 'absolute',
        left: 27,
        top: 15
    },

    item: {
        marginRight: 15,
        padding: 15,
    },

    itemTitle: {
        fontSize: 17,
        color: "#9A9A9D",
    },

    seeMoreButton: {
        padding:10,
        alignItems: "flex-end",
    },

    seeMoreText: {
        color: "#FA4A0C",
        fontWeight: "bold",
        fontSize:17,
    },
})
