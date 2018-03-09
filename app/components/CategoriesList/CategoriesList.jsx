import React, { Component } from 'react';
import CategoryChip from '../CategoryChip/CategoryChip';
import Card, { CardContent } from 'material-ui/Card';

import './categoriesList.scss';

export default class CategoriesList extends Component {

    render() {

        return (
            <Card className='categories-section'>
                <CardContent>
                    {this.props.categories.incomeCategories.length > 0 &&
                    <div className='income-categories'>
                        Income categories:
                        <div className='categories-list'>
                            {this.props.categories.incomeCategories.map((category, i) =>
                                <CategoryChip key={i}
                                              category={category}
                                              deleteCategory={this.props.deleteCategory}
                                />
                            )}
                        </div>
                    </div>}
                    {this.props.categories.expenseCategories.length > 0 &&
                    <div>
                        Expense categories:
                        <div className='categories-list'>
                            {this.props.categories.expenseCategories.map((category, i) =>
                                <CategoryChip key={i}
                                              category={category}
                                              deleteCategory={this.props.deleteCategory}
                                />
                            )}
                        </div>
                    </div>
                    }
                </CardContent>
            </Card>
        );
    }
}