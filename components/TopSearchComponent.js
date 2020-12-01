import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {
  DeviceEventEmitter,
  Text,
  TouchableHighlight,
  View,
  Button
} from 'react-native';



export default class TopSearchComponent extends Component {

    state = {
       
    }

    constructor(props) {
        super(props)

    }

    emitMenuComponent() {
        DeviceEventEmitter.emit('toggleMenu')
    }

    render() {

        return (
            <View>
                <TouchableHighlight
                    onPress={this.emitMenuComponent}
                    >
                    <Text>menu</Text>
                    </TouchableHighlight>
            </View>
        )
        
    }
}