import React, { Component } from 'react';
import ExpensesChart from '../../components/chartComponents/ExpensesChart/ExpensesChart';
import groupBy from 'lodash/groupBy';

export default class ExpensesChartContainer extends Component {
    render() {
        const groupedTransactions = groupBy(this.props.transactions.filter(t => t.type === 'Expense'), t => t.category);
        const chartData = Object.keys(groupedTransactions).map(
            key => ({
                category: key,
                sum: groupedTransactions[key].reduce((acc, cur) => acc + cur.amount, 0)
            }));
        return (
            <ExpensesChart chartData={chartData}/>
        );
    }
}