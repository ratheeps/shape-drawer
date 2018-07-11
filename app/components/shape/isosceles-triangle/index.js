import React, {Component} from "react";
import {View} from "react-native";
import styles from './styles'
import propTypes from "./prop-types";
import defaultProps from './default-props';

export default class IsoscelesTriangle   extends Component {
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
IsoscelesTriangle.propTypes = propTypes;
IsoscelesTriangle.defaultProps = defaultProps;
