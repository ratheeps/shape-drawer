import React, {Component} from 'react';
import {View} from "react-native";
import styles from './styles';
export default class Triangle extends Component {
    render() {
        return (
            <View style={[styles.triangle, this.props.style]}/>
        );
    }
}