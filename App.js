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

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>I am hugo</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
