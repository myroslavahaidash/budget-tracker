import React, { Component } from 'react';
import BalanceChartContainer from '../../containers/chartContainers/BalanceChartContainer';
import IncomesChartContainer from '../../containers/chartContainers/IncomesChartContainer';
import ExpensesChartContainer from '../../containers/chartContainers/ExpensesChartContainer';
import TextField from 'material-ui/TextField';

import './statistic.scss';

export default class Statistic extends Component {
    handleDateFromChange = event => this.props.setDateFrom(new Date(event.target.value));

    handleDateToChange = event => this.props.setDateTo(new Date(event.target.value));

    render() {
        return (
            <div className='statistic'>
                <div className='date-filter'>
                    <span>Show statistic: </span>
                    <TextField id='date'
                               label='from'
                               type='date'
                               name='dateFrom'
                               value={this.props.dateFrom}
                               onChange={this.handleDateFromChange}
                               className='date-input'
                               InputLabelProps={{
                                   shrink: true,
                               }}
                    />
                    <TextField id='date'
                               label='to'
                               type='date'
                               name='dateTo'
                               value={this.props.dateTo}
                               onChange={this.handleDateToChange}
                               className='date-input'
                               InputLabelProps={{
                                   shrink: true,
                               }}
                    />
                </div>
                <BalanceChartContainer transactions={this.props.transactions}/>
                <div className='categories-charts-wrapper'>
                    <IncomesChartContainer transactions={this.props.transactions}/>
                    <ExpensesChartContainer transactions={this.props.transactions}/>
                </div>
            </div>
        );
    }
}