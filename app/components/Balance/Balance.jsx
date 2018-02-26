import React, { Component } from 'react';
import './balance.scss';

export default class Balance extends Component {
    render() {
        return (<div className={this.props.balance < 0 ? 'balance negative' : 'balance positive'}><span className='text'>Current balance:</span>{this.props.balance}</div>);
    }
}