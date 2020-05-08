import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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