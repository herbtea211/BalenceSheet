import 'react-native-gesture-handler';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    NativeModules
} from 'react-native';




export default class MenuComponent extends React.Component {

    constructor(props) {
        super(props)

        console.log('here2', this.props.isShowMenu)

    }

    state = {
        statusBarH: 0
        
    }

    setStatusBarHeight() {
        const { StatusBarManager } = NativeModules
        return (Platform.OS === 'ios') ? StatusBarManager.HEIGHT : 0
    }
 

    render() {

        console.log('here3', this.props.isShowMenu)

        let bgColor = this.props.isShowMenu ? 'red' : 'blue'

        


        return (
            <View
                style={[styles.MenuStyle, {top: this.setStatusBarHeight(), backgroundColor: '#000000'}]}
                >
                    <Text
                        style={{color: 'red'}}
                        >MenuComponent</Text>
                </View>
        )
    }

    componentDidMount() {
        // DeviceEventEmitter.addListener
    }
}

const styles = StyleSheet.create({
    MenuStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 10000
    }
})