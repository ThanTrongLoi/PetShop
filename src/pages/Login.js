import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity,
        } from 'react-native';

import Logo from '../component/Logo';
import FormLogin from '../component/FormLogin';

const Login = (props) => {
    return (
        <View style = {styles.container}>
           <Logo/>
           <FormLogin/>
           <View style = {styles.signupTextContent}>
               <Text style = {styles.signupText}>
                   Don't have an account yet? 
               </Text>
               <TouchableOpacity 
                    onPress = {()=>props.navigation.navigate('SignupScreen')}>
                    <Text style = {styles.signupTextBtn}> Signup</Text>
               </TouchableOpacity>
                
           </View> 
       </View>
   )
}

export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupTextContent:{
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 30

    },
    signupText: {
        color: '#004D40',
        fontSize: 18,
    },
    signupTextBtn: {
        color: '#FFFFFF',
        fontSize: 19,
        fontWeight: '500'
    }
})
