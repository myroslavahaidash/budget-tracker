import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FilterListIcon from 'material-ui-icons/FilterList';
import Card, { CardContent } from 'material-ui/Card';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import './filters.scss';

export default class Filters extends Component {
    state = {
        displayFilters: false,
        categories: []
    };

    handleSearchChange = event => {
        this.props.setSearchTerm(event.target.value);
    };

    handleTypeChange = (event, value) => {
        this.props.setCategory('');
        this.props.setType(value);

        if (value === 'Income'){
            this.setState({categories: this.props.categories.incomeCategories})
        }

        if (value === 'Expense'){
            this.setState({categories: this.props.categories.expenseCategories})
        }

        if (value === 'All'){
            this.setState({categories: []})
        }
    };

    handleCategoryChange = event => {
        this.props.setCategory(event.target.value);
    };

    handleDateFromChange = event => {
        this.props.setDate(event.target.value);
    };

    handleAmountFromChange = event => {
        this.props.setAmountFrom(event.target.value);
    };

    handleAmountToChange = event => {
        this.props.setAmountTo(event.target.value);
    };

    displayFilters = () => {
      this.setState({displayFilters: !this.state.displayFilters})
    };

    render() {
        return (
            <div className='filters'>
                <div className='search-and-button-section'>
                    <TextField
                        id='search'
                        name='search'
                        onChange={this.handleSearchChange}
                        className='search-field'
                    />
                    <IconButton variant='fab' className='filters-button' onClick={this.displayFilters}>
                        <FilterListIcon/>
                    </IconButton>
                </div>
                {this.state.displayFilters &&
                    <Card>
                        <CardContent className='filters-section'>
                            <FormControl component='fieldset' required>
                                <RadioGroup
                                    row
                                    aria-label='Type'
                                    value={this.props.type}
                                    onChange={this.handleTypeChange}
                                    name = 'type'
                                >
                                    <FormControlLabel value='All' control={<Radio />} label='All' />
                                    <FormControlLabel value='Expense' control={<Radio />} label='Expenses' />
                                    <FormControlLabel value='Income' control={<Radio />} label='Incomes' />
                                </RadioGroup>
                            </FormControl>
                            <div className='inputs'>
                                <FormControl className='field category'>
                                    <InputLabel htmlFor='category'>Category</InputLabel>
                                    <Select
                                        onChange={this.handleCategoryChange}
                                        value={this.props.category}
                                        input={<Input name='category' id='category' />}
                                    >
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>

                                        {this.state.categories.map((category, i) =>
                                            <MenuItem value={category.title} key={i}>{category.title}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                                <TextField id='date'
                                           className='field date'
                                           label='To date'
                                           type='date'
                                           name='date'
                                           value={this.props.date}
                                           onChange={this.handleDateFromChange}
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                />
                                <div className='field'>
                                    Amount
                                    <TextField type='number'
                                               label='from'
                                               name='amountFrom'
                                               inputProps={{ step: '0.01', defaultValue: this.props.amount.from}}
                                               onChange={this.handleAmountFromChange}
                                               className='amount'
                                    />
                                    <TextField type='number'
                                               label='to'
                                               name='amountTo'
                                               inputProps={{ step: '0.01', defaultValue: this.props.amount.to}}
                                               onChange={this.handleAmountToChange}
                                               className='amount'
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                }
            </div>
        );
    }
}