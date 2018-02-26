import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TransactionContainer from '../../containers/TransactionContainer';
import Filters from '../Filters/Filters';

export class TransactionsList extends Component {
    render(){
        return (
            <div>
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
                    amount={{
                        from: this.props.amount.from,
                        to: this.props.amount.to
                    }}
                    setAmountFrom={this.props.setAmountFrom}
                    setAmountTo={this.props.setAmountTo}
                />
                <div>
                    {this.props.transactions.map((t, i) =>
                        <TransactionContainer key = {i} transaction = {t}/>)}
                </div>
            </div>
        )
    }
}

TransactionsList.propTypes = {
    transactions: PropTypes.array
};