// Filter Action Generators:

// set text filter
export const setTextFilter = (text ='') =>{
    return {
        type: 'SET_TEXT_FILTER',
        text,
    };
};

// set sortBy date/Amount filter
export const setSortByDate = () =>({  type: 'SET_SORT_BY_DATE' });
export const setSortByAmount = () =>({  type: 'SET_SORT_BY_AMOUNT' });

// set start date
export const setStartDate = (startDate) =>{
    return {
        type: 'SET_START_DATE',
        startDate,
    };
};
// set end date
export const setEndDate = (endDate ) =>{
    return {
        type: 'SET_END_DATE',
        endDate,
    };
};
