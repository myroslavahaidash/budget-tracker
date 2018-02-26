import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import './transaction.scss';
import TransactionFormContainer from '../../containers/TransactionFormContainer';

export default class Transaction extends Component {
    state = {
        formOpen: false,
        mode: ''
    };

    handleDeleteClick = () => {
        this.props.deleteTransaction(this.props.transaction);
    };

    handleClickEdit = () => {
        this.setState({
            formOpen: true,
            mode: 'edit'
        });
    };

    handleClickDuplicate = () => {
        this.setState({
            formOpen: true,
            mode: 'add'
        });
    };

    handleClose = () => {
        this.setState({formOpen: false});
    };

    render() {
        return (
            <Card className='transaction'>
                <CardContent>
                    <p>{this.props.transaction.category}</p>
                    <p>{this.props.transaction.date}</p>
                    <p>{this.props.transaction.description}</p>
                    <p>{this.props.transaction.amount}</p>
                </CardContent>
                <CardActions className='transaction-actions'>
                    <Button className='action-button' onClick={this.handleDeleteClick}>
                        Delete
                    </Button>
                    <Button className='action-button' onClick={this.handleClickDuplicate}>
                        Duplicate
                    </Button>
                    <Button className='action-button' onClick={this.handleClickEdit}>
                        Edit
                    </Button>
                    <TransactionFormContainer
                        open={this.state.formOpen}
                        mode={this.state.mode}
                        transaction={this.props.transaction}
                        handleClose={this.handleClose}
                    />
                </CardActions>
            </Card>
        );
    }
}