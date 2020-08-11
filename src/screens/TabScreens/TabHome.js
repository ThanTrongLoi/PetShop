import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView
} from 'react-native'
import HomeCard from '../../component/TabScreen/HomeCard'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


// const imageT = []
// const wordTitle = ['Pet', 'Pet Food', 'Grooming', 'Play', 'House', 'Travel Equipments']


const TabHome = () => {

    const navigation = useNavigation();

    onTabPetScreen = () => navigation.navigate() // Navigation PetScreen
    onTabFoodScreen = () => navigation.navigate() // Navigation FoodScreen
    onTabGroomingScreen = () => navigation.navigate() // Navigation GroomingScreen
    onTabPlayScreen = () => navigation.navigate() // Navigation PlayScreen
    onTabHouseScreen = () => navigation.navigate() // Navigation HouseScreen
    onTabTravelScreen = () => navigation.navigate() // Navigation TravelScreen

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.listCard}>
                    <HomeCard
                        onTabPetScreen={this.onTabPetScreen}
                        onTabFoodScreen={this.onTabFoodScreen}
                        onTabGroomingScreen={this.onTabGroomingScreen}
                        onTabPlayScreen={this.onTabPlayScreen}
                        onTabHouseScreen={this.onTabHouseScreen}
                        onTabTravelScreen={this.onTabTravelScreen}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff'
    },
    listCard: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
})
export default TabHome;