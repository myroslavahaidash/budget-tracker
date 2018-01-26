import React, { Component } from 'react';
import TransactionsListContainer from '../../containers/TransactionsListContainer';
import AddTransactionContainer from '../../containers/AddTransactionContainer';
import BalanceContainer from '../../containers/BalanceContainer';
import Button from 'material-ui/Button';
import './homePage.scss';

export default class HomePage extends Component {
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
            <div className='home-page'>
                <div className='top-section'>
                    <Button onClick={this.handleClickOpenAddForm}>Add transaction</Button>
                    <AddTransactionContainer open={this.state.open} handleClose={this.handleClose} type='Expense'/>
                    <BalanceContainer/>
                </div>
                <TransactionsListContainer/>
            </div>
        );
    }
}