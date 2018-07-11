import React, {Component} from "react";
import {View} from "react-native";
import styles from "./styles";

export default class EquilateralTriangle  extends Component {
    getTriangleStyle(){
        return {
            borderLeftWidth: this.props.properties.length,
            borderRightWidth: this.props.properties.length,
            borderBottomWidth: this.props.properties.length,
        }
    }

    render() {
        return (
            <View style={[styles.triangle, this.getTriangleStyle()]} />
        );
    }
}