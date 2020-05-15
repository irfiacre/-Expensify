import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/editExpense';
import testData from '../fixtures/expensesData';

let onSubmit,onClick, history, wrapper;

beforeEach(()=>{
    onSubmit = jest.fn();
    onClick = jest.fn();
    history = { push: jest.fn() };
    wrapper =  shallow(<EditExpensePage editExpense={ onSubmit } removeExpense = { onClick } expense = { testData[1] } history={ history }  /> )
});

test('Should render edit expense page correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('Should render edit expense page on submit', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(testData[0]);
    expect(onSubmit).toHaveBeenLastCalledWith(
        testData[1].id,
        testData[0]
        );
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('Should remove expense on removeExpense ', ()=>{
    wrapper.find('button').prop('onClick')();
    expect(onClick).toHaveBeenLastCalledWith({ id: testData[1].id });
    expect(history.push).toHaveBeenLastCalledWith('/');
});
