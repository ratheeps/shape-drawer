import React, {Component} from "react";
import {ART} from "react-native";

const numberOfSides = 7;

export default class Heptagon extends Component {

    generateART(){
        console.log(this.props.properties.length);
        let polygon = ART.Path().move(
            this.props.properties.length * Math.cos(0),
            this.props.properties.length * Math.sin(0)
        );
        for (let i = 1; i <= numberOfSides; i += 1) {
            polygon.line(
                this.props.properties.length * Math.cos((i * 2 * Math.PI) / numberOfSides),
                this.props.properties.length * Math.sin((i * 2 * Math.PI) / numberOfSides)
            );
            polygon.close();
        }
        return polygon;
    }

    render() {
        return (
            <ART.Surface width={this.props.properties.length + " " +  3} height={this.props.properties.length + " " + 3}>
                <ART.Group x={this.props.properties.length} y={this.props.properties.length / 3}>
                    <ART.Shape d={this.generateART()}/>
                </ART.Group>
            </ART.Surface>
        );
    }
}