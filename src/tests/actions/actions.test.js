import moment from 'moment';
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import { setTextFilter, setSortByDate, setSortByAmount, setEndDate, setStartDate } from '../../actions/filters';

describe('===========> Testing All Expense Actions <===============',()=>{

    test('should set up the remove expense action', ()=>{
        const removeAction = removeExpense( { id: '123abc' } );
        expect(removeAction).toEqual({
            type: 'REMOVE_EXPENSE',
            id: '123abc'
        });
    });

    test('should set up the edit expense action', ()=>{
        const editAction = editExpense( '123abc', { 
            description: 'Testing for tests',
            amount: 1000
         });

        expect(editAction).toEqual({
            type: 'EDIT_EXPENSE',
            id: '123abc',
            updates:{ 
                description: 'Testing for tests',
                amount: 1000
             },
        });
    });

    test('should set up the add expense action', ()=>{
        const testExpenseData =  { 
            description: 'Testing for tests',
            note: 'Testing for add expense',
            amount: 1000,
            createdAt: 20,
         };
        const addExpenseAction = addExpense(testExpenseData);

        expect(addExpenseAction).toEqual({
            type: 'ADD_EXPENSE',
            expense: { 
                ...testExpenseData,
                id: expect.any(String),
             }
        });
    });

    test('should set up the add expense action with default data', ()=>{

        const addExpenseActionDefault = addExpense();

        expect(addExpenseActionDefault).toEqual({
            type: 'ADD_EXPENSE',
            expense: { 
                id: expect.any(String),
                description : '', 
                note : '', 
                amount :  0,
                createdAt :  0,
             }
        });
    });
});

describe('===========< Testing All Filter Actions >===============',()=>{

    test('should set up the SET_TEXT_FILTER action', ()=>{
        const setTextFilterAction = setTextFilter( 'test' );
        expect(setTextFilterAction).toEqual({
            type: 'SET_TEXT_FILTER',
            text:'test',
        });
    });

    test('should set up the SET_TEXT_FILTER action with default value', ()=>{
        const setTextFilterAction = setTextFilter( '' );
        expect(setTextFilterAction).toEqual({
            type: 'SET_TEXT_FILTER',
            text:'',
        });
    });

    test('should set up the SET_SORT_BY_DATE action', ()=>{
        expect(setSortByDate()).toEqual({
            type: 'SET_SORT_BY_DATE'
        });
    });
    test('should set up the SET_SORT_BY_AMOUNT action', ()=>{
        expect(setSortByAmount()).toEqual({
            type: 'SET_SORT_BY_AMOUNT'
        });
    });

    test('should set up the SET_START_DATE action', ()=>{
        const setStartDateAction = setStartDate(moment(0));

        expect(setStartDateAction).toEqual({
            type: 'SET_START_DATE',
            startDate: moment(0),
        });
    });

    test('should set up the SET_END_DATE action', ()=>{
        const setEndDateAction = setEndDate(moment(10));

        expect(setEndDateAction).toEqual({
            type: 'SET_END_DATE',
            endDate: moment(10),
        });
    });

});
