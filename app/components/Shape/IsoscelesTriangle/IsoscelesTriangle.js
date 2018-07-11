import React, {Component} from "react";
import {View} from "react-native";
import styles from './styles'

export default class IsoscelesTriangle   extends Component {
    /**
     * generate triangle style
     * @returns {{borderLeftWidth: number, borderRightWidth: number, borderBottomWidth: *}}
     */
    getTriangleStyle(){
        return {
            borderLeftWidth: this.props.properties.width / 2,
            borderRightWidth: this.props.properties.width / 2,
            borderBottomWidth: this.props.properties.height,
        }
    }

    render() {
        return (
            <View style={[styles.triangle, this.getTriangleStyle()]} />
        );
    }
}