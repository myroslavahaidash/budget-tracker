import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import ContentCopyIcon from 'material-ui-icons/ContentCopy';
import moment from 'moment/moment';

import TransactionFormContainer from '../../containers/TransactionFormContainer';

import './transaction.scss';

export default class Transaction extends Component {
    state = {
        formOpen: false,
        mode: '',
        menuAnchorEl: null
    };

    handleDeleteClick = () => {
        this.props.deleteTransaction(this.props.transaction);
        this.handleMenuClose();
    };

    handleClickEdit = () => {
        this.setState({
            formOpen: true,
            mode: 'edit'
        });
        this.handleMenuClose();
    };

    handleClickDuplicate = () => {
        this.setState({
            formOpen: true,
            mode: 'add'
        });
        this.handleMenuClose();
    };

    handleFormClose = () => {
        this.setState({formOpen: false});
    };

    handleMenuButtonClick = event => {
        this.setState({ menuAnchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ menuAnchorEl: null })
    };

    render() {
        const date = moment(this.props.transaction.date).format('ll');

        return (
            <Card className={'transaction '+this.props.transaction.type.toLowerCase()}>
                <CardContent className='transaction-content'>
                    <div className='info'>
                        <div className='description'>{this.props.transaction.description}</div>
                        <div>
                            {
                                this.props.transaction.category &&
                                <div className={'category '+this.props.transaction.type.toLowerCase()}>{this.props.transaction.category}</div>
                            }
                        </div>
                        <div className='date'>{date}</div>
                    </div>
                    <div className={'amount '+this.props.transaction.type.toLowerCase()}>{this.props.transaction.amount}</div>
                </CardContent>

                <CardActions className='transaction-actions'>
                    <IconButton
                        onClick={this.handleMenuButtonClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        open={Boolean(this.state.menuAnchorEl)}
                        onClose={this.handleMenuClose}
                        anchorEl={this.state.menuAnchorEl}
                    >
                        <MenuItem onClick={this.handleClickEdit} className='transaction-menu-item'>
                            <EditIcon className='menu-icon'/>
                            Edit
                        </MenuItem>
                        <MenuItem onClick={this.handleClickDuplicate} className='transaction-menu-item'>
                            <ContentCopyIcon className='menu-icon'/>
                            Duplicate
                        </MenuItem>
                        <MenuItem onClick={this.handleDeleteClick} className='transaction-menu-item'>
                            <DeleteIcon className='menu-icon'/>
                            Delete
                        </MenuItem>
                    </Menu>

                    <TransactionFormContainer
                        open={this.state.formOpen}
                        mode={this.state.mode}
                        transaction={this.props.transaction}
                        handleClose={this.handleFormClose}
                    />
                </CardActions>
            </Card>
        );
    }
}