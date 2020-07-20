import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
const initialState = {
    transactions: [
        {id: 1, description: "Income" , transactionAmount: 2000 },
        {id: 2, description: "Income1" , transactionAmount: 1000 },
        {id: 3, description: "Expense" , transactionAmount: -3000 },
        {id: 4, description: "Expense1" , transactionAmount: -200 },
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({childern}) =>{

    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (

        <GlobalContext.Provider value={

            {
                transaction: state.transactions
            }
        }>
        {childern}
        </GlobalContext.Provider>
    )
}
