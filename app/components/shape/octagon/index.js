import React, {Component} from "react";
import {View} from "react-native";
import colors from "../../../utils/colors";
import styles from './styles'
import propTypes from "./prop-types";
import defaultProps from './default-props';

export default class Octagon  extends Component {

    getOctagonBar(){
        return {
            width: (this.props.properties.length / 2.41),
            height: this.props.properties.length,
            backgroundColor: colors.shape
        }
    }

    render() {
        return (
            <View style={styles.octagon}>
                <View style={this.getOctagonBar()} />
                <View style={[styles.octagonFlat, this.getOctagonBar()]} />
                <View style={[styles.octagonLeft, this.getOctagonBar()]} />
                <View style={[styles.octagonRight, this.getOctagonBar()]} />
            </View>
        );
    }
}

Octagon.propTypes = propTypes;
Octagon.defaultProps = defaultProps;