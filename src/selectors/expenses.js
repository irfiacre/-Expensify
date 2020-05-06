//  Getting all visible expenses which are FILTERED and SORTED

export default (expenses, { text, sortBy, startDate, endDate })=>{

    return expenses.filter((expense)=>{
    //  filtering by text, startDate & endDate 
       const startDateMatch = typeof(startDate) !== 'number' || startDate <= expense.createdAt;
       const endDateMatch = typeof(endDate) !== 'number' || endDate >= expense.createdAt;
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