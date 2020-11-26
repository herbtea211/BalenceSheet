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
import HomePageComponent from './ButtomTabItems/HomePageComponent'
import HaveBuyPageComponent from './ButtomTabItems/HaveBuyPageComponent'
import SalePageComponent from './ButtomTabItems/SalePageComponent'
import NoticePageComponent from './ButtomTabItems/NoticePageComponent'
import MemberPageComponent from './ButtomTabItems/MemberPageComponent'




export default class BottomTab extends React.Component {
    constructor(props) {
        super(props)

    }

    bottomTabPageGroup() {
        const BottomTab = createBottomTabNavigator()
        const nameConfig = ['Home', 'Buy', 'Sale', 'Notice', 'Member']
        const componentConfig = [HomePageComponent, HaveBuyPageComponent, SalePageComponent, NoticePageComponent, MemberPageComponent]

        const screenConfig = []

        for(let i = 0;i < nameConfig.length;i++) {
            console.log('nameConfig=>', nameConfig[i])
            let object = <BottomTab.Screen name={nameConfig[i]} component={ componentConfig[i]} key={i}></BottomTab.Screen>
            screenConfig.push(object)
        }

        return (
            <BottomTab.Navigator>
                {screenConfig}
            </BottomTab.Navigator>

        )
    }

    render() {
        return (
            <NavigationContainer>
                {this.bottomTabPageGroup()}
            </NavigationContainer>
        )
    }
}