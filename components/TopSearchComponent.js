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
    }

    render() {

        return (
            <View>
                <TouchableHighlight
                    onPress={() => {
                        this.props.setStateShowMenu()
                    }}
                    >
                        <Text>openMenu</Text>
                    </TouchableHighlight>
            </View>
        )
        
    }
}

