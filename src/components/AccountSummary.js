import React from 'react'

export const AccountSummary = () => {
    return (
        <div id="box">
            <div>
               <h4>INCOME</h4>
               <p className= "para plus">0.00</p>
            </div>
            <div>
                <h4>EXPENSE</h4>
                <p className= "para minus">0.00</p>
            </div>
        </div>
    )
}

export default AccountSummary;