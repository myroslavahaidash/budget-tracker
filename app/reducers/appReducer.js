import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import transactionsReducer from '../modules/transactions/transactionsReducer';
import categoriesReducer from '../modules/categories/categoriesReducer';

export default combineReducers({
    routing: routerReducer,
    transactions: transactionsReducer,
    categories: categoriesReducer
});