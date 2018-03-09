import React, { Component } from 'react';
import { connect } from 'react-redux';
import Statistic from '../components/Statistic/Statistic';
import moment from 'moment/moment';

const mapStateToProps = state => ({
    transactions: state.transactions.transactions
});

class StatisticContainer extends Component {
    state = {
        dateFrom: moment(new Date()).subtract(1, 'months').toDate(),
        dateTo: new Date()
    };

    setDateFrom = date => {
        this.setState({
            dateFrom: date
        })
    };

    setDateTo = date => {
        this.setState({
            dateTo: date
        })
    };

    render() {
        const dateFrom = this.state.dateFrom.toISOString().slice(0, 10),
            dateTo = this.state.dateTo.toISOString().slice(0, 10);
        const filteredTransactions = this.props.transactions.filter(t => new Date(t.date) >= this.state.dateFrom && new Date(t.date) <= this.state.dateTo);
        return (
            <Statistic transactions={filteredTransactions}
                       setDateFrom={this.setDateFrom}
                       setDateTo={this.setDateTo}
                       dateFrom={dateFrom}
                       dateTo={dateTo}
            />
        );
    }
}

export default connect(mapStateToProps)(StatisticContainer);