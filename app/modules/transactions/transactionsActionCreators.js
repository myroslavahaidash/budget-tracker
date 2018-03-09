import * as transactionsActions from './transactionsActions';
import db from '../../db/firebase';

export function setTransactionsToStore (transactions) {
    return {
        type: transactionsActions.SET_TRANSACTIONS,
        payload: transactions
    }
}

export function loadTransactionsFromDb () {
    return dispatch => {
        dispatch(showLoader());
        db.collection('transactions').get()
            .then(querySnapshot => {
                dispatch(
                    setTransactionsToStore(
                        querySnapshot.docs.map(doc => ({...doc.data(), ...{id: doc.id}}))));
                dispatch(hideLoader());
            });
    }
}

export function addTransactionToStore (transactionData) {
    return {
        type: transactionsActions.ADD_TRANSACTION,
        payload: {transactionData}
    }
}

export function addTransactionToDb (transactionData){
   return dispatch => {
       dispatch(showLoader());
       db.collection('transactions').add(transactionData).then(
           docRef => {
               dispatch(addTransactionToStore({...transactionData, ...{id: docRef.id}}));
               dispatch(hideLoader());
           })
   }
}

export function editTransactionInStore (transaction, newTransactionData) {
    return {
        type: transactionsActions.EDIT_TRANSACTION,
        payload: {transaction, newTransactionData}
    }
}

export function editTransactionInDb (transaction, newTransactionData){
    return dispatch => {
        dispatch(showLoader());
        db.collection('transactions').doc(transaction.id).update(newTransactionData).then(
            () => {
                dispatch(editTransactionInStore(transaction, newTransactionData));
                dispatch(hideLoader());
            }
        )
    }
}

export function deleteTransactionFromStore (transaction) {
    return {
        type: transactionsActions.DELETE_TRANSACTION,
        payload: transaction
    }
}

export function deleteTransactionFromDb (transaction) {
    return dispatch => {
        dispatch(showLoader());
        db.collection('transactions').doc(transaction.id).delete().then(
            () => {
                dispatch(deleteTransactionFromStore(transaction));
                dispatch(hideLoader());
            })
    }
}

export function showLoader () {
    return {
        type: transactionsActions.SHOW_LOADER
    }
}

export function hideLoader () {
    return {
        type: transactionsActions.HIDE_LOADER
    }
}

