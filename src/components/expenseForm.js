import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const now = moment().format('YYYY-MM-DD');
// console.log(now);
 

export default class ExpenseForm extends React.Component{
    state = {
        description :'',
        amount: '',
        note: '',
        createdAt : moment(),
        calendarFocused: false,
        error: ''

    };

    onDescriptionChange =(e)=>{
        const description = e.target.value;
        this.setState(()=>({ description }));
    };

    onAmountChange =(e)=>{
        const amount = e.target.value;
        if( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/) ){
            this.setState(()=>({ amount }));
        };
    };

    onAddNoteChange =(e)=>{
        const note = e.target.value;
        this.setState(()=>({ note }));
    };

    onDateChange = (createdAt)=>{
        if( createdAt ){
            this.setState(()=>({ createdAt }));
        };
    };

    onFocusChange = ( { focused } )=>{
        this.setState(()=>({ calendarFocused: focused }));
    };

    onFormSubmit = (e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({ error: 'Please provide both the description and amount.' }));
        } else {
            this.setState(()=>({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat((this.state.amount), 10) *100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf(),
            });
        }
    };


    render(){
        return(
            <div>
                { this.state.error && <p>{ this.state.error }</p>  }

                <form onSubmit = { this.onFormSubmit }>
                <input type='text' 
                    placeholder='Description'
                    value = { this.state.description }
                    onChange= { this.onDescriptionChange }
                    autoFocus
                />
                <input type='text' 
                    value= { this.state.amount }
                    placeholder='Amount'
                    onChange = { this.onAmountChange }
                />

                <SingleDatePicker
                    date={ this.state.createdAt }
                    onDateChange = { this.onDateChange }
                    focused = { this.state.calendarFocused }
                    onFocusChange = { this.onFocusChange }
                    numberOfMonths = { 1 }
                    isOutsideRange = { ()=> false }
                />
                
                <textarea 
                    placeholder='Add a note for your expense(optional)'
                    onChange={ this.onAddNoteChange }
                ></textarea>
                    <button> Add Expense </button>
                </form>
            </div>
        )
    }
};
