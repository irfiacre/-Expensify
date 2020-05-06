import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expenseListItem';
import filteredSortedExpenses from '../selectors/expenses';

const expensesList =(props)=>{
    // console.log(props.expenses);
    
    return (
        <div>
            <h2> Here is the list of our expenses </h2>
            { props.expenses.map((expense)=>( <ExpenseListItem key={ expense.id }  { ...expense } /> ) )  }
        </div>
    );
};

const mapStateToProps = (state)=>({
    expenses: filteredSortedExpenses( state.expenses, state.filters ),
});


export default connect(mapStateToProps)(expensesList);
