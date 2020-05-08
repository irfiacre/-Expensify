import expenseSelector from '../../selectors/expenses';

describe('-------] Testing For The Expenses Selector [-------', ()=>{

    const expenses = [
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
            createdAt: -1000,
        },
        {
            id: '3',
            description: 'Credit Card Expense',
            note :'Testing Expense 3',
            amount: 4500,
            createdAt: 1000,
        },
    ];

    const defaultFilters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
    }

    test('Should return an object that is filtered and sorted by text value',()=>{
        const filters = { 
            ...defaultFilters,
            text : 't',
         } 
       
        const selectorTest = expenseSelector( expenses, filters );
        expect(selectorTest).toEqual([ expenses[2], expenses[1] ]) 

    });
});