import React, { Component } from 'react';
import BalanceChart from '../../components/chartComponents/BalanceChart/BalanceChart';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import moment from 'moment/moment';

export default class BalanceChartContainer extends Component {
    render() {
        const groupedTransactions = groupBy(this.props.transactions, t => t.date);
        const dailyBalances = Object.keys(groupedTransactions).map(date => ({
            date: new Date(date),
            dailyBalance: groupedTransactions[date].reduce((acc, cur) => acc + (cur.type === 'Expense' ? -1 : 1) * cur.amount, 0)
            })
        );

        const orderedDailyBalances = orderBy(dailyBalances, t => t.date);

        const dailyTotalBalances = orderedDailyBalances.map((t, i) => {
            if (i > 0) {
                t.dailyBalance += orderedDailyBalances[i - 1].dailyBalance;
            }

            t.date = moment(t.date).format('ll');

            return t;
        });

        return (
            <BalanceChart chartData={dailyTotalBalances}/>
        );
    }
}