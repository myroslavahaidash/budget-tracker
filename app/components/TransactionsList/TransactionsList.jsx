import React, { Component } from 'react';
import TransactionContainer from '../../containers/TransactionContainer';
import Filters from '../Filters/Filters';

import './transactionsList.scss';

export class TransactionsList extends Component {
    render(){
        return (
            <div className='transactions-list'>
                <Filters
                    setSearchTerm={this.props.setSearchTerm}
                    setType={this.props.setType}
                    categories={this.props.categories}
                    searchTerm={this.props.searchTerm}
                    type={this.props.type}
                    setCategory={this.props.setCategory}
                    category={this.props.category}
                    date={this.props.date}
                    setDate={this.props.setDate}
                    amount={this.props.amount}
                    setAmountFrom={this.props.setAmountFrom}
                    setAmountTo={this.props.setAmountTo}
                />
                <div>
                    {
                        this.props.transactions.length > 0 ?
                        this.props.transactions.map((t, i) =>
                        <TransactionContainer key = {i} transaction = {t}/>) :
                        <p className='not-found-message'>
                            Transactions not found
                        </p>
                    }
                </div>
            </div>
        )
    }
}