import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, Image, View, FlatList, TouchableOpacity } from 'react-native';

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

    const changeActive = (id) => {
        setActiveNav({ id: id })
    }

    return (
        <SafeAreaView style={styles.container}>
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
                    style={styles.navItemsContainer}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => changeActive(item.id)}
                            style={[styles.item, activeNav.id == item.id && { borderColor: "#FA4A0C", borderBottomWidth: 2 }]}>
                            <Text
                                style={[styles.itemTitle, activeNav.id == item.id && { color: "#FA4A0C" }]}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        padding: 40,
    },
    topIcons: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    topTextContainer: {
        marginTop: 20,
    },
    topText: {
        fontSize: 34,
        fontWeight: "bold",
    },
    searchBoxContainer: {
        marginTop: 20,
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

    bottomContainer: {
        alignItems: 'flex-end',
    },

    navItemsContainer: {
        width: "85%",
    },

    item: {
        marginRight: 15,
        padding: 15,
    },

    itemTitle: {
        fontSize: 17,
        color: "#9A9A9D",
    }
})
