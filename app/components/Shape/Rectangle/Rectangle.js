import React, {Component} from "react";
import {View} from "react-native";
import styles from "./styles";

export default class Rectangle extends Component {
    getRectangleStyle(){
        return {
            width: this.props.properties.width,
            height: this.props.properties.height,
        }
    }
    render() {
        return (
            <View style={[styles.rectangle, this.getRectangleStyle()]} />
        );
    }
}