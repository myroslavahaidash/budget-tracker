import { connect } from 'react-redux';
import { deleteTransactionFromDb } from '../modules/transactions/transactionsActionCreators';
import Transaction from '../components/Transaction/Transaction';

const mapDispatchToProps = dispatch => ({
    deleteTransaction: (transaction) =>
        dispatch(deleteTransactionFromDb(transaction)),
});

export default connect(null, mapDispatchToProps)(Transaction);