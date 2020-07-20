import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction';

export const TransactionHistory = () => {

    const {transactions} = useContext(GlobalContext);
    return (
        <div>
            <h5 className="trhistory">Transaction History</h5>
            <ul className="unlist">
            {/* {transactions.map((transaction) => 
                    (
                    <Transaction key={transaction.id} />
                    )
                )} */}
            </ul>
        </div>
    )
}

export default TransactionHistory;