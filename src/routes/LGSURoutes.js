import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigation} from 'react-navigation-stack';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const lgsuNavigator = createStackNavigation(
    {
        LoginScreen: {
            screen: Login,
        },
        SignupScreen: {
            screen: Signup
        },
    },
    {
        initialRouteName: 'LoginScreen',
    },
);

const lgsuContainer = createAppContainer(stackNavigation);

class LGSURoutes extends Component {
    render() {
        return (
            <lgsuContainer/>
        )
    }
}

export default LGSURoutes;