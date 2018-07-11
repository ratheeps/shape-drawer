import React, {Component} from "react";
import {View} from "react-native";
import styles from "./styles";
import propTypes from "./prop-types"
import defaultProps from './default-props';

export default class Hexagon extends Component {
    getHexagonStyles() {
        return {
            width: this.props.properties.length,
            height: this.props.properties.length / 1.8
        }
    }

    getHexagonInnerStyles() {
        return {
            width: this.props.properties.length,
            height: this.props.properties.length / 1.8
        }
    }

    getHexagonAfter() {
        return {
            bottom: -(this.props.properties.length / 4),
            borderLeftWidth: this.props.properties.length / 2,
            borderRightWidth: this.props.properties.length / 2,
            borderTopWidth: this.props.properties.length / 4,
        }
    }

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

Hexagon.propTypes = propTypes;
Hexagon.defaultProps = defaultProps;