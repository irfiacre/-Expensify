import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpenses extends React.Component{
  onSubmit=(expense)=>{
    this.props.onSubmit(expense);
    this.props.history.push('/');
  }
  render(){
    return(
      <div>
        <div className="pageHeader">
          <div className="contentContainer">
            <h1 className="pageHeaderTitle">Add Expense</h1>
          </div>
        </div>
        <div className="contentContainer">

      <ExpenseForm  onSubmit = { this.onSubmit } />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>({  onSubmit: (expense)=> dispatch(addExpense(expense)) })

export default connect(undefined, mapDispatchToProps)(AddExpenses);
