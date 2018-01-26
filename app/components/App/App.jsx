import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import { StatisticPage } from '../StatisticPage/StatisticPage';
import { SettingsPage } from '../SettingsPage/SettingsPage';
import Header from '../Header/Header';

import './app.scss';

class App extends Component {
    render() {
        return (
            <div className={'app'}>
                <Header/>
                <Route path='/' exact component={HomePage}/>
                <Route path='/statistic' component={StatisticPage}/>
                <Route path='/settings' component={SettingsPage}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

export  default  withRouter(connect(mapStateToProps)(App));