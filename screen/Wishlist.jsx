import React, {useState} from 'react';
import {View, Text, Animated, StyleSheet, Pressable} from 'react-native'

export function Wishlist(){
    const [ballAnimation, setBallAnimation] = useState(new Animated.Value(-200))
    const [ballColor, setBallColor] = useState(new Animated.Value(0))


    const animateBall = ()=>{
        Animated.parallel([
            Animated.timing(ballAnimation, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),

            Animated.timing(ballColor, {
                    toValue: 1,
                    duration: 3000,
                    useNativeDriver: true,
            })]).start()
    }


    const ballAnimationStyle = {
        transform: [
            {translateY:ballAnimation}
        ],
        opacity: ballColor,
    }

    return (
        <View style={styles.container}>
            <Pressable style={{backgroundColor:"blue", padding:10,margin:30}} onPress={()=>animateBall()}><Text>Border Radius</Text></Pressable>
            <Animated.View style={[styles.ball, ballAnimationStyle]}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },

    ball:{
        width:100,
        height:100,
        backgroundColor:"red"
    }
})