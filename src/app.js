import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import AppRouter from './routers/appRouter';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(()=>{
});

store.dispatch( addExpense({ description: 'Gas Bill', note: 'I had to pay my gas bill for cooking', amount: 3000  }) );
store.dispatch( addExpense({ description: 'Water Bill', note: 'This is related to house hold bills',createdAt: 1000 }) );
store.dispatch( addExpense({ description: 'Rent', note: 'This is related to house hold bills', amount: 15000  }) );

const appDiv = document.getElementById('app');
const jsx =(
    <Provider store= { store } >
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, appDiv);
