import React, {Component} from "react";
import {View} from "react-native";
import styles from "./styles";
import PropTypes from './prop-types';
import defaultProps from './default-props';

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
EquilateralTriangle.propTypes = PropTypes;
EquilateralTriangle.defaultProps = defaultProps;