import React, {Component} from "react";
import {View} from "react-native";
import styles from "./styles";
import Triangle from "../../Support/Triangle/index";

export default class Parallelogram  extends Component {
    getParallelogramRightStyle() {
        return {
            borderBottomWidth: this.props.properties.height,
            borderLeftWidth:  this.props.properties.width / 2 ,
            borderRightWidth: this.props.properties.width / 2 ,
            right: -(this.props.properties.width / 2),
        }
    }
    getParallelogramLeftStyle(){
        return {
            borderBottomWidth: this.props.properties.height,
            borderLeftWidth: this.props.properties.width / 2,
            borderRightWidth: this.props.properties.width / 2,
            left: -(this.props.properties.width / 2),
        }
    }
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