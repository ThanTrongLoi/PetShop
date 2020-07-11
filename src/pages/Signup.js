import React, {Component} from 'react';
import {View,
        Text,
        StyleSheet, 
        TouchableOpacity} from 'react-native';

import Logo from '../component/Logo';
import FormSignUp from '../component/FormSignUp';

const Signup = (props) => {
    return(
        <View style = {styles.container}>
            <Logo/>
            <FormSignUp/>
            <View style = {styles.btnSingUpContent}>
                <Text style = {styles.signinText}>Already have an account?</Text>
                <TouchableOpacity>
                    <Text style = {styles.singinTextBtn}> Sing in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnSingUpContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingVertical: 30,
    },
    signinText: {
        color: '#004D40',
        fontSize: 18,
    },
    singinTextBtn: {
        color: '#FFFFFF',
        fontSize: 19,
        fontWeight: '500'
    },
})