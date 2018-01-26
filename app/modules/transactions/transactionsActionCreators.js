import * as transactionsActions from './transactionsActions';

export function addTransaction (type, amount, category, description, date) {
    return {
        type: transactionsActions.ADD_TRANSACTION,
        payload: { type, amount, category, description, date }
    }
}

export function deleteTransaction (transaction) {
    return {
        type: transactionsActions.DELETE_TRANSACTION,
        payload: transaction
    }
}

