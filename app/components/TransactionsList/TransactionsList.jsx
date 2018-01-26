import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TransactionContainer from '../../containers/TransactionContainer';

export class TransactionsList extends Component {
    render(){
        return (
            <div>
                {this.props.transactions.map((t, i) =>
                    <TransactionContainer key = {i} transaction = {t}/>)}
            </div>
        )
    }
}

TransactionsList.propTypes = {
    transactions: PropTypes.array
};