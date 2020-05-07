import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { v4 as uuidv4 } from 'uuid';
import { setTextFilter,setSortByAmount, setSortByDate, setStartDate,setEndDate } from '../actions/filters';

class ExpenseListFilter extends React.Component{
    state = {
        calendarFocused: null,
    }

    onDatesChange = ({ startDate, endDate })=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange=( calendarFocused )=>{
        this.setState(()=>({ calendarFocused }));
    }
    render(){
        return (
            <div>
                <input type='text' 
                    value={ this.props.filters.text } 
                    placeholder='Enter a filter text' 
                    onChange={(e)=>{
                    props.dispatch(setTextFilter(e.target.value));
                    }} 
                />
                <select 
                    value={ this.props.filters.sortBy }
                    onChange={ (e)=>{ 
                        if(e.target.value === 'date'){
                            return this.props.dispatch(setSortByDate());
                        } else if(e.target.value === 'amount'){
                            return this.props.dispatch(setSortByAmount());
                        }
                     } }
                >
                    <option value='date' >Date</option>
        
                    <option value='amount'>Amount</option>
                </select>
                < DateRangePicker 
                    startDate = { this.props.filters.startDate }
                    startDateId = { uuidv4() }
                    endDate = { this.props.filters.endDate }
                    endDateId = { uuidv4() }
                    onDatesChange ={ this.onDatesChange }
                    focusedInput = { this.state.calendarFocused }
                    onFocusChange = { this.onFocusChange }
                    showClearDates = { true }
                    numberOfMonths = { 1 }
                    isOutsideRange = { ()=> false }
                />
        
            </div>
        );
    }
}
// const expenseListFilter = (props)=>

const mapStateToProps = (state)=>({  filters: state.filters  });

export default  connect(mapStateToProps)(ExpenseListFilter);

