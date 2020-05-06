import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import AppRouter from './router/appRouter';

const store = configureStore();

// console.log(store.getState());

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses( state.expenses, state.filters ) 
    console.log(visibleExpenses);
});

store.dispatch( addExpense({ description: 'Gas Bill', note: 'I had to pay my gas bill for cooking', amount: 3000, createdAt: 1000  }) );
store.dispatch( addExpense({ description: 'Water Bill', note: 'This is related to house hold bills', amount: 500, createdAt: -21000  }) );

store.dispatch( setTextFilter('Gas') );


const appDiv = document.getElementById('app');
const jsx =(
    <Provider store= { store } >
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, appDiv);
