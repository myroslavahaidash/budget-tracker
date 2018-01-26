import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Navigation } from '../Navigation/Navigation';
import './header.scss';

export default class Header extends Component {
    render() {
        return (
            <AppBar position='static'>
                <div className='app-bar'>
                    <div className='app-bar-centred'>
                        <Navigation/>
                    </div>
                </div>
            </AppBar>
        );
    }
}