import React, { Component } from 'react';
import IncomesChart from '../../components/chartComponents/IncomesChart/IncomesChart';
import groupBy from 'lodash/groupBy';

export default class IncomesChartContainer extends Component {
    render() {
        const groupedTransactions = groupBy(this.props.transactions.filter(t => t.type === 'Income'), t => t.category);
        const chartData = Object.keys(groupedTransactions).map(
            key => ({
                category: key,
                sum: groupedTransactions[key].reduce((acc, cur) => acc + cur.amount, 0)
            }));
        return (
            <IncomesChart chartData={chartData}/>
        );
    }
}