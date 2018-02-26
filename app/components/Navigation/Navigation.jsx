import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.scss';

export default class Navigation extends Component {
    render() {
        return (
            <nav className='navigation'>
                <NavLink exact to='/' className='nav-link' activeClassName='active-nav-link'>
                    Home
                </NavLink>
                <NavLink to='/statistic' className='nav-link' activeClassName='active-nav-link'>
                    Statistic
                </NavLink>
                <NavLink to='/settings' className='nav-link' activeClassName='active-nav-link'>
                    Settings
                </NavLink>
            </nav>
        );
    }
}