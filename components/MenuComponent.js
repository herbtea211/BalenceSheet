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
    Button,
    TouchableOpacity
} from 'react-native';




export default class MenuComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redValue: new Animated.Value(0),
            blueValue : new Animated.Value(0),
        };

        this.staggerAnimated = Animated.stagger(2000,
            [
                Animated.timing(
                    this.state.redValue,
                    {
                        toValue: 1,
                        duration: 5000,
                        easing: Easing.in,
                    }
                ),
                Animated.timing(
                    this.state.blueValue,
                    {
                        toValue: 1,
                        duration: 5000,
                        easing: Easing.in,
                    }
                ),
            ]
        );
    }

    _startAnimated() {
        this.staggerAnimated.start();
    }

    render(){

        const redMarginLeft = this.state.redValue.interpolate({
            inputRange: [0,1],
            outputRange: [0,200]
        });

        const blueMarginLeft = this.state.blueValue.interpolate({
            inputRange: [0,1],
            outputRange: [0,200]
        });

        return (
            <View style={styles.mainStyle}>

                {/*// 红色*/}
                <Animated.View
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor:'red',
                        marginLeft:redMarginLeft,
                    }}
                >
                </Animated.View>


                {/*// 蓝色*/}
                <Animated.View
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor:'blue',
                        marginLeft:blueMarginLeft,
                    }}
                >
                </Animated.View>

                <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
                    <Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>点击开始动画</Text>
                </TouchableOpacity>
            </View>
        );
    }

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         moveAnim: new Animated.ValueXY(),
    //         winSize: {},
    //         // whileBox: new Animated.Value(),
    //         // redBox: new Animated.Value()
    //     }


    //     this.state.winSize.w = Dimensions.get('window').width
    //     this.state.winSize.h = Dimensions.get('window').height

    // }

    // _getStatusBarHeight() {
    //     const { StatusBarManager } = NativeModules
    //     return (Platform.OS === 'ios') ? StatusBarManager.HEIGHT : 0
    // }

    // _test() {



    //             // Animated.timing(
    //             //     this.state.whileBox,
    //             //     {
    //             //         toValue: 1,
    //             //         useNativeDriver: true
    //             //     }
    //             // )
    //             // Animated.timing(
    //             //     this.state.redBox,
    //             //     {
    //             //         toValue: 1,
    //             //         useNativeDriver: true
    //             //     }
    //             // )

    // }

    // _displayDrawerMenu(open) {

    //     let moveX = open ? 0 : -(this.state.winSize.w)


    //     Animated.spring(
    //         this.state.moveAnim,
    //         {
    //             toValue: {x: moveX, y: 0},
    //             overshootClamping: !open,
    //             useNativeDriver: true
    //         }
    //     ).start()
    // }
 

    // render() {

    //     this._displayDrawerMenu(this.props.isShowMenu)

    //    const testAnim = new Animated.Value()

       



    //     return (
    //         <>
    //         <Animated.View
    //         style={
    //             [
    //                 styles.MenuStyle,
    //                 {
    //                     top: this._getStatusBarHeight(),
    //                     width: this.state.winSize.w,
    //                     height: this.state.winSize.h - this._getStatusBarHeight(),
    //                     backgroundColor: '#000000',
    //                     transform: this.state.moveAnim.getTranslateTransform()
    //                 }
    //             ]}
    //         >
    //             <Text
    //             style={{color: 'red'}}
    //             >MenuComponent</Text>
    //             <Button
    //             title='back'
    //             onPress={() => {
    //                 this.props.setStateShowMenu()
    //             }}
    //             ></Button>
    //             </Animated.View>

    //             <Animated.View
    //             style={{width: 200, height: 200, backgroundColor: '#fff', opacity: this.state.whileBox}}
    //             >
    //             </Animated.View>
    //             {/* <Animated.View
    //             style={{width: 200, height: 200, backgroundColor: 'red', opacity: this.state.redBox}}
    //             >
    //             </Animated.View> */}

           
    //         </>
    //     )
    // }

    // componentDidMount() {

    // }
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





