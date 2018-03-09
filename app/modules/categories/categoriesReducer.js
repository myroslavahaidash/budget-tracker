import * as categoriesActions from './categoriesActions';

const initialState =  {
    incomeCategories: [],
    expenseCategories: []
};

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case categoriesActions.SET_CATEGORIES:
            return {...state, ...action.payload};

        case categoriesActions.ADD_CATEGORY:

            if (action.payload.type === 'Income') {
                state.incomeCategories.push(action.payload);
                state.incomeCategories = [...state.incomeCategories];
            }
            if (action.payload.type === 'Expense'){
                state.expenseCategories.push(action.payload);
                state.expenseCategories = [...state.expenseCategories];
            }

            return {...state};

        case categoriesActions.DELETE_CATEGORY:
            if (action.payload.type === 'Income') {
                state.incomeCategories.splice(state.incomeCategories.indexOf(action.payload), 1);
                state.incomeCategories = [...state.incomeCategories];
            }
            if (action.payload.type === 'Expense'){
                state.expenseCategories.splice(state.expenseCategories.indexOf(action.payload), 1);
                state.expenseCategories = [...state.expenseCategories];
            }

            return {...state};

        default:
            return state;
    }
}