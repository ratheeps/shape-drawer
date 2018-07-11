import React, {Component} from "react";
import {Header} from 'react-native-elements'
import colors from '../../utils/colors'

export default class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Shape Drawer'
        };
    }

    render() {
        return (
            <Header centerComponent={{ text: this.state.title , style: { color: colors.lightText } }}/>
        );
    }
}