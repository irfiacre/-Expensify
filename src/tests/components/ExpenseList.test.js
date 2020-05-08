import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesList } from '../../components/expenseList';
import expensesTestData from '../fixtures/expensesData';

test('Should render expenses list correctly', ()=>{
    const wrapper = shallow( <ExpensesList expenses={ expensesTestData } /> );
    expect(wrapper).toMatchSnapshot();
});

test('Should render no expenses', ()=>{
    const wrapper = shallow( <ExpensesList expenses={[ ]} /> );
    expect(wrapper).toMatchSnapshot();
});
