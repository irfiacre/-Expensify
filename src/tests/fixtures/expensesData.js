import moment from 'moment';
   
export default [
        {
            id: '1',
            description: 'Gum Expense',
            note :'Testing Expense 1',
            amount: 195,
            createdAt: 0,
        },
        {
            id: '2',
            description: 'Rent Expense',
            note :'Testing Expense 2',
            amount: 109500,
            createdAt: moment(0).subtract(4, 'days').valueOf(),
        },
        {
            id: '3',
            description: 'Credit Card Expense',
            note :'Testing Expense 3',
            amount: 4500,
            createdAt: moment(0).add(4, 'days').valueOf(),
        },
    ];
