import React, {Component} from "react";
import {View} from "react-native";
import styles from "./styles";

export default class Square  extends Component {
    /**
     * generate Square styles
     * @returns {{width: *, height: *}}
     */
    getSquareStyle(){
        return {
            width: this.props.properties.length,
            height: this.props.properties.length,
        }
    }
    render() {
        return (
            <View style={[styles.square, this.getSquareStyle()]} />
        );
    }
}