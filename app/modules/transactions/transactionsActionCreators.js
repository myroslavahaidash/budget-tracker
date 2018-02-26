import * as transactionsActions from './transactionsActions';

export function addTransaction (transactionData) {
    return {
        type: transactionsActions.ADD_TRANSACTION,
        payload: {transactionData}
    }
}

export function editTransaction ({transaction, newTransactionData}) {
    return {
        type: transactionsActions.EDIT_TRANSACTION,
        payload: {transaction, newTransactionData}
    }
}

export function deleteTransaction (transaction) {
    return {
        type: transactionsActions.DELETE_TRANSACTION,
        payload: transaction
    }
}

