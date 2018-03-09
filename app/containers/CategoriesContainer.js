import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoriesList from '../components/CategoriesList/CategoriesList';
import AddCategoryForm from '../components/AddCategoryForm/AddCategoryForm';

import { addCategoryToDb, loadCategoriesFromDb, deleteCategoryFromDb } from '../modules/categories/categoriesActionCreators';


const mapStateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = dispatch => ({
    loadCategories: () =>
        dispatch(loadCategoriesFromDb()),
    addCategory: categoryData =>
        dispatch(addCategoryToDb(categoryData)),
    deleteCategory: category =>
        dispatch(deleteCategoryFromDb(category))
});

class CategoriesContainer extends Component {
    componentDidMount() {
        this.props.loadCategories();
    }

    render() {
        return (
            <div>
                <AddCategoryForm addCategory={this.props.addCategory}/>
                {this.props.categories &&
                    <CategoriesList categories={this.props.categories} deleteCategory={this.props.deleteCategory}/>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);