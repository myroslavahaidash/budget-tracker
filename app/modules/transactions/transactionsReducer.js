import * as transactionsActions from './transactionsActions';

const initialState = [
    {
        id: 1,
        type: 'Income',
        amount: 1000,
        category: 'Salary',
        description: 'first',
        date: '2013-04-04'
    },
    {
        id: 2,
        type: 'Expense',
        amount: 2000,
        category: 'Car',
        description: 'second',
        date: '2014-02-01'
    },
    {
        id: 3,
        type: 'Income',
        amount: 3000,
        category: 'Rent',
        description: 'third',
        date: '2016-06-01'
    }
];

export default function transactionsReducer(state = initialState, action) {
    switch (action.type) {
        case transactionsActions.ADD_TRANSACTION:
            return [action.payload.transactionData, ...state];

        case transactionsActions.EDIT_TRANSACTION: {
            const transaction = state.find(t => t.id === action.payload.transaction.id);
            const editedTransaction = {...transaction, ...action.payload.newTransactionData};
            const indexOfTransaction = state.indexOf(action.payload.transaction);
            return [...(state.filter( (item, index) => index !== indexOfTransaction)), editedTransaction];
        }

        case transactionsActions.DELETE_TRANSACTION:
            state.splice(state.indexOf(action.payload), 1);
            return [...state];

        default:
            return state;
    }
}