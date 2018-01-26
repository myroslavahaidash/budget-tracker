import React, { Component } from 'react';

import Button from 'material-ui/Button';
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

import './transactionFormDialog.scss';

const defaultCategory = '';

export default class TransactionFormDialog extends Component {
    state = {
        open: false,
        categories: this.props.categories.expenses,
        type: '',
        amount: 0,
        description: '',
        category: '',
        date: new Date().toISOString().slice(0, 10)
    };

    handleClose = () => {
        this.props.handleClose();
    };


    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target),
            type = data.get('type'),
            amount = +data.get('amount'),
            category = data.get('category'),
            description = data.get('description'),
            date = data.get('date');

        this.props.addTransaction(type, amount, category, description, date);
        this.handleClose();
    };

    handleTypeChange = (event, value) => {
      this.setState({type: value});
      if(value === 'Income') {
          this.setState({categories: this.props.categories.incomes});
      }
      else {
          this.setState({categories: this.props.categories.expenses});
      }
    };

    handleCategoryChange = (event) => {
        this.setState({category: event.target.value});
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.open,
            type: nextProps.type,
            amount: nextProps.amount,
            description: nextProps.description,
            category: nextProps.category,
            categories: nextProps.type === 'Income' ? this.props.categories.incomes : this.props.categories.expenses
        });
    }

    componentDidUpdate(){
        console.log(this.state);
        console.log(this.props);
    }

    render() {
        return (
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
            >
                <DialogTitle>
                    New Transaction
                </DialogTitle>
               <DialogContent>
                   <form onSubmit={this.handleSubmit} className='add-transaction-form-dialog'>
                       <FormControl component='fieldset' required>
                           <RadioGroup
                               row
                               aria-label='Type'
                               value={this.state.type}
                               onChange={this.handleTypeChange}
                               name = 'type'
                               className='field'
                           >
                               <FormControlLabel value='Expense' control={<Radio />} label='Expense' />
                               <FormControlLabel value='Income' control={<Radio />} label='Income' />
                           </RadioGroup>
                       </FormControl>
                       <TextField type='number'
                                  label='Amount'
                                  name='amount'
                                  className='field'
                                  value={this.state.amount}
                                  inputProps={{ step: '0.01'}}
                       />
                       <FormControl className='field'>
                           <InputLabel htmlFor='category'>Category</InputLabel>
                           <Select
                               onChange={this.handleCategoryChange}
                               value={this.state.category || defaultCategory}
                               input={<Input name='category' id='category' />}
                           >
                               <MenuItem value=''>
                                   <em>None</em>
                               </MenuItem>

                               {this.state.categories.map((category, i) =>
                                   <MenuItem value={category} key={i}>{category}</MenuItem>
                               )}
                           </Select>
                       </FormControl>
                       <TextField type='text'
                                  label='Description'
                                  name='description'
                                  className='field'
                                  value={this.state.description}
                       />
                       <TextField id='date'
                                  label='Date of transaction'
                                  type='date'
                                  name='date'
                                  defaultValue={this.state.date}
                                  InputLabelProps={{
                                      shrink: true,
                                  }}
                                  className='field'
                       />
                       <Button type='submit' raised color='primary'>Add Transaction</Button>
                   </form>
               </DialogContent>
            </Dialog>
        );
    }
}