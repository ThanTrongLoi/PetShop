import React from 'react'
import {View, 
        Text, 
        StyleSheet,
        SafeAreaView } from 'react-native'
import LogoShop from '../../component/Logo'
import LoginForm from './LoginForm'
import ButtonLogin from './Button'
import { useNavigation } from '@react-navigation/native'


const LoginScreens = () => {
    

    const navigation = useNavigation();

    onGoToMainScreen = () => navigation.navigate('MainScreen')

    return (
        <SafeAreaView style = {styles.container}>
            <LogoShop style = {styles.form}/>
            <LoginForm style = {styles.form}/>
            <ButtonLogin 
                style = {styles.form}
                onGoToMainScreen = {this.onGoToMainScreen}
                />
        </SafeAreaView>
    )
}

export default LoginScreens;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4db6ac'
    },
    form: {
        flex: 1
    }
})