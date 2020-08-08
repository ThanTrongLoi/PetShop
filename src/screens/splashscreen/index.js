import React, { useEffect } from 'react'
import {Text, 
        View,
        Image,
        StyleSheet } from 'react-native'

import {DimensionApp} from '../../unit/dimensions'

import SplashLogo from '../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native'

const  Splash = () => {
    
    useEffect(() => {
        setTimeout(()=>{
            goToLoginScreen();
        }, 3000)
    }, [])

    const navigation =  useNavigation();

    const goToLoginScreen = () => {
        navigation.navigate('LoginScreens')
    }

    return (
        <View style = {styles.container}>
            <Image 
                style = {{  width: DimensionApp.getWIDTH() - 10,
                            height: DimensionApp.getWIDTH()-10}}
                source = {SplashLogo}/>
        </View>
    )
}
export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4db6ac'
    },
    
})