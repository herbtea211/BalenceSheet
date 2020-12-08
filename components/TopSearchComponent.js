import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'


export class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchBarText: ''
        }

    }

    render() {

        return (
            <>
                <TextInput
                style={ styles.searchBarStyle }
                placeholder='我想找...'
                onChangeText={(value) => {
                    this.setState({searchBarText: value})
                }}
                ></TextInput>
            </>
        )
    }
}

export class MenuBtnComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    _createLineComponent() {

        const lineArray = []

        for(let i = 0;i < 2;i++) {

            const _marginTop = (i !== 0) ? 7 : 0

            let _component = <View style={[styles.lineStyle, { marginTop: _marginTop }]} key={i}></View>

            lineArray.push(_component)

        }

        return lineArray
    }

    render() {
        return (
            <>
                {this._createLineComponent()}
            </>
            
        )
    }
}



export default class TopSearchComponent extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <View
                style={styles.topSearchBarStyle}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.setStateShowMenu()
                    }}>
                        <MenuBtnComponent/>
                    </TouchableOpacity>
                <SearchBar/>
                <TouchableOpacity
                    onPress={() => {
                        this.props.setStateShowCar()
                    }}>
                        <FontAwesomeIcon icon={ faCommentDots }/>
                    </TouchableOpacity>
            </View>
        )
        
    }
}

const paddingHor = 10
const topSearchBarStyle = 70
const searchBarMarginHor = 10

const styles = StyleSheet.create({
    topSearchBarStyle: {
        height: topSearchBarStyle,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: paddingHor,
        paddingRight: paddingHor
    },
    lineStyle: {
        width: 30,
        height: 2,
        backgroundColor: '#000',
        borderRadius: 100
    },
    searchBarStyle: {
        height: topSearchBarStyle - 20,
        borderColor: '#f6f6f6',
        borderWidth: 1,
        flex: 1,
        marginLeft: searchBarMarginHor,
        marginRight: searchBarMarginHor,
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#f6f6f6'
    }
})







