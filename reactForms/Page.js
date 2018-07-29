import FormContainer from './FormContainer';
import FormFieldText from './FormTextField';
import Submit from './Submit';
import React, { Component } from 'react';

export default class Page extends Component {

    render() {
        return (
            <FormContainer submit={formState => console.log('submit', formState)}>
                <FormFieldText
                    type="text"
                    name="name"
                    placeholder="Name"
                    value=""
                    label="name"
                    required
                />
                <hr/>
                <Submit text="Save changes" />
            </FormContainer>
        );
    }
}