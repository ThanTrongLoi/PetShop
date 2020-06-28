import React, {Component} from 'react';
import {View,
        StyleSheet} from 'react-native';

//import Logo from './src/component/Logo';
import Login from './src/pages/Login';

export default class App extends Component {
  render(){
    return (
      <View style = {styles.container}>
        {/* <Logo/> */}
        <Login/>
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