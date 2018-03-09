import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import './categoryChip.scss';

export default class CategoryChip extends Component {
    handleDelete = () => {
        this.props.deleteCategory(this.props.category);
    };

    render() {
        return (
            <Chip label={this.props.category.title}
                  onDelete={this.handleDelete}
                  className='category-chip'
            />
        );
    }
}