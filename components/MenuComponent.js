import 'react-native-gesture-handler';
import React from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    Text,
    View,
    Platform,
    NativeModules
} from 'react-native';




export default class MenuComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            moveAnim: new Animated.ValueXY({x: -100, y: -200})
        }

    }

    setStatusBarHeight() {
        const { StatusBarManager } = NativeModules
        return (Platform.OS === 'ios') ? StatusBarManager.HEIGHT : 0
    }
 

    render() {

        return (
            <View
                style={[styles.MenuStyle, {top: this.setStatusBarHeight(), backgroundColor: '#000000'}]}
                >
                    <Text
                        style={{color: 'red'}}
                        >MenuComponent</Text>
                    <Animated.View
                    style={{width: 200, height: 200, backgroundColor: 'blue', transform: this.state.moveAnim.getTranslateTransform()}}
                    >

                    </Animated.View>
                </View>
        )
    }

    componentDidMount() {
        Animated.spring(
            this.state.moveAnim,
            {
                toValue: {x: 200, y: 200},
                duration: 10000,
                useNativeDriver: true
            }
        ).start()
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