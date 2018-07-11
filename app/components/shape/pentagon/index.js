import React, {Component} from "react";
import {View} from "react-native";
import styles from "./styles";
import propTypes from "./prop-types";
import defaultProps from './default-props';

export default class Pentagon  extends Component {
    getPentagonStyle(){
        return {
            width: this.props.properties.length ,
            height: this.props.properties.length ,
        }
    }
    getPentagonInnerStyle() {
        return {
            width: this.props.properties.length,
            top: this.props.properties.length,
            borderLeftWidth: this.props.properties.length / 5,
            borderRightWidth: this.props.properties.length / 5,
            borderTopWidth: this.props.properties.length / 1.8,
        }
    }
    getPentagonBeforeStyle() {
        return {
            borderBottomWidth: this.props.properties.length / 2,
            borderLeftWidth: this.props.properties.length / 2,
            borderRightWidth: this.props.properties.length / 2,
            top: this.props.properties.length / 2,
        }
    }
    render() {
        return (
            <View style={[styles.pentagon, this.getPentagonStyle()]}>
                <View style={[styles.pentagonInner, this.getPentagonInnerStyle()]} />
                <View style={[styles.pentagonBefore, this.getPentagonBeforeStyle()]} />
            </View>
        );
    }
}

Pentagon.propTypes = propTypes;
Pentagon.defaultProps = defaultProps;