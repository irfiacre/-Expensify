import React from 'react';
import { connect } from 'react-redux';

const expensesList =(props)=>(
    <div>
        <h2> Here is the list of our expenses </h2>
        { props.expenses.length }
        { props.filters.text }
    </div>
);

const mapStateToProps = (state)=>({
    expenses: state.expenses,
    filters: state.filters,
});


export default connect(mapStateToProps)(expensesList);
