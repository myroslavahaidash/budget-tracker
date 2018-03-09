import { connect } from 'react-redux';
import { addTransactionToDb, editTransactionInDb } from '../modules/transactions/transactionsActionCreators';
import TransactionFormDialog from '../components/TransactionFormDialog/TransactionFormDialog';

const mapStateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = dispatch => ({
    addTransaction: (transactionData) =>
        dispatch(addTransactionToDb(transactionData)),
    editTransaction: (transaction, newTransactionData) =>
        dispatch(editTransactionInDb(transaction, newTransactionData))
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionFormDialog);