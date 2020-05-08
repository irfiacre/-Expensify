import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expenseForm';
import { editExpense, removeExpense } from '../actions/expenses';


const updateExpense = (props)=>{
    return(
    <div>
        <div className="pageHeader">
          <div className="contentContainer">
            <h1 className="pageHeaderTitle">Edit Expense</h1>
          </div>
        </div>
        <div className="contentContainer">
        <ExpenseForm 
            expense = { props.expense }
            onSubmit={ (expense)=>{
                props.dispatch(editExpense(props.match.params.id,expense));
                props.history.push('/');
            } }
        />

        <button 
        className="button remove"
        onClick={()=>{ 
            props.dispatch(removeExpense( { id: props.match.params.id } )); 
            props.history.push('/');
           }}> 
            Remove 
        </button>
    </div>
    </div>
);
};

const mapStateToProps = (state, props)=>({ 
    expense: state.expenses.find(expense => expense.id === props.match.params.id ),
});

export default connect(mapStateToProps)(updateExpense);
