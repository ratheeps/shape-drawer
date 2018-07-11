import React, {Component} from "react";
import {FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements'
import colors from '../../utils/colors'
import {View} from "react-native";
import styles from "./styles";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    /**
     * Form submit handler
     */
    buttonPressHandler() {
        if (!this.state.value) {
            this.setState({
                error: 'Please enter valid text!'
            });
        }
        this.props.onSubmit({
            value: this.state.value,
            error: this.props.error
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FormLabel>Enter text to draw the shapes</FormLabel>
                <FormInput
                    multiline={true}
                    numberOfLines={4}
                    ref={ref => this.textInput = ref}
                    onChangeText={(value) => this.setState({value})}
                    shake={this.props.error ? true : false}
                />
                <FormValidationMessage>{this.props.error}</FormValidationMessage>
                <Button
                    raised
                    loading={this.props.isLoading}
                    color={colors.lightText}
                    onPress={this.buttonPressHandler.bind(this)}
                    backgroundColor={colors.primary2}
                    title='Press to process!'/>
            </View>
        );
    }
}