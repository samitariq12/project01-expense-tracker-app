import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
             <h5 className="trhistory newtrx">Add New Transaction</h5>
             <form>
                 <label htmlFor="desid" className="label">Description</label>
                 <input id="desid" type="text" placeholder="Details of transaction"/>
                    <br></br>
                 <label htmlFor="trid" className="label">Transaction Amount</label>
                 <input id="trid" type="number" placeholder="Amount of transaction"/>

                 <button type="submit" id="submit">Add Transaction</button>
             </form>
        </div>
    )
}
export default AddTransaction;