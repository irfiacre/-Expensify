import React from 'react';
import { shallow } from 'enzyme';
import DashBoard from '../../components/dashboard';

describe('*************** Testing the DashBoard  component ***************',()=>{
    test('Should render the DashBoard  page correctly', ()=>{
        const wrapper = shallow( <DashBoard  /> );
        expect(wrapper).toMatchSnapshot();
    });

});