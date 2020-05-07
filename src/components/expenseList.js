import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expenseListItem';
import filteredSortedExpenses from '../selectors/expenses';

const expensesList =(props)=>{
    return (
        <div>
            <h1> Expenses List: </h1>
            { props.expenses.map((expense)=>( <ExpenseListItem key={ expense.id }  { ...expense } /> ) )  }
        </div>
    );
};

const mapStateToProps = (state)=>({
    expenses: filteredSortedExpenses( state.expenses, state.filters ),
});


export default connect(mapStateToProps)(expensesList);
