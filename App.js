
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableHighlight,
  DeviceEventEmitter
} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';

// import BottomTab from './components/BottomTabComponent'
import TopSearchComponent from './components/TopSearchComponent'
import MenuComponent from './components/MenuComponent'

export default class App extends React.Component {



  constructor(props) {
    super(props)



  } // constructor end

  state = {
    data: 0,
    menuListener: null,
    showMenu: false
  }


  render() {

    return (
      <>
        <StatusBar/>
        <SafeAreaView
          style={styles.flex_1}
          >
            <TouchableHighlight
            onPress={() => {
              this.setState({showMenu: !this.state.showMenu})
            }}
            >
              <Text>open</Text>
            </TouchableHighlight>
            <TopSearchComponent/>
            <MenuComponent
              isShowMenu={this.state.showMenu}
              />
          
        </SafeAreaView>
      </>
    )
  }

  componentDidMount() {

  //   this.state.menuListener = DeviceEventEmitter.addListener('toggleMenu', () => {
  //     this.setState({ showMenu: !this.state.showMenu })
  //     console.log('this.state.showMenu', this.state.showMenu)
  // })

    
  }

  componentWillUnmount() {
    // this.state.menuListener.remove()
  }
} // class App end

const styles = StyleSheet.create({
  flex_1: {
    flex: 1,
    position: 'relative'
  }
})
