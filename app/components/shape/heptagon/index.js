import React, {Component} from "react";
import {Dimensions, View} from "react-native";
import styles from "./styles";
import propTypes from "./prop-types";
import Canvas from 'react-native-canvas';
import defaultProps from './default-props';
import colors from "../../../utils/colors";

const numberOfSides = 7;
const rotateAngle = 90;

export default class Heptagon extends Component {

    polygon = (ctx, x, y, radius, sides, rotateAngle) => {
        if (sides < 3) return;
        var a = (Math.PI * 2) / sides;
        ctx.translate(x, y);
        ctx.rotate(rotateAngle);
        ctx.moveTo(radius, 0);

        for (var i = 1; i < sides; i++) {
            ctx.lineTo(radius * Math.cos(a * i), radius * Math.sin(a * i));
        }
        ctx.scale(1, 2);
        return ctx;
    };

    handleCanvas = (canvas) => {
        let x = Dimensions.get('window').width;
        let y = Dimensions.get('window').height;

        if (canvas) {
            const ctx = canvas.getContext('2d');
            canvas.height = y;
            canvas.width = x;

            let size = this.props.properties.length;
            let Xcenter = size + (x / size);
            let Ycenter = size + 10;

            ctx.beginPath();
            // draw polygon
            this.polygon(ctx, Xcenter, Ycenter, size, numberOfSides, rotateAngle);

            ctx.strokeStyle = colors.shape;
            ctx.fillStyle = colors.shape;
            ctx.lineWidth = 1;
            ctx.fill();
            ctx.stroke();
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Canvas ref={this.handleCanvas} sideLength={this.props.properties.length} shape="heptagon"/>
            </View>
        );
    }
}

Heptagon.propTypes = propTypes;
Heptagon.defaultProps = defaultProps;