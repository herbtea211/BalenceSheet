/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FontAwesomeIcon icon={ faCoffee } />
        <Text>I am hugo</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
