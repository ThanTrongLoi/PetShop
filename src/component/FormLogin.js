import React, {Component} from 'react';
import {View,
        Text,
        StyleSheet,
        TextInput,
        Dimensions,
        TouchableOpacity} from 'react-native';

const {width: WIDTH} = Dimensions.get('window')

export default class FormLogin extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <TextInput style = {styles.inputBox}
                    placeholder = {'Email'}
                    placeholderTextColor = {'#4f9a94'}
                    underlineColorAndroid = {'rgba(0, 0, 0, 0)'}
                />
                <TextInput style = {styles.inputBox}
                    placeholder = {'Password'}
                    placeholderTextColor = {'#4f9a94'}
                    secureTextEntry = {true}
                    underlineColorAndroid = {'rgba(0, 0, 0, 0)'}
                />

                <TouchableOpacity style = {styles.btnLogin}>
                    <Text style = {styles.txtLogin}>
                        Login
                    </Text>
                </TouchableOpacity> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        paddingHorizontal: 25,
        color: '#4f9a94',
        fontSize: 18,
        fontWeight: '500',
        marginVertical: 10
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        justifyContent: 'center',
        backgroundColor: '#4f9a94',
        marginVertical: 10,
    },
    txtLogin: {
        fontSize: 18,
        fontWeight: '500',
        color: '#FFFFFF',
        textAlign: 'center'
    }
})