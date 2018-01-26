import { connect } from 'react-redux';
import { addTransaction} from '../modules/transactions/transactionsActionCreators';
import TransactionFormDialog from '../components/TransactionFormDialog/TransactionFormDialog';

const mapStateToProps = (state) => ({
    categories: state.categories
});

const mapDispatchToProps = dispatch => ({
    addTransaction: (type, amount, category, description, date) =>
        dispatch(addTransaction(type, amount, category, description, date))
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionFormDialog);