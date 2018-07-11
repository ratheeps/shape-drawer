import React, {Component} from "react";
import Svg, {Ellipse} from "react-native-svg";
import colors from "../../../utils/colors"

export default class Oval extends Component {
    render() {
        return (
            <Svg
                height={this.props.properties.height}
                width={this.props.properties.width}
            >
                <Ellipse
                    cx={this.props.properties.width / 2}
                    cy={this.props.properties.height / 1.8}
                    rx={this.props.properties.width / 2.2}
                    ry={this.props.properties.height / 3.3}
                    stroke={colors.shape}
                    strokeWidth="2"
                    fill={colors.shape}
                />
            </Svg>
        );
    }
}