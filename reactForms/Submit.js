import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Submit extends Component {
    
    static propTypes = {
        text: PropTypes.string.isRequired,
        handleSubmit: PropTypes.func
    };

    render() {
        return (
            < div className={styles.container}>
                < button
                    onClick={this.props.handleSubmit}
                >
                    {this.props.text}
                </ button>
            </ div>
        );
    }
}