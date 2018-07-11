import React, {Component} from "react";
import {View} from "react-native";
import propTypes from "./prop-types";
import styles from "./styles";
import defaultProps from './default-props';

export default class Square  extends Component {
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
Square.propTypes = propTypes;
Square.defaultProps = defaultProps;