import React, {Component} from "react";
import {ART} from "react-native";

const numberOfSides = 7;

export default class Heptagon extends Component {

    /**
     * Generate points
     * @returns {*|Konva.Node}
     */
    generateART(){
        // create pointers.
        let polygon = ART.Path().move(
            this.props.properties.length * Math.cos(0),
            this.props.properties.length * Math.sin(0)
        );
        // handle sides pointers.
        for (let i = 1; i <= numberOfSides; i += 1) {
            polygon.line(
                this.props.properties.length * Math.cos((i * 2 * Math.PI) / numberOfSides),
                this.props.properties.length * Math.sin((i * 2 * Math.PI) / numberOfSides)
            );
        }
        console.log(this.props.properties.length, numberOfSides);
        polygon.close();
        return polygon;
    }

    render() {
        console.log(this.generateART());
        return (
            <ART.Surface width={this.props.properties.length * 3} height={this.props.properties.length * 3}>
                <ART.Group x={this.props.properties.length} y={this.props.properties.length / 3}>
                    <ART.Shape d={this.generateART()} {...this.props} />
                </ART.Group>
            </ART.Surface>
        );
    }
}