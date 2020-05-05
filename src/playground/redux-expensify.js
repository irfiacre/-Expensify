import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

console.log('========= Expensify Redux ==========');

const demoState = {
    expenses: [{
        id: 'xxx',
        description: 'January Rent',
        note: 'This payment was made in full',
        amount: 40000,
        createdAt: 0,
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined,
    }
};
// ACTION GENERATORS
//  add expense
const addExpense = ( 
    { description='', note='', amount=0.01, createdAt=10 } = {} )=>{
    return {
        type : 'ADD_EXPENSE',
        expense: { 
            id: uuidv4(),
            description,
            note,
            amount,
            createdAt, 
         }
    };
};

//  remove expense
const removeExpense = ({ id } = {})=>{
    return { 
        type: 'REMOVE_EXPENSE',
        id,
     };
};

// edit expenses
const editExpense = (id, updates)=>{
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates,
    }
};

// Expenses Reducer:
const defaultExpArr = [];

const expensesReducer = (state = defaultExpArr, action)=>{
   
    
    switch (action.type) {
        case 'ADD_EXPENSE':
          return  [ ...state, action.expense ];

        case 'REMOVE_EXPENSE':
          return state.filter( ({id}) =>  id !== action.id );

        case 'EDIT_EXPENSE':
          return state.map((expense) =>{
              if(expense.id === action.id){
                return {
                    ...expense,
                    ...action.updates,
                };
              }else{
                  return expense;
              }
          });

        default:
           return state;
    }
};

// Filter reducer:
const defaultFilterObj = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
};

// Filter Action Generators:

// set text filter
const setTextFilter = (text ='') =>{
    return {
        type: 'SET_TEXT_FILTER',
        text,
    };
};

// set sortBy filter
const setSortBy = () =>({  type: 'SET_SORT_BY_FILTER' });

// set start date
const setStartDate = (startDate) =>{
    return {
        type: 'SET_START_DATE',
        startDate,
    };
};
// set end date
const setEndDate = (endDate ) =>{
    return {
        type: 'SET_END_DATE',
        endDate,
    };
};

const filtersReducer = (state = defaultFilterObj, action)=>{
    switch (action.type) {
        case 'SET_TEXT_FILTER':
                return {
                    ...state,
                    text: action.text,
                };
        case 'SET_SORT_BY_FILTER':
               if(state.sortBy === 'date'){
                   return{
                       ...state,
                       sortBy: 'amount'
                   }
               } else {
                   return{
                       ...state,
                       sortBy: 'date',
                   }
               };

        case 'SET_START_DATE':
                return {
                    ...state,
                    startDate: action.startDate,
                };  
        case 'SET_END_DATE':
                return {
                    ...state,
                    endDate: action.endDate,
                    };        

        default:
           return state;
    }
};

const getVisibleExpenses = (expenses, filters)=>{
 console.log(expenses, filters);
 
};

const store = createStore( combineReducers({
    expenses : expensesReducer,
    filters: filtersReducer,
}) );

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses( state.expenses, state.filters ) 
    console.log(visibleExpenses);
});

const expense1 = store.dispatch(addExpense({ description: 'Going out', note: 'we ate steak'  }));
const expense2= store.dispatch(addExpense({ description: 'Going out after lock down', note: 'we ate chicken leg'  }));
// store.dispatch(removeExpense( expense1.expense));
// store.dispatch(editExpense(expense2.expense.id, {
//     description: 'We had a good time',
//     note: 'Grace became the burger king.',
// }));


// store.dispatch(setTextFilter( 'rent'));
// store.dispatch(setTextFilter());
// store.dispatch(setSortBy());
// store.dispatch(setSortBy());
// store.dispatch(setStartDate( 1012 ));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate( 1200 ));
// store.dispatch(setEndDate());