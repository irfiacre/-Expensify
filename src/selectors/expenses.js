import moment from 'moment';

//  Getting all visible expenses which are FILTERED and SORTED

export default (expenses, { text, sortBy, startDate, endDate })=>{

    return expenses.filter((expense)=>{
    //  filtering by text, startDate & endDate 
       const createdAtMoment = moment( expense.createdAt );
       const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
       const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
       const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
   
       return startDateMatch && endDateMatch && textMatch;
       
    }).sort((a,b) => {
       
        if( sortBy === 'date' ){
             // if true(1): descending , if false(-1): ascending order is being used
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if( sortBy === 'amount' ){
             // if true(1): descending , if false(-1): ascending order is being used
            return a.amount < b.amount ? 1: -1; 
        };
    });
    
   };