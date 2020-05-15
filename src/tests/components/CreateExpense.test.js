import React from 'react';
import { shallow } from 'enzyme';
import { AddExpenses }  from '../../components/createExpense';
import testData from '../fixtures/expensesData';

let onSubmit, history, wrapper;

// Resource: https://jestjs.io/docs/en/api
//           https://jestjs.io/docs/en/api#beforeeachfn-timeout

beforeEach(()=>{
    onSubmit = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow( <AddExpenses onSubmit={ onSubmit } history={ history } /> );
});

it('Should render add expense correctly:', ()=>{
    expect(wrapper).toMatchSnapshot();
});

it('should handle onSubmit',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(testData[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith( testData[1] )
});
