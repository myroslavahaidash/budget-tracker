import React, { Component } from 'react';
import './balance.scss';

export default class Balance extends Component {
    render() {
        return (<div className='balance'>{this.props.balance}</div>);
    }
}