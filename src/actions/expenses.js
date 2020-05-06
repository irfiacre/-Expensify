import { v4 as uuidv4 } from 'uuid';

// ACTION GENERATORS
//  add expense
export const addExpense = ({ 
    description='', 
    note='', 
    amount= 0.01, 
    createdAt= 0,
    
    } = {} )=>{
    return {
        type : 'ADD_EXPENSE',
        expense: { 
            id: uuidv4(),
            description,
            note,
            amount,
            createdAt, 
         }
    };
};

//  remove expense
export const removeExpense = ({ id } = {})=>{
    return { 
        type: 'REMOVE_EXPENSE',
        id,
     };
};

// edit expenses
export const editExpense = (id, updates)=>{
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates,
    }
};
