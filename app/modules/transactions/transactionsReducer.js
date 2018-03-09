import * as transactionsActions from './transactionsActions';
import * as categoriesActions from '../categories/categoriesActions';

const initialState = {
    transactions: [],
    isLoading: true
};

export default function transactionsReducer(state = initialState, action) {
    switch (action.type) {
        case transactionsActions.SET_TRANSACTIONS:
            return {...state, ...{transactions: [...action.payload]}};

        case transactionsActions.ADD_TRANSACTION:
            return {...state, ...{transactions: [action.payload.transactionData, ...state.transactions]}};

        case transactionsActions.EDIT_TRANSACTION: {
            const transaction = state.transactions.find(t => t.id === action.payload.transaction.id);
            const editedTransaction = {...transaction, ...action.payload.newTransactionData};
            const indexOfTransaction = state.transactions.indexOf(action.payload.transaction);
            return {...state, ...{transactions: [...(state.transactions.filter( (item, index) => index !== indexOfTransaction)), editedTransaction]}};
        }

        case transactionsActions.DELETE_TRANSACTION:
            state.transactions.splice(state.transactions.indexOf(action.payload), 1);
            return {...state, ...{transactions: [...state.transactions]}};

        case categoriesActions.DELETE_CATEGORY:
            return {...state, ...{transactions: state.transactions.map(transaction =>
                transaction.category === action.payload.title &&
                transaction.type === action.payload.type ? {...transaction, category: ''} : transaction)}};

        case transactionsActions.SHOW_LOADER:
            return {...state, ...{isLoading: true}};

        case transactionsActions.HIDE_LOADER:
            return {...state, ...{isLoading: false}};

        default:
            return state;
    }
}