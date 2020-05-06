import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter,setSortByAmount, setSortByDate } from '../actions/filters';

const expenseListFilter = (props)=>(
    <div>
        <input type='text' 
            value={ props.filters.text } 
            placeholder='Enter a filter text' 
            onChange={(e)=>{
            props.dispatch(setTextFilter(e.target.value));
            }} 
        />
        <select 
            value={ props.filters.sortBy }
            onChange={ (e)=>{ 
                if(e.target.value === 'date'){
                    return props.dispatch(setSortByDate());
                } else if(e.target.value === 'amount'){
                    return props.dispatch(setSortByAmount());
                }
             } }
        >
            <option value='date' >Date</option>

            <option value='amount'>Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state)=>({  filters: state.filters  });

export default  connect(mapStateToProps)(expenseListFilter);
