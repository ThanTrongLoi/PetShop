import React, {Component} from 'react';
import {View,
        Text,
        StyleSheet,
        Dimensions,
        TextInput,
        TouchableOpacity} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

export default class FormSignUp extends Component {
    render(){
        return (
            <View style = {styles.container}>
                <TextInput
                    style = {styles.inputBox}
                    placeholder = {'Username'}
                    placeholderTextColor = {'#4f9a94'}
                    underlineColorAndroid = {'rgba(0, 0, 0, 0)'}
                />
                <TextInput
                    style = {styles.inputBox}
                    placeholder = {'Email'}
                    placeholderTextColor = {'#4f9a94'}
                    underlineColorAndroid = {'rgba(0, 0, 0, 0)'}
                />
                <TextInput
                    style = {styles.inputBox}
                    placeholder = {'Password'}
                    secureTextEntry = {true}
                    placeholderTextColor = {'#4f9a94'}
                    underlineColorAndroid = {'rgba(0, 0, 0, 0)'}
                />
                <TextInput
                    style = {styles.inputBox}
                    placeholder = {'RePassword'}
                    secureTextEntry = {true}
                    placeholderTextColor = {'#4f9a94'}
                    underlineColorAndroid = {'rgba(0, 0, 0, 0)'}
                />
                <TouchableOpacity style = {styles.btnSignUp}>
                    <Text style = {styles.txtSingUp}>Singup</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: WIDTH - 55,
        height: 45,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 45,
        paddingHorizontal: 25,
        color: '#004D40',
        fontSize: 18,
        fontWeight: '500',
        marginVertical: 10
    },
    btnSignUp: {
        width: WIDTH - 55,
        height: 45,
        backgroundColor: '#004D40',
        borderRadius: 45,
        justifyContent: 'center',
        marginVertical: 10

    },
    txtSingUp: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    }
})