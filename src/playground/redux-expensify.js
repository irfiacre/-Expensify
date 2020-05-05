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

// set sortBy date/Amount filter
const setSortByDate = () =>({  type: 'SET_SORT_BY_DATE' });
const setSortByAmount = () =>({  type: 'SET_SORT_BY_AMOUNT' });

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
        case 'SET_SORT_BY_DATE':
                   return{
                       ...state,
                       sortBy: 'date',
                   }; 
        case 'SET_SORT_BY_AMOUNT':
                   return{
                        ...state,
                        sortBy: 'amount',
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

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate })=>{
 return expenses.filter((expense)=>{
    const startDateMatch = typeof(startDate) !== 'number' || startDate <= expense.createdAt;

    const endDateMatch = typeof(endDate) !== 'number' || endDate >= expense.createdAt;

    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
 }).sort((a,b) => {
    
     if( sortBy === 'date' ){
         return a.createdAt < b.createdAt ? 1 : -1; // if true(1): descending , if false(-1): ascending order is being used
     }
      else if( sortBy === 'amount' ){
         return a.amount > b.amount ? 1: -1; // if true(1): descending , if false(-1): ascending order is being used
     }
 })
 
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

const expense1 = store.dispatch(addExpense({ description: 'rent', note: 'I had to pay my rent', amount: 1000, createdAt: -21000  }));
const expense2= store.dispatch(addExpense({ description: 'Going out', note: 'we ate chicken leg', amount:3500, createdAt: -1000  }));
// store.dispatch(removeExpense( expense1.expense));
// store.dispatch(editExpense(expense2.expense.id, {
//     description: 'We had a good time',
//     note: 'Grace became the burger king.',
// }));


// store.dispatch(setTextFilter('reNt'));
// store.dispatch(setTextFilter());
// store.dispatch(setSortByDate());
// store.dispatch(setSortByAmount());
// store.dispatch(setStartDate( 0 ));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate( 1250 ));
// store.dispatch(setEndDate());
