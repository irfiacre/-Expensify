import moment from 'moment';
import expenseSelector from '../../selectors/expenses';
import expenses from '../fixtures/expensesData';

describe('-------] Testing For The Expenses Selector [-------', ()=>{

    const defaultFilters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
    }

    test('Should return an array that is filtered by TEXT value',()=>{
        const filters = { 
            ...defaultFilters,
            text : 't',
         } 
        const selectorTest = expenseSelector( expenses, filters );
        expect(selectorTest).toEqual([ expenses[2], expenses[1] ]) 
    });

    test('Should return an array that is filtered by START_DATE',()=>{
        const filters = { 
            ...defaultFilters,
            startDate: moment(0),
         } 
        const selectorTest = expenseSelector( expenses, filters );
        expect(selectorTest).toEqual([ expenses[2], expenses[0] ]) 
    });

    test('Should return an array that is filtered by END_DATE date',()=>{
        const filters = { 
            ...defaultFilters,
            endDate: moment(0),
         } 
        const selectorTest = expenseSelector( expenses, filters );
        expect(selectorTest).toEqual([ expenses[0], expenses[1] ]) 
    });

    test('Should return an array that is sorted by DATE',()=>{
        const filters = { 
            ...defaultFilters,
            sortBy: 'date',
         } 
        const selectorTest = expenseSelector( expenses, filters );
        expect(selectorTest).toEqual([ expenses[2], expenses[0], expenses[1] ]) 
    });

    test('Should return an array that is sorted by AMOUNT',()=>{
        const filters = { 
            ...defaultFilters,
            sortBy: 'amount',
         } 
        const selectorTest = expenseSelector( expenses, filters );
        expect(selectorTest).toEqual([ expenses[1], expenses[2], expenses[0] ]) 
    });

});
