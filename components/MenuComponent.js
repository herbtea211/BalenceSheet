import 'react-native-gesture-handler';
import React from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    Text,
    View,
    Platform,
    NativeModules,
    Dimensions,
    Button
} from 'react-native';




export default class MenuComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            moveAnim: new Animated.ValueXY(),
            winSize: {}
        }

        this.state.winSize.w = Dimensions.get('window').width
        this.state.winSize.h = Dimensions.get('window').height
    }

    _getStatusBarHeight() {
        const { StatusBarManager } = NativeModules
        return (Platform.OS === 'ios') ? StatusBarManager.HEIGHT : 0
    }

    _displayDrawerMenu(open) {

        let moveX = open ? 0 : -(this.state.winSize.w)

        Animated.spring(
            this.state.moveAnim,
            {
                toValue: {x: moveX, y: 0},
                duration: 500,
                useNativeDriver: true
            }
        ).start()
    }
 

    render() {

        this._displayDrawerMenu(this.props.isShowMenu)

        return (
            <Animated.View
            style={
                [
                    styles.MenuStyle,
                    {
                        top: this._getStatusBarHeight(),
                        width: this.state.winSize.w,
                        height: this.state.winSize.h - this._getStatusBarHeight(),
                        backgroundColor: '#000000',
                        transform: this.state.moveAnim.getTranslateTransform()
                    }
                ]}
            >
                <Text
                style={{color: 'red'}}
                >MenuComponent</Text>
                <Button
                title='back'
                onPress={() => {
                    this.props.setStateShowMenu()
                }}
                ></Button>

                </Animated.View>
        )
    }

    componentDidMount() {

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