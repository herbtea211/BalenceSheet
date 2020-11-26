/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  SafeAreaView
} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      BottomTab: null
    }

  } // constructor end

  createBottomTabNavigator() {
   
    const bottomTab = createBottomTabNavigator()

    return bottomTab
  }

  indexScreen() {
    return (
      <Text>home</Text>
    )
  }

  setScreen() {
    return (
      <Text>Account</Text>
    )
  }

  topSearch() {
    return (
      <Text>topSearch</Text>
    )
  }

  componentDidMount() {
    
  }

  render() {

    const BottomTab = this.createBottomTabNavigator()
    
    return (
      <>
        <StatusBar/>
        <SafeAreaView style={{flex: 1,backgroundColor: '#eaeaea'}}>
          <View>
            <Text>topSearch</Text>
          </View>
          <NavigationContainer>
              <BottomTab.Navigator>
                <BottomTab.Screen name='首頁' component={ this.indexScreen }></BottomTab.Screen>
                <BottomTab.Screen name='設定' component={ this.setScreen }></BottomTab.Screen>
              </BottomTab.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </>
      
    )
  }
} // class App end
