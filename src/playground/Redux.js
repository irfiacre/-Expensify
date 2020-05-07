console.log('========== My own simple redux =============');

import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// Default object

const defaultStoreObj = {
    expenses: [
        {
            id: uuidv4(),
            name: 'expense 101',
            amount: 0.01,
            createdAt: 0,
        }
    ],
    filters: {
        text: '',
        sortBy: 'date',
    }
}

// Action Generators
const addExpense = ( { name = 'expense 101', amount=0.01, createdAt= 0 } = {} )=>({
    type:'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        name,
        amount,
        createdAt,
    },
});

const setTextFilter = ( text = '' )=>({
    type: 'SET_FILTER_TEXT',
    text,
});

const setAmount = ()=>({  type: 'SET_AMOUNT' });
//  Reducers
//  expense reducer
const expensesArray = [];

const expensesReducer = (state = expensesArray, action )=>{
    switch (action.type) {
        case 'ADD_EXPENSE':
            return state.concat( action.expense );
        default:
            return state;
    }

}

//  filterReducer

const defaultFilter = {
    text: '',
    sortBy: 'date',
};

const filterReducer = (state = defaultFilter, action)=>{
    switch (action.type) {
        case 'SET_FILTER_TEXT':
            return {
                ...state,
                text: action.text,
            };
        case 'SET_AMOUNT':
            return {
                ...state,
                sortBy: 'amount',
            };
        default:
            return state;
    }
}

// Selector

const getVisibleExpenses = (expenses, { text, sortBy })=>{
    return  expenses.filter((expense)=>{
        const textMatch = expense.name.toLowerCase().includes(text.toLowerCase());
        return textMatch;
        
    }).sort( (a, b)=>{
        if( sortBy === 'date' ){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if( sortBy === 'amount'){
            console.log('---------');
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

// Store creation 
const store = createStore( combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,
}) );

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses( state.expenses, state.filters );

    return console.log( visibleExpenses );
});

// Dispatching
store.dispatch(addExpense({ name: 'Avocado', amount: 150, createdAt: 10 }))
store.dispatch(addExpense({ name: 'Bread', amount: 750, createdAt: 20 }))

// store.dispatch(setTextFilter( 'bread' ))
store.dispatch(setAmount());