import React, {Component} from 'react';
import {View} from "react-native";
import styles from './styles';
import propTypes from "./prop-types";
import defaultProps from "./default-props";

export default class Triangle extends Component {
    render() {
        return (
            <View style={[styles.triangle, this.props.style]}/>
        );
    }
}
Triangle.propTypes = propTypes;
Triangle.defaultProps = defaultProps;