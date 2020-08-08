import React, { Component } from 'react'
import {Text, 
        View, 
        StyleSheet, 
        SafeAreaView} from 'react-native'
import Card from '../../component/TabScreen/Card'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


// const imageT = []
// const wordTitle = ['Pet', 'Pet Food', 'Grooming', 'Play', 'House', 'Travel Equipments']


const TabHome = () =>  {

    const navigation = useNavigation();

    onTabPetScreen = () => navigation.navigate()
    onTabFoodScreen = () => navigation.navigate()
    onTabGroomingScreen = () => navigation.navigate()
    onTabPlayScreen = () => navigation.navigate()
    onTabHouseScreen = () => navigation.navigate()
    onTabTravelScreen = () => navigation.navigate()

        return (
            <SafeAreaView style = {styles.container}>
                <ScrollView >
                <View style = {styles.listCard}>
                    {/* {
                        wordTitle.map(e => {
                            return (
                                <Card title = {e}/>
                            )
                        })
                    } */}
                    <Card
                        onTabPetScreen = {this.onTabPetScreen}
                        onTabFoodScreen = {this.onTabFoodScreen}
                        onTabGroomingScreen = {this.onTabGroomingScreen}
                        onTabPlayScreen = {this.onTabPlayScreen}
                        onTabHouseScreen = {this.onTabHouseScreen}
                        onTabTravelScreen = {this.onTabTravelScreen}
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