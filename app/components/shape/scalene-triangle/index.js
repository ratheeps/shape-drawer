import React, {Component} from "react";
import {View} from "react-native";
import styles from './styles'
import propTypes from './prop-types';
import defaultProps from './default-props';

export default class ScaleneTriangle  extends Component {
    getTriangleStyle(){
        return {
            borderLeftWidth: this.props.properties.width / 4,
            borderRightWidth: this.props.properties.width - (this.props.properties.width / 3),
            borderBottomWidth: this.props.properties.height,
        }
    }

    render() {
        return (
            <View style={[styles.triangle, this.getTriangleStyle()]} />
        );
    }
}

ScaleneTriangle.propTypes = propTypes;
ScaleneTriangle.defaultProps = defaultProps;