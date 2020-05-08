import moment from 'moment';
import filterReducer from '../../reducers/filters';
import { setSortByAmount, setSortByDate,setTextFilter,setStartDate, setEndDate } from '../../actions/filters';

describe('-----------( Test for filter Reducers )------------- ',()=>{

    const defaultFilterObj = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    };

    test(' should setup default state filter values ', ()=>{
        const state = filterReducer( undefined,{ type: '@@INIT' } );
        expect(state).toEqual({ ...defaultFilterObj });

    });

    test(' should setup state filter values from sortBy amount ', ()=>{
        const state = filterReducer( undefined, setSortByAmount() );
        expect(state.sortBy).toBe('amount');
    });

    test(' should setup state filter values from sortBy date ', ()=>{
        const currentFilterObj = {
            text: '',
            sortBy: 'amount',
            startDate: undefined,
            endDate: undefined,
        };
        const state = filterReducer( currentFilterObj, setSortByDate() );
        expect(state.sortBy).toBe('date');
    });

    test(' should setup state filter values from text value ', ()=>{
        const state = filterReducer( undefined, setTextFilter('rent') );
        expect(state.text).toBe('rent');
    });

    test(' should setup state filter values from start date', ()=>{
        const state = filterReducer( undefined, setStartDate(moment(0)) );
        expect(state.startDate).toEqual(moment(0));
    });

    test(' should setup state filter values from end date', ()=>{
        const state = filterReducer( undefined, setEndDate(moment(10)) );
        expect(state.endDate).toEqual(moment(10));
    });


});
