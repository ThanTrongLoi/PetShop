import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import { DimensionApp } from '../../unit/dimensions';

const HomeCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cardBox}>
                <View style={styles.cardTop}>
                    <TouchableOpacity
                        style={styles.cardStyle}
                    // onPress = {}
                    >
                        <View style={styles.cardLeft}>
                            <Image
                                style={styles.imageT}
                                source={require('../../assets/iconsimage/iconpet.png')}
                            />
                            <Text style={styles.cardTitle}>Pet</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cardStyle}
                    // onPress = {}    
                    >
                        <View style={styles.cardRight}>
                            <Image
                                style={styles.imageT}
                                source={require('../../assets/iconsimage/iconfood.png')}
                            />
                            <Text style={styles.cardTitle}>Pet Food</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardTop}>
                    <TouchableOpacity
                        style={styles.cardStyle}
                    // onPress = {}    
                    >
                        <View style={styles.cardLeft}>
                            <Image
                                style={styles.imageT}
                                source={require('../../assets/iconsimage/icongrooming.png')}
                            />
                            <Text style={styles.cardTitle}>Grooming</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cardStyle}
                    // onPress = {}    
                    >
                        <View style={styles.cardRight}>
                            <Image
                                style={styles.imageT}
                                source={require('../../assets/iconsimage/iconplay.png')}
                            />
                            <Text style={styles.cardTitle}>Play</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardTop}>
                    <TouchableOpacity
                        style={styles.cardStyle}
                    // onPress = {}    
                    >
                        <View style={styles.cardLeft}>
                            <Image
                                style={styles.imageT}
                                source={require('../../assets/iconsimage/iconhouse.png')}
                            />
                            <Text style={styles.cardTitle}>House</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cardStyle}
                    // onPress = {}    
                    >
                        <View style={styles.cardRight}>
                            <Image
                                style={styles.imageT}
                                source={require('../../assets/iconsimage/icontravel.png')}
                            />
                            <Text style={styles.cardTitle}>Travel Equipmnet</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default HomeCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    cardBox: {
        flex: 1,
        flexDirection: 'column',
        marginVertical: 2,
        borderRadius: 16,
        shadowColor: '#222',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
    },
    cardTop: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        backgroundColor: '#fff',
        padding: 10,


    },
    cardStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: DimensionApp.getHEIGHT() / 4,
        borderRadius: 8,
        marginRight: 3,
        backgroundColor: '#ffccbc',
        marginHorizontal: 5
    },
    cardLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    imageT: {
        width: 50,
        height: 50
    },
})