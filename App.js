import React, {Component} from 'react';
import {View,
        StyleSheet,} from 'react-native';

import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

export default class App extends Component {
  render(){
    return (
      <View style = {styles.container}>
        <Login/>
        {/* <Signup/> */}
        {/* <LoginStack/> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#80cbc4',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})