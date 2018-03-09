import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from 'material-ui-icons/Home';
import ShowChartIcon from 'material-ui-icons/ShowChart';
import SettingsIcon from 'material-ui-icons/Settings';

import './navigation.scss';

export default class Navigation extends Component {
    render() {
        return (
            <nav className='navigation'>
                <NavLink exact to='/' className='nav-link' activeClassName='active-nav-link'>
                    <HomeIcon/>
                    <span className='nav-text'>Home</span>
                </NavLink>
                <NavLink to='/statistic' className='nav-link' activeClassName='active-nav-link'>
                    <ShowChartIcon/>
                    <span className='nav-text'>Statistic</span>
                </NavLink>
                <NavLink to='/settings' className='nav-link' activeClassName='active-nav-link'>
                    <SettingsIcon/>
                    <span className='nav-text'>Settings</span>
                </NavLink>
            </nav>
        );
    }
}