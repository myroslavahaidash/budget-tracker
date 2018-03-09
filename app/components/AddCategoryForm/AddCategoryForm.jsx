import React, { Component } from 'react';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Card, { CardContent } from 'material-ui/Card';
import { FormControl, FormControlLabel } from 'material-ui/Form';

import './addCategoryForm.scss';

export default class AddCategoryForm extends Component {
    state = {
        type: 'Income',
        title: ''
    };

    handleSubmit = event => {
        event.preventDefault();
        const data = new FormData(event.target),
            type = data.get('type'),
            title = data.get('title');
        this.props.addCategory({type, title});
        this.setState({title: ''});
    };

    handleTypeChange = (event, value) => this.setState({type: value });


    handleTitleChange = event => this.setState({title: event.target.value});

    render() {
        return (
            <Card className='add-category-form-wrapper'>
                <CardContent>
                    <form onSubmit={this.handleSubmit} className='add-category-form'>
                        <FormControl component='fieldset' required>
                            <RadioGroup
                                row
                                aria-label='Type'
                                name = 'type'
                                value={this.state.type}
                                onChange={this.handleTypeChange}
                            >
                                <FormControlLabel value='Expense' control={<Radio />} label='Expense' />
                                <FormControlLabel value='Income' control={<Radio />} label='Income' />
                            </RadioGroup>
                        </FormControl>
                        <TextField type='text'
                                   label='Category title'
                                   name='title'
                                   value={this.state.title}
                                   onChange={this.handleTitleChange}
                                   required
                                   className='title-field'
                        />
                        <Button type='submit' raised color='primary' className='add-category-button'>
                            Add Category
                        </Button>
                    </form>
                </CardContent>
            </Card>
);
    }
}