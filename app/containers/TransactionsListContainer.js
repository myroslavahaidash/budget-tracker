import { connect } from 'react-redux';
import orderBy from 'lodash/orderBy';

import { TransactionsList } from '../components/TransactionsList/TransactionsList';

const mapStateToProps = (state) => ({
    transactions: orderBy(state.transactions, ['date', 'description'], ['desc', 'asc'])
});

export default connect(mapStateToProps)(TransactionsList);