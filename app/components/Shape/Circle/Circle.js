import React, {Component} from "react";
import {View} from "react-native";
import colors from "../../../utils/colors";

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