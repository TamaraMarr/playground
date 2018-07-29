import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormFieldText extends Component {
    static propTypes = {
            type: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            placeholder: PropTypes.string,
            value: PropTypes.string,
            label: PropTypes.string,
            handleValueChange: PropTypes.func,
            required: PropTypes.bool
        };

    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };

        this.componentWillMount = this.componentWillMount.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.props.handleValueChange({target: {name: this.props.name, value: this.props.value}});
    }

    handleChange(e) {
        this.setState({value: e.target.value});
        this.props.handleValueChange(e);
    }

    render() {
        return (
            <div>
                {this.props.label && <label className="form-label
                control-label">{this.props.label}</label>}
                <div className="input-field">
                    <input
                    type={this.props.type}
                    name={this.props.name}
                    className="form-control"
                    placeholder={this.props.placeholder}
                    onChange={this.handleChange}
                    value={this.state.value}
                    />
                </div>
            </div>
        );
    }
}