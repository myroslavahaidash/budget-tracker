import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Navigation from '../Navigation/Navigation';
import BalanceContainer from '../../containers/BalanceContainer';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import TransactionFormContainer from '../../containers/TransactionFormContainer';
import './header.scss';

export default class Header extends Component {
    state = {
        open: false
    };

    handleClickOpenAddForm = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <AppBar position='fixed'>
                <div className='app-bar'>
                    <div className='app-bar-centred'>
                        <Navigation/>
                        <BalanceContainer/>
                        <Button onClick={this.handleClickOpenAddForm}>
                            <AddIcon/> Transaction
                        </Button>
                        <TransactionFormContainer
                            open={this.state.open}
                            handleClose={this.handleClose}
                            mode='add'
                        />
                    </div>
                </div>
            </AppBar>
        );
    }
}