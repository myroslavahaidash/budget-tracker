import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import './transaction.scss';
import AddTransactionContainer from '../../containers/AddTransactionContainer';

export default class Transaction extends Component {
    state = {
      duplicateFormOpen: false
    };

    handleDeleteClick = () => {
        this.props.deleteTransaction(this.props.transaction);
    };

    handleClickOpenDuplicateForm = () => {
        this.setState({duplicateFormOpen: true});
    };

    handleClose = () => {
        this.setState({duplicateFormOpen: false});
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
                    <Button className='action-button' onClick={this.handleClickOpenDuplicateForm}>
                        Duplicate
                    </Button>
                    <AddTransactionContainer
                        open={this.state.duplicateFormOpen}
                        handleClose={this.handleClose}
                        type={this.props.transaction.type}
                        amount={this.props.transaction.amount}
                        description={this.props.transaction.description}
                        category={this.props.transaction.category}
                    />
                    <Button className='action-button'>
                        Edit
                    </Button>
                </CardActions>
            </Card>
        );
    }
}