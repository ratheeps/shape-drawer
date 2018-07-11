import React from 'react';
import {View} from 'react-native';
import {AppHeader, Form} from "./app/components";
import {Shape} from "./app/components/Shape";
import {processText} from "./app/helpers/text-processer"
import {shapeDataValidator, sampleText} from "./app/helpers/validator"


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            error: null,
            isProcessed: false,
            isLoading: false,
            data: {},
            shapeData: {}
        };
        this.process.bind(this);
    }

    process(data) {
        let value = data.value;
        value = "Draw an heptagon with a side length of 200";
        if (value) {
            let shapeData = processText(value);
            let error = shapeDataValidator(shapeData);
            if (error) {
                this.setState({error});
            } else {
                this.setState({
                    shapeData,
                    error
                });
            }
        } else {
            this.setState({error: sampleText});
        }

    }

    buttonSubmitHandler(data) {
        this.process(data);
    }

    render() {
        return (
            <View>
                <AppHeader/>
                <Form onSubmit={this.buttonSubmitHandler.bind(this)} error={this.state.error}
                      isLoading={this.state.isLoading}/>
                <Shape data={this.state.shapeData}/>
            </View>
        );
    }
}
