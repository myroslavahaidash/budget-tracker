import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadTransactionsFromDb } from '../modules/transactions/transactionsActionCreators';
import { loadCategoriesFromDb } from '../modules/categories/categoriesActionCreators';
import App from '../components/App/App';

const mapDispatchToProps = dispatch => ({
    loadTransactions: () =>
        dispatch(loadTransactionsFromDb()),
    loadCategories: () =>
        dispatch(loadCategoriesFromDb())
});

export default withRouter(connect(null, mapDispatchToProps)(App));