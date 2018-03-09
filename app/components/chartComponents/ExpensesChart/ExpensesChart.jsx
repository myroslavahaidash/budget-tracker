import React, { Component } from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import './expensesChart.scss';

export default class  ExpensesChart extends Component {
    render() {
        return (
            <div className='expenses-chart'>
                <PieChart width={200} height={200}>
                    <Pie isAnimationActive={false} data={this.props.chartData} dataKey='sum' nameKey='category' cx={100} cy={100} outerRadius={80} fill='#ec407a'/>
                    <Tooltip/>
                </PieChart>
                <h4>Expenses by category</h4>
            </div>
        );
    }
}