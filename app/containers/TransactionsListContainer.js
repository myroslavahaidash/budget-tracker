import React, { Component } from 'react';
import { connect } from 'react-redux';
import orderBy from 'lodash/orderBy';

import { TransactionsList } from '../components/TransactionsList/TransactionsList';

const mapStateToProps = state => ({
    transactions: state.transactions.transactions,
    isLoading: state.transactions.isLoading,
    categories: state.categories
});

const defaultDate = new Date().toISOString().slice(0, 10);

class TransactionsListContainer extends Component {
    state = {
        searchTerm: '',
        type: 'All',
        category: '',
        startFromDate: null,
        amountFrom: null,
        amountTo: null
    };

    getFilteredTransactions = () => {
        let transactions = this.props.transactions;

        if (this.state.searchTerm) {
            transactions = transactions.filter(t => t.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
        }

        if (this.state.type !== 'All') {
            transactions = transactions.filter(t => t.type === this.state.type);
        }

        if (this.state.category) {
            transactions = transactions.filter(t => t.category === this.state.category);
        }

        if (this.state.startFromDate) {
            let startFromDate = new Date(this.state.startFromDate).getTime();

            transactions = transactions.filter(t => new Date(t.date).getTime() <= startFromDate);
        }

        if (this.state.amountFrom) {
            transactions = transactions.filter(t => t.amount >= this.state.amountFrom);
        }

        if (this.state.amountTo) {
            transactions = transactions.filter(t => t.amount <= this.state.amountTo);
        }

        return orderBy(transactions, ['date', 'timeOfCreation'], ['desc', 'desc']);
    };


    setSearchTerm = searchTerm => {
        this.setState({searchTerm});
    };

    setType = type => {
        this.setState({type});
    };

    setCategory = category => {
        this.setState({category});
    };

    setStartFromDate = startFromDate => {
        this.setState({startFromDate});
    };

    setAmountFrom = amountFrom => {
        this.setState({amountFrom});
    };

    setAmountTo = amountTo => {
        this.setState({amountTo});
    };

    render() {
        let filteredTransactions = this.getFilteredTransactions();

        return (
            <TransactionsList
                totalTransactions={this.props.transactions.length}
                isLoading={this.props.isLoading}
                transactions={filteredTransactions}
                categories={this.props.categories}
                setSearchTerm={this.setSearchTerm}
                searchTerm={this.state.searchTerm}
                setType={this.setType}
                type={this.state.type}
                setCategory={this.setCategory}
                category={this.state.category}
                date={this.state.startFromDate || defaultDate}
                setDate={this.setStartFromDate}
                amount={{
                    from: this.state.amountFrom,
                    to: this.state.amountTo
                }}
                setAmountFrom={this.setAmountFrom}
                setAmountTo={this.setAmountTo}
            />
        );
    }
}

export default connect(mapStateToProps)(TransactionsListContainer);