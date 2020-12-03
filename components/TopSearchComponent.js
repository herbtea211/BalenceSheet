import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';



export default class TopSearchComponent extends Component {

    constructor(props) {
        super(props)

    }

    render() {

        return (
            <View
                style={styles.topSearchBarStyle}>
                <TouchableHighlight
                    onPress={() => {
                        this.props.setStateShowMenu()
                    }}>
                        <Text>openMenu</Text>
                    </TouchableHighlight>
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    topSearchBarStyle: {
        backgroundColor: '#eaeaea',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

