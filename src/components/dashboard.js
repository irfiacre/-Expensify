import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilter from './expenseListFilter';

const dashboard = ()=>(
    <div>
        <div className="contentContainer">
            <h2 className="dashboardTitle">Sort By</h2>
        </div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);


export default dashboard;
