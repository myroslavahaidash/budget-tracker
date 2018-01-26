import { connect } from 'react-redux';
import { deleteTransaction} from '../modules/transactions/transactionsActionCreators';
import Transaction from '../components/Transaction/Transaction';

const mapDispatchToProps = dispatch => ({
    deleteTransaction: (transaction) =>
        dispatch(deleteTransaction(transaction))
});

export default connect(null, mapDispatchToProps)(Transaction);