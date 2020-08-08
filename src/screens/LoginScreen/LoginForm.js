import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DimensionApp } from '../../unit/dimensions'

const LoginForm = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.inputForm}>
                <Text style = {styles.textINPUT}>EmailID</Text>
                <TextInput
                    style = {styles.input}
                    placeholder={'EmailID'}
                    placeholderTextColor={'#4f9a94'}
                    underlineColorAndroid='transparent'
                />
            </View>
            <View>
                <Text style = {styles.textINPUT}>PassWord</Text>
                <TextInput
                    style = {styles.input}
                    placeholder={'PassWord'}
                    secureTextEntry = {true}
                    placeholderTextColor={'#4f9a94'}
                    underlineColorAndroid='transparent'
                />
                <TouchableOpacity style = {{
                            alignItems: 'flex-end'
                        }}>
                    <Text style = {[styles.textINPUT, {marginRight: 30}]} >Forgot PassWord?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: DimensionApp.getWIDTH() -55,
        height: 45,
        color: '#00867d',
        backgroundColor: '#b2fef7',
        borderRadius: 25,
        paddingLeft: 25,
        fontSize: 18,
        marginHorizontal: 25,
        marginVertical: 10
    },
    textINPUT: {
        fontSize: 18,
        fontWeight: '500',
        paddingLeft: 30
    }
})