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

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faShoppingBasket, faCloudUploadAlt, faExclamationCircle, faUser } from '@fortawesome/free-solid-svg-icons'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePageComponent from './ButtomTabItems/HomePageComponent'
import HaveBuyPageComponent from './ButtomTabItems/HaveBuyPageComponent'
import SalePageComponent from './ButtomTabItems/SalePageComponent'
import NoticePageComponent from './ButtomTabItems/NoticePageComponent'
import MemberPageComponent from './ButtomTabItems/MemberPageComponent'


export class BottomTabNavigator extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {

        const nameConfig = ['Home', 'Buy', 'Sale', 'Notice', 'Member']
        const componentConfig = [HomePageComponent, HaveBuyPageComponent, SalePageComponent, NoticePageComponent, MemberPageComponent]
        const iconConfig = [faHome, faShoppingBasket, faCloudUploadAlt, faExclamationCircle, faUser]

        const screenConfig = []

        const BottomTab = createBottomTabNavigator()

        for(let i = 0;i < nameConfig.length;i++) {
            let object = <BottomTab.Screen
                            name={nameConfig[i]}
                            component={ componentConfig[i]}
                            key={nameConfig[i]}
                            options={({ route }) => ({
                                tabBarIcon: ({ focused, color, size }) => {
                                  return <FontAwesomeIcon icon={ iconConfig[i] }/>
                                }
                              })}
                            >
                            </BottomTab.Screen>
            screenConfig.push(object)
        }

        return (
            <BottomTab.Navigator>
                { screenConfig }
            </BottomTab.Navigator>
        )
    }
}




export default class BottomTab extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        
        return (
            <NavigationContainer>
                <BottomTabNavigator/>
            </NavigationContainer>
        )
    }
}