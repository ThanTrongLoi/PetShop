import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import TabHome from '../screens/TabScreens/TabHome';
import TabFavorite from '../screens/TabScreens/TabFavorite';
import TabOrder from '../screens/TabScreens/TabOrder';
import TabProfile from '../screens/TabScreens/TabProfile';

const Tab = createMaterialBottomTabNavigator();

const MaterialBottomTab = () => {
    return(
        <Tab.Navigator
            initialRouteName = 'TabHome'
            activeColor="#e91e63"
            style={{ backgroundColor: 'red' }}
        >
            <Tab.Screen
                name = 'TabHome'
                component = {TabHome}
                options = {{
                    tabBarLabel: 'Home'
                }}
            />
            <Tab.Screen
                name = 'TabFavorite'
                component = {TabFavorite}
                options = {{
                    tabBarLabel: 'Favorite'
                }}
            />
            <Tab.Screen
                name = 'TabOrder'
                component = {TabOrder}
                options = {{
                    tabBarLabel: 'Order'
                }}
            />
            <Tab.Screen
                name = 'TabProfile'
                component = {TabProfile}
                options = {{
                    tabBarLabel: 'Profile'
                }}
            />
        </Tab.Navigator>
    )
}
export default MaterialBottomTab;