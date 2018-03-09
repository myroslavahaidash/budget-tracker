import * as categoriesActions from './categoriesActions';
import db from '../../db/firebase';
import groupBy from 'lodash/groupBy';

export function setCategoriesToStore (categories) {
    return {
        type: categoriesActions.SET_CATEGORIES,
        payload: categories
    }
}

export function loadCategoriesFromDb () {
    return dispatch => {
        db.collection('categories').get()
            .then(querySnapshot => dispatch(
                setCategoriesToStore(
                    groupBy(querySnapshot.docs
                        .map(doc => ({...doc.data(), ...{id: doc.id}})), category => category.type.toLowerCase() + 'Categories'))))
    }
}

export function addTransactionToStore (categoryData) {
    return {
        type: categoriesActions.ADD_CATEGORY,
        payload: categoryData
    }
}

export function addCategoryToDb (categoryData){
    return dispatch => {
        db.collection('categories').add(categoryData).then(
            docRef => dispatch(addTransactionToStore({...categoryData, ...{id: docRef.id}})))
    }
}

export function deleteCategoryFromStore (category) {
    return {
        type: categoriesActions.DELETE_CATEGORY,
        payload: category
    }
}

export function deleteCategoryFromDb (category) {
    return dispatch => {
        db.collection('categories').doc(category.id).delete().then(
            () => dispatch(deleteCategoryFromStore(category)));

        db.collection('transactions').where('category', '==', category.title).where('type', '==', category.type).get()
            .then(querySnapshot => querySnapshot.forEach(doc => doc.ref.update({category: ''})));
    }
}