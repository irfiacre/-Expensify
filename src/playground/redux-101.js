import { createStore } from 'redux';

console.log('============= Redux =============');


//  Action generators
const increment = ({ incrementBy=1 } = {})=>({
        type: 'INCREMENT',
        incrementValue: incrementBy,
});

const decrement = ({ decrementBy=1 } = {})=>({
        type: 'DECREMENT',
        decrementValue: decrementBy,
});

const resetCount = ()=>({
    type: 'RESET',
});

const setCount = ({ count=101 } = {})=>({
    type: 'SET',
    count,
});

//  Reducers

const storeReducer = (state = { count: 0 }, action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementValue,
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementValue,
            }

        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count,
            };
    
        default:
            console.log('running');
            return state;
    }
};
const store = createStore(storeReducer);

 store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(increment({ incrementBy: 10 }));
store.dispatch(increment());

store.dispatch( resetCount() );

store.dispatch(decrement());
store.dispatch(decrement({ decrementBy: 100 }));

store.dispatch( setCount({ count: 100 }) );