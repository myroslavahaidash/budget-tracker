const initialState =  {
  incomes: ['Salary', 'Rent', 'Investment'],
  expenses: ['Car', 'Food', 'Health']
};

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        default :
            return state;
    }
}