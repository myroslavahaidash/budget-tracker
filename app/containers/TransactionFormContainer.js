import { connect } from 'react-redux';
import { addTransaction, editTransaction } from '../modules/transactions/transactionsActionCreators';
import TransactionFormDialog from '../components/TransactionFormDialog/TransactionFormDialog';

const mapStateToProps = (state) => ({
    categories: state.categories
});

const mapDispatchToProps = dispatch => ({
    addTransaction: (transactionData) =>
        dispatch(addTransaction(transactionData)),
    editTransaction: (transaction, newTransactionData) =>
        dispatch(editTransaction({transaction, newTransactionData}))
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionFormDialog);