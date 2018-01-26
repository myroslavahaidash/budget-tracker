import { connect } from 'react-redux';
import Balance from '../components/Balance/Balance';

const mapStateToProps = (state) => ({
    balance: state.transactions.reduce((previous, current) =>
    {
        if (current.type === 'Income'){
            return previous + current.amount;
        }
        else {
            return previous - current.amount;
        }
    }, 0)
});

export default connect(mapStateToProps)(Balance);