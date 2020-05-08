import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expenseListItem';
import filteredSortedExpenses from '../selectors/expenses';

export const ExpensesList =(props)=>{
    return (
        <div className="contentContainer">
            <div className="listHeader">
                <div className="mobile">Expenses</div>
                <div className="deskTop">Expense</div>
                <div className="deskTop">Amount</div>
            </div>
            <div className="listBody">
                { props.expenses.length === 0 ? (
                <div className="noListMessage">
                    <span>No expenses</span>
                </div>
            ) : (
                props.expenses.map((expense)=>( <ExpenseListItem key={ expense.id }  { ...expense } /> ) )
                )};  
            </div>
        </div>
    );
};

const mapStateToProps = (state)=>({
    expenses: filteredSortedExpenses( state.expenses, state.filters ),
});


export default connect(mapStateToProps)(ExpensesList);
