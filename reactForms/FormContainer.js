import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isFunction from 'lodash-es/isFunction';

export default class FormContainer extends Component {

    static propTypes = {
        children: PropTypes.node,
        submit: PropTypes.func.isRequired
    };
    
    constructor(props) {
        super(props);

        this.state = {};

        this.componentWillMount = this.componentWillMount.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        React.Children.map(this.props.children,
            child => {
                if (child.props.name && !this.state.hasOwnProperty(child.props.name)) {
                    let newState = this.state;
                    newState[child.props.name] = '';
                    this.setState(newState);
                }
            }
        );
    }

    handleValueChange(e) {
        let newState = this.state;
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submit(this.state);
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            child => {
                if (isFunction(child.type)) {
                    if (child.type.name === 'Submit') {
                        return React.cloneElement(child, {
                            handleSubmit: this.handleSubmit
                        });
                    }
                    return React.cloneElement(child, {
                        handleValueChange: this.handleValueChange
                    });
                }
                return child;
            }
        );

        return (
            <form role="form">
                {childrenWithProps}
            </form>
        );
    }
}