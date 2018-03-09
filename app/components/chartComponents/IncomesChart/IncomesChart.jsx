import React, { Component } from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import './incomesChart.scss';

export default class  IncomesChart extends Component {
    render() {
        return (
            <div className='incomes-chart'>
                <PieChart width={200} height={200}>
                    <Pie isAnimationActive={false}
                         data={this.props.chartData}
                         dataKey='sum'
                         nameKey='category'
                         cx={100} cy={100}
                         outerRadius={80}
                         fill='#4caf50'/>
                    <Tooltip/>
                </PieChart>
                <h4>Incomes by category</h4>
            </div>
        );
    }
}