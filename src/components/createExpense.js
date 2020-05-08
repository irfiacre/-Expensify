import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expenseForm';
import { addExpense } from '../actions/expenses';

const createExpense = (props)=>(
    <div>
        <div className="pageHeader">
          <div className="contentContainer">
            <h1 className="pageHeaderTitle">Add Expense</h1>
          </div>
        </div>
        <div className="contentContainer">
        <ExpenseForm 
            onSubmit = { (expense)=>{ 
            props.dispatch(addExpense(expense));
            props.history.push('/');
        } }
        />
        </div>
    </div>

); 

const mapStateToProps = (state)=> ({ expenses: state.expenses });

export default connect(mapStateToProps)(createExpense);   