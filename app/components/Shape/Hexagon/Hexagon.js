import React, {Component} from "react";
import {View} from "react-native";
import styles from "./styles";

export default class Hexagon extends Component {
    /**
     * generate hexagon styles
     * @returns {{width: *, height: number}}
     */
    getHexagonStyles() {
        return {
            width: this.props.properties.length,
            height: this.props.properties.length / 1.8
        }
    }

    /**
     * generate hexagon inner styles
     * @returns {{width: *, height: number}}
     */
    getHexagonInnerStyles() {
        return {
            width: this.props.properties.length,
            height: this.props.properties.length / 1.8
        }
    }

    /**
     * generate after hexagon styles
     * @returns {{bottom: number, borderLeftWidth: number, borderRightWidth: number, borderTopWidth: number}}
     */
    getHexagonAfter() {
        return {
            bottom: -(this.props.properties.length / 4),
            borderLeftWidth: this.props.properties.length / 2,
            borderRightWidth: this.props.properties.length / 2,
            borderTopWidth: this.props.properties.length / 4,
        }
    }

    /**
     * generate hexagon  before styles
     * @returns {{top: number, borderLeftWidth: number, borderRightWidth: number, borderBottomWidth: number}}
     */
    getHexagonBefore() {
        return {
            top: -(this.props.properties.length / 4),
            borderLeftWidth: this.props.properties.length / 2,
            borderRightWidth: this.props.properties.length / 2,
            borderBottomWidth: this.props.properties.length / 4,
        }
    }

    render() {
        return (
            <View style={[styles.hexagon, this.getHexagonStyles()]}>
                <View style={[styles.hexagonInner, this.getHexagonInnerStyles()]}/>
                <View style={[styles.hexagonBefore, this.getHexagonBefore()]}/>
                <View style={[styles.hexagonAfter, this.getHexagonAfter()]}/>
            </View>
        );
    }
}