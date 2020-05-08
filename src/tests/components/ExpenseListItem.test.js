import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/expenseListItem';
import expensesTestData from '../fixtures/expensesData';

test('Should render Expense List Item', ()=>{
    const wrapper = shallow( < ExpenseListItem  { ...expensesTestData[0] } /> );
    expect(wrapper).toMatchSnapshot();
});
