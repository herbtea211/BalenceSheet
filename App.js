
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';

import BottomTab from './components/BottomTabComponent'
import TopSearchComponent from './components/TopSearchComponent'
import MenuComponent from './components/MenuComponent'

export default class App extends React.Component {



  constructor(props) {
    super(props)



  } // constructor end

  state = {
    data: 0,
    menuListener: null,
    showMenu: false,
    showCar: false
  }

  _setStateShowMenu() {
    this.setState({showMenu: !this.state.showMenu})
  }

  _setStateShowCar() {
    this.setState({showCar: !this.state.showCar})
  }


  render() {

    return (
      <>
        <StatusBar/>
        <SafeAreaView
        style={styles.flex_1}>
          <TopSearchComponent
          setStateShowCar={this._setStateShowCar.bind(this)}
          setStateShowMenu={this._setStateShowMenu.bind(this)}/>
          <BottomTab/>
          <MenuComponent
          openToRight={true}
          isShowMenu={this.state.showMenu}
          setStateShowMenu={this._setStateShowMenu.bind(this)}/>
          <MenuComponent
          openToRight={false}
          isShowMenu={this.state.showCar}
          setStateShowMenu={this._setStateShowCar.bind(this)}/>
        </SafeAreaView>
      </>
    )
  }

  componentDidMount() {

  }

  componentWillUnmount() {
   
  }
} // class App end

const styles = StyleSheet.create({
  flex_1: {
    flex: 1,
    position: 'relative'
  }
})
