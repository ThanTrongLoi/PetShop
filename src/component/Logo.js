import React, {Component} from 'react';
import {View,
        Text,
        Image,
        StyleSheet} from 'react-native';

export default class Logo extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <Image
                    style = {{width: 150, height: 150}}
                    source = {require('../images/logo.png')}
                />
                <Text style = {styles.logoText}>
                    PetShop
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoText: {
        marginVertical: 15,
        fontSize: 30,
        color: 'rgba(255, 255, 255, 1)'
    }
})