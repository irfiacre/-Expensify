import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses'

const expenseListItem = ( { dispatch ,id, description, amount, createdAt })=> (
    <div>
        <h3>{ description }</h3>
        <p>Amount: { amount } - Created { createdAt }</p>
        <button onClick={()=>{ dispatch(removeExpense( { id } )) }}> 
            Remove 
        </button>
    </div>
);

export default connect()(expenseListItem);