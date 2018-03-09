import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import './balanceChart.scss';

export default class  BalanceChart extends Component {
    render() {
        return (
            <div>
                <AreaChart width={600} height={400} data={this.props.chartData}
                           margin={{top: 10, right: 30, left: 0, bottom: 0}}
                           className='balance-chart'
                >
                    <XAxis dataKey='date' hide/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray='3 3'/>
                    <Tooltip label='Balance'/>
                    <Area type='monotone' dataKey='dailyBalance' name='Balance' stroke='#8884d8' fill='#8884d8' />
                </AreaChart>
                <h4 className='balance-chart-label'>Dynamic of balance</h4>
            </div>
        );
    }
}