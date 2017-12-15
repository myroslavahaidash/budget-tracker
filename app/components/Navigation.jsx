import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Navigation extends Component {
    render() {
        return (
            <nav>
                <NavLink exact to="/" activeStyle={{
                    color: 'red'}}>
                    Home
                </NavLink>
                <NavLink to="/statistic" activeStyle={{
                    color: 'red'}}>
                    Statistic
                </NavLink>
            </nav>
        );
    }
}