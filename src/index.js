import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import TabHome from './screens/TabScreens/TabHome';
import TabFavorite from './screens/TabScreens/TabFavorite';
import TabOrder from './screens/TabScreens/TabOrder';
import TabProfile from './screens/TabScreens/TabProfile';


const Tab = createMaterialBottomTabNavigator();

const MainScreen = () => {
    return(
        <Tab.Navigator
            initialRouteName = 'TabHome'
            activeColor="#fff"
            style={{ backgroundColor: '#694fad' }}
        >
            <Tab.Screen
                name = 'TabHome'
                component = {TabHome}
                options = {{
                    tabBarLabel: 'Home',
                    tabBarColor: '#4db6ac'
                }}
            />
            <Tab.Screen
                name = 'TabFavorite'
                component = {TabFavorite}
                options = {{
                    tabBarLabel: 'Favorite',
                    tabBarColor: '#f48fb1'
                }}
            />
            <Tab.Screen
                name = 'TabOrder'
                component = {TabOrder}
                options = {{
                    tabBarLabel: 'Order',
                    tabBarColor: '#007c91'
                }}
            />
            <Tab.Screen
                name = 'TabProfile'
                component = {TabProfile}
                options = {{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#ffccbc'
                }}
            />
        </Tab.Navigator>
    )
}
export default MainScreen;