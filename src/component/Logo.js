import React, { Component } from 'react'
import {Text, 
        View,
        Image,
        StyleSheet } from 'react-native'

import {DimensionApp} from '../unit/dimensions'

import LogoShop from '../assets/images/logo.png'

const  Splash = () => {
    return (
        <View style = {styles.container}>
            <Image 
                style = {{  width: DimensionApp.getWIDTH() - 100,
                            height: DimensionApp.getWIDTH()-100}}
                source = {LogoShop}/>
        </View>
    )
}
export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})