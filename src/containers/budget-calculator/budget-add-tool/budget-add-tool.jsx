import React from 'react'
import './budget-add-tool.scss'

class BudgetAddTool extends React.Component{
    render()
    {
        return(
            <div className='budget-add-section'>
                <h2>Add a New Transaction</h2>
                <form className='budget-add-body'>
                    <div className='budget-input-unit'>
                        <label htmlFor="spending-amount-input" className='budget-input-label'>Amount</label>
                        <input type="number" id='spending-amount-input' placeholder='i.e 100' className='budget-add-amount budget-input'/>
                    </div>
                    <div className='budget-input-unit'>
                        <label htmlFor="spending-amount-input" className='budget-input-label'>Title</label>
                        <input type="text" id='spending-amount-input' placeholder='i.e internet bill' className='budget-add-amount budget-input'/>
                    </div>
                    <div className='budget-input-unit'>
                        <label htmlFor="datemin" className='budget-input-label'>Date</label>
                        <input type="date" id="datemin" name="datemin" min="2000-01-02" className='budget-input'></input>
                    </div>
                    <div className='budget-input-unit'>
                        <label htmlFor="transaction-type" className='budget-input-label'>Type</label>
                        <select id="transaction-type" name="type" className='budget-input'>
                            <option value="spending" className='budget-input'>Spending</option>
                            <option value="earning" className='budget-input'>Earning</option>
                        </select>
                    </div>
                    <div className='budget-input-unit'>
                        <label htmlFor="spending-writer-input" className='budget-input-label'>By</label>
                        <input type="text" id='spending-writer-input' placeholder='i.e John' className='budget-add-amount budget-input'/>
                    </div>
                    <div className='budget-input-unit'>
                        <label htmlFor="transaction-category" className='budget-input-label'>Category</label>
                        <select id="transaction-category" name="cars" className='budget-input'>
                            <option value="" className='budget-input'>-sellect-</option>
                            <option value="Bills" className='budget-input'>Bills</option>
                            <option value="Grocery" className='budget-input'>Grocery</option>
                            <option value="Clothing" className='budget-input'>Clothing</option>
                            <option value="Entertainment" className='budget-input'>Entertainment</option>
                            <option value="Transportation" className='budget-input'>Transportation</option>
                            <option value="Income" className='budget-input'>Income</option>
                            <option value="Rent" className='budget-input'>Rent</option>
                            <option value="Restaurant" className='budget-input'>Restaurant</option>
                            <option value="Others" className='budget-input'>Transportation</option>
                        </select>
                    </div>
                    <div className='budget-input-unit'>
                        <label htmlFor="spending-note" className='budget-input-label'>Note</label>
                        <textarea type="textarea" rows="1" cols='50' id='spending-note' placeholder='i.e note: Paid for the next 6 months' className='budget-add-amount budget-input'/>
                    </div>
                    <div className='budget-input-btn'>
                        <input type="submit" id='spending-input-submit' value='Add' className='btn btn-primary budget-add-submit'/>
                        <input type="reset" value='Reset' className='btn btn-four budget-add-submit'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default BudgetAddTool