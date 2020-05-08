import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/header';


// Resource: https://enzymejs.github.io/enzyme/docs/api/shallow.html
// Jest (toJSON config): https://jestjs.io/docs/en/configuration.html

describe('*************** Testing the Header component ***************',()=>{
    test('Should render the Header correctly', ()=>{
        const wrapper = shallow( <Header /> );
        expect(wrapper).toMatchSnapshot();
    });

});
