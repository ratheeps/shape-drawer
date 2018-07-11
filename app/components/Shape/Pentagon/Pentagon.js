import React, {Component} from "react";
import {View} from "react-native";
import styles from "./styles";

export default class Pentagon  extends Component {
    /**
     * generate pentagon styles
     * @returns {{width: *, height: *}}
     */
    getPentagonStyle(){
        return {
            width: this.props.properties.length ,
            height: this.props.properties.length ,
        }
    }

    /**
     * generate pentagon inner styles
     * @returns {{width: *, top: *, borderLeftWidth: number, borderRightWidth: number, borderTopWidth: number}}
     */
    getPentagonInnerStyle() {
        return {
            width: this.props.properties.length,
            top: this.props.properties.length,
            borderLeftWidth: this.props.properties.length / 5,
            borderRightWidth: this.props.properties.length / 5,
            borderTopWidth: this.props.properties.length / 1.8,
        }
    }

    /**
     * generate pentagon before styles
     * @returns {{borderBottomWidth: number, borderLeftWidth: number, borderRightWidth: number, top: number}}
     */
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