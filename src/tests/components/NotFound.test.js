import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/notFound';

describe('*************** Testing the NotFound component ***************',()=>{
    test('Should render the NotFound page correctly', ()=>{
        const wrapper = shallow( <NotFound /> );
        expect(wrapper).toMatchSnapshot();
    });

});
