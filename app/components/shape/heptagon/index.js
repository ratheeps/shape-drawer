import React, {Component} from "react";
import {View} from "react-native";
import colors from "../../../utils/colors";
import propTypes from "./prop-types";
import defaultProps from './default-props';

export default class Heptagon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: props.properties,
        };
    }

    render() {
        return (
            <View style={{
                width: this.state.properties.radius,
                height: this.state.properties.radius,
                backgroundColor: colors.shape
            }} />
        );
    }
}
Heptagon.propTypes = propTypes;
Heptagon.defaultProps = defaultProps;