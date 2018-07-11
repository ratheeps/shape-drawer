import React, {Component} from "react";
import {View} from "react-native";
import styles from "./styles";
import Triangle from "../../Support/Triangle/index";

export default class Parallelogram  extends Component {
    /**
     * generate right parallelogram styles
     * @returns {{borderBottomWidth: *, borderLeftWidth: number, borderRightWidth: number, right: number}}
     */
    getParallelogramRightStyle() {
        return {
            borderBottomWidth: this.props.properties.height,
            borderLeftWidth:  this.props.properties.width / 2 ,
            borderRightWidth: this.props.properties.width / 2 ,
            right: -(this.props.properties.width / 2),
        }
    }

    /**
     * generate left parallelogram styles
     * @returns {{borderBottomWidth: *, borderLeftWidth: number, borderRightWidth: number, left: number}}
     */
    getParallelogramLeftStyle(){
        return {
            borderBottomWidth: this.props.properties.height,
            borderLeftWidth: this.props.properties.width / 2,
            borderRightWidth: this.props.properties.width / 2,
            left: -(this.props.properties.width / 2),
        }
    }

    /**
     * generate parallelogram styles
     * @returns {{width: *, height: *}}
     */
    getParallelogramStyle(){
        return {
            width: this.props.properties.width,
            height: this.props.properties.height
        };
    }
    render() {
        return (
            <View style={[styles.parallelogram, this.getParallelogramStyle()]}>
                <Triangle style={[styles.parallelogramRight,  this.getParallelogramRightStyle()]} />
                <View style={[styles.parallelogramInner, this.getParallelogramStyle()]} />
                <Triangle style={[styles.parallelogramLeft,this.getParallelogramLeftStyle()]} />
            </View>
        );
    }
}