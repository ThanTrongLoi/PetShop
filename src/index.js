import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import TabHome from './screens/TabScreens/TabHome';
import TabFavorite from './screens/TabScreens/TabFavorite';
import TabOrder from './screens/TabScreens/TabOrder';
import TabProfile from './screens/TabScreens/TabProfile';
import Icon from 'react-native-vector-icons/Ionicons'


const Tab = createMaterialBottomTabNavigator();

const MainScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName='TabHome'
            activeColor="#000"
            style={{ backgroundColor: '#694fad' }}
        >
            <Tab.Screen
                name='TabHome'
                component={TabHome}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#4db6ac',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home-outline" color={color} size={26}></Icon>
                    )
                }}
            />
            <Tab.Screen
                name='TabFavorite'
                component={TabFavorite}
                options={{
                    tabBarLabel: 'Favorite',
                    tabBarColor: '#f48fb1',
                    headerShow: true
                }}
            />
            <Tab.Screen
                name='TabOrder'
                component={TabOrder}
                options={{
                    tabBarLabel: 'Order',
                    tabBarColor: '#007c91'
                }}
            />
            <Tab.Screen
                name='TabProfile'
                component={TabProfile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#ffccbc'
                }}
            />
        </Tab.Navigator>
    )
}
export default MainScreen;