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

import BottomTab from './components/BottomTabComponent'
import TopSearchComponent from './components/TopSearchComponent'

export default class App extends React.Component {

  constructor(props) {
    super(props)

  } // constructor end



  componentDidMount() {
    
  }

  render() {

    return (
      <>
        <StatusBar/>
        <SafeAreaView
          style={styles.flex_1}
          >
          <View style={{height: 70, backgroundColor: '#f6f6f6'}}>
            <TopSearchComponent/>
          </View>
          <View
            style={styles.flex_1}
            >
            <BottomTab/>
          </View>
        </SafeAreaView>
      </>
    )
  }
} // class App end

const styles = StyleSheet.create({
  flex_1: {
    flex: 1,
    backgroundColor: '#eaeaea'
  }
})
