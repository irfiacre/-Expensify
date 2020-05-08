import expensesReducer from '../../reducers/expenses';
import { addExpense,editExpense,removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expensesData';

describe('-----------( Test for Expenses Reducer )------------- ',()=>{
    const simpleExpense = {
            id: '100',
            description: 'Laptop Expense',
            note :'',
            amount: 1950,
            createdAt: 0,
    };

    test(' should setup default state expense values ', ()=>{
        const state = expensesReducer( undefined,{ type: '@@INIT' } );
        expect(state).toEqual( [] );
    });
    
    test('should add a new expense',()=>{
        const state = expensesReducer(expenses, addExpense({ ...simpleExpense }));
        expect(state).toEqual([ ...expenses, { ...simpleExpense, id: expect.any(String) }]);
    });

    test('should edit an existing expense',()=>{
        const state = expensesReducer(expenses, editExpense(expenses[0].id, { amount:simpleExpense.amount }));
        expect(state[0]).toEqual({ 
            ...expenses[0],
            amount: simpleExpense.amount,
         });
    });

    test('should NOT edit an existing expense',()=>{
        const state = expensesReducer(expenses, editExpense('kJAKakKAKJj',{ ...simpleExpense }));
        expect(state).toEqual( [ ...expenses ] );
    });

    test( 'Should Remove an Expense', ()=>{
        const state = expensesReducer( expenses,removeExpense( { id: expenses[2].id } )  );
        expect(state).toEqual([ expenses[0],expenses[1] ])
    });
    test( 'Should Not Remove an Expense because the id is wrong', ()=>{
        const state = expensesReducer( expenses,removeExpense( { id: '123==' } )  );
        expect(state).toEqual(expenses);
    });
});
