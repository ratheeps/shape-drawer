import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import Rectangle from "./rectangle/index";
import Square from "./square/index";
import IsoscelesTriangle from "./isosceles-triangle/index";
import ScaleneTriangle from "./scalene-triangle/index";
import Parallelogram from "./parallelogram/index";
import EquilateralTriangle from "./equilateral-triangle/index";
import Pentagon from "./pentagon/index";
import Hexagon from "./hexagon/index";
// import Heptagon from "./heptagon";
import Octagon from "./octagon/index";
import Circle from "./circle/index";
import Oval from "./oval/index";

export default class Shape extends Component {
    render() {
        return (
            <View style={styles.container}>
                { this.props.data.shape === 'rectangle' ? <Rectangle properties={this.props.data.properties}/> : '' }
                { this.props.data.shape === 'isosceles triangle' ? <IsoscelesTriangle properties={this.props.data.properties}/> : '' }
                { this.props.data.shape === 'square' ? <Square properties={this.props.data.properties}/> : '' }
                { this.props.data.shape === 'scalene triangle' ? <ScaleneTriangle  properties={this.props.data.properties}/> : '' }
                { this.props.data.shape === 'parallelogram' ? <Parallelogram  properties={this.props.data.properties}/> : '' }
                { this.props.data.shape === 'equilateral triangle' ? <EquilateralTriangle   properties={this.props.data.properties}/> : '' }
                { this.props.data.shape === 'pentagon' ? <Pentagon   properties={this.props.data.properties}/> : '' }
                { this.props.data.shape === 'hexagon' ? <Hexagon   properties={this.props.data.properties}/> : '' }
                {/*{ this.props.data.shape === 'heptagon' ? <Heptagon   properties={this.props.data.properties}/> : '' }*/}
                { this.props.data.shape === 'octagon' ? <Octagon   properties={this.props.data.properties}/> : '' }
                { this.props.data.shape === 'circle' ? <Circle   properties={this.props.data.properties}/> : '' }
                { this.props.data.shape === 'oval' ? <Oval   properties={this.props.data.properties}/> : '' }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        paddingTop: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});