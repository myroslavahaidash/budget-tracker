import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import StatisticPage from '../StatisticPage/StatisticPage';
import SettingsPage from '../SettingsPage/SettingsPage';
import Header from '../Header/Header';

import './app.scss';

export default class App extends Component {
    componentDidMount() {
        this.props.loadTransactions();
        this.props.loadCategories();
    }

    render() {
        return (
            <div className='app'>
                <Header/>
                <div className='page-wrapper'>
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/statistic' component={StatisticPage}/>
                    <Route path='/settings' component={SettingsPage}/>
                </div>
            </div>
        );
    }
}