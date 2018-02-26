import React, { Component } from 'react';
import TransactionsListContainer from '../../containers/TransactionsListContainer';
import './homePage.scss';

export default class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <TransactionsListContainer/>
            </div>
        );
    }
}