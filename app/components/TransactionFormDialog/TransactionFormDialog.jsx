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

const defaultCategory = '',
    defaultDate = new Date().toISOString().slice(0, 10);

export default class TransactionFormDialog extends Component {
    state = {
        open: false,
        categories: [],
        type: '',
        amount: '',
        description: '',
        category: '',
        date: defaultDate
    };

    handleClose = () => {
        this.props.handleClose();
        this.setState({category: ''});
    };


    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target),
            type = data.get('type'),
            amount = +data.get('amount'),
            category = data.get('category'),
            description = data.get('description'),
            date = data.get('date');
        const timeOfCreation = Date.now();

        if (this.props.mode === 'add') {
            this.props.addTransaction({type, amount, category, description, date, timeOfCreation});
        }

        if (this.props.mode === 'edit') {
            this.props.editTransaction(this.props.transaction, {type, amount, category, description, date});
        }

        this.handleClose();
    };

    handleTypeChange = (event, value) => {
      this.setState({type: value});
      if(value === 'Income') {
          this.setState({categories: this.props.categories.incomeCategories});
      }
      if(value === 'Expense') {
          this.setState({categories: this.props.categories.expenseCategories});
      }
    };

    handleCategoryChange = (event) => {
        this.setState({category: event.target.value});
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.transaction) {
            this.setState({
                type: nextProps.transaction.type,
                amount: nextProps.transaction.amount,
                description: nextProps.transaction.description,
                category: nextProps.transaction.category,
                date: nextProps.mode === 'edit' ? nextProps.transaction.date : defaultDate,
                categories: nextProps.transaction.type === 'Income' ? this.props.categories.incomeCategories : this.props.categories.expenseCategories
            });
        }
        else {
            this.setState({
                type: 'Expense',
                categories: nextProps.categories.expenseCategories
            })
        }
        this.setState({
            open: nextProps.open
        });
    }

    render() {
        return (
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
            >
                <DialogTitle>
                    {this.props.mode === 'edit' ? 'Edit ' : 'New '}Transaction
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
                                  required
                                  className='field'
                                  inputProps={{ step: '0.01', defaultValue: this.state.amount}}
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

                               {this.state.categories && this.state.categories.map((category, i) =>
                                   <MenuItem value={category.title} key={i}>{category.title}</MenuItem>
                               )}
                           </Select>
                       </FormControl>
                       <TextField type='text'
                                  label='Description'
                                  name='description'
                                  className='field'
                                  required
                                  defaultValue={this.state.description}
                       />
                       <TextField id='date'
                                  required
                                  label='Date of transaction'
                                  type='date'
                                  name='date'
                                  defaultValue={this.state.date}
                                  InputLabelProps={{
                                      shrink: true,
                                  }}
                                  className='field'
                       />
                       <Button type='submit' raised color='primary'>
                           {this.props.mode === 'edit' ? 'Edit ' : 'Add '}Transaction
                       </Button>
                   </form>
               </DialogContent>
            </Dialog>
        );
    }
}