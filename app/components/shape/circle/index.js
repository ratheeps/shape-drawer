import React, {Component} from "react";
import {View} from "react-native";
import colors from "../../../utils/colors";
import propTypes from './prop-types';
import defaultProps from './default-props';

export default class Circle  extends Component {
    render() {
        return (
            <View style={{
                width: this.props.properties.radius,
                height: this.props.properties.radius,
                borderRadius: this.props.properties.radius/2,
                backgroundColor: colors.shape
            }} />
        );
    }
}
Circle.propTypes = propTypes;
Circle.defaultProps = defaultProps;