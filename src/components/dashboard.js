import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilter from './expenseListFilter';

const dashboard = ()=>(
    <div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);


export default dashboard;
