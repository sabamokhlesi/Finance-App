import React from 'react'
import './budget-list.scss'
import { FaPencilAlt,FaTrashAlt,FaInfo} from "react-icons/fa";
class BudgetList extends React.Component{
    render(){
        return(
            <div className='budget-list-section'>
                <div className='budget-list-top'>
                    <div className='budget-list-sort-by'>
                        <label htmlFor="budget-list-sorting" className='budget-input-label'>sort by</label>
                        <select id="budget-list-sorting" name="cars" className='budget-input'>
                            <option value="Bills" className='budget-input'>Newest</option>
                            <option value="Grocery" className='budget-input'>High to Low</option>
                            <option value="Clothing" className='budget-input'>Low to high</option>
                            <option value="Entertainment" className='budget-input'>Oldest</option>
                            <option value="Transportation" className='budget-input'>Spendings first</option>
                            <option value="Income" className='budget-input'>Earning first</option>
                        </select>
                    </div>
                    <div className='budget-list-search'>
                        <label htmlFor="budget-list-search" className='budget-input-label'>search</label>
                        <input type="search" id="budget-list-search" className='budget-input' placeholder='i.e grocery'/>
                    </div>
                </div>
                <div className='budget-list-body'>
                    <div className='budget-list-item'>
                        <div className='budget-list-item-date'>Date</div>
                        <div className='budget-list-item-amount'>Amount</div>
                        <div className='budget-list-item-title'>For</div>
                        <div className='budget-list-item-by'>Added by</div>
                        <div className='budget-list-item-edit'>Edit</div>
                    </div>
                    <div className='budget-list-item'>
                        <div className='budget-list-item-date'>13/03/2020</div>
                        <div className='budget-list-item-amount'>-$78</div>
                        <div className='budget-list-item-title'>Bill</div>
                        <div className='budget-list-item-by'>Reza</div>
                        <FaPencilAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaTrashAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>  
                        <FaInfo color='#64a1a2' size='1.5rem' className='budget-list-item-icon'/> 
                    </div>
                    <div className='budget-list-item'>
                        <div className='budget-list-item-date'>12/08/2020</div>
                        <div className='budget-list-item-amount'>-$10</div>
                        <div className='budget-list-item-title'>Grocery</div>
                        <div className='budget-list-item-by'>Reza</div>
                        <FaPencilAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaTrashAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaInfo color='#64a1a2' size='1.5rem' className='budget-list-item-icon'/>
                    </div>
                    <div className='budget-list-item'>
                        <div className='budget-list-item-date'>29/05/2020</div>
                        <div className='budget-list-item-amount'>+$2000</div>
                        <div className='budget-list-item-title'>Salary</div>
                        <div className='budget-list-item-by'>Saba</div>
                        <FaPencilAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaTrashAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaInfo color='#64a1a2' size='1.5rem' className='budget-list-item-icon'/>
                    </div>
                    <div className='budget-list-item'>
                        <div className='budget-list-item-date'>09/08/2020</div>
                        <div className='budget-list-item-amount'>-$15</div>
                        <div className='budget-list-item-title'>Clothes</div>
                        <div className='budget-list-item-by'>Saba</div>
                        <FaPencilAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaTrashAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaInfo color='#64a1a2' size='1.5rem' className='budget-list-item-icon'/>
                    </div>
                    <div className='budget-list-item'>
                        <div className='budget-list-item-date'>13/03/2020</div>
                        <div className='budget-list-item-amount'>-$78</div>
                        <div className='budget-list-item-title'>Bill</div>
                        <div className='budget-list-item-by'>Reza</div>
                        <FaPencilAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaTrashAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaInfo color='#64a1a2' size='1.5rem' className='budget-list-item-icon'/>
                    </div>
                    <div className='budget-list-item'>
                        <div className='budget-list-item-date'>12/08/2020</div>
                        <div className='budget-list-item-amount'>-$10</div>
                        <div className='budget-list-item-title'>Grocery</div>
                        <div className='budget-list-item-by'>Reza</div>
                        <FaPencilAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaTrashAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaInfo color='#64a1a2' size='1.5rem' className='budget-list-item-icon'/>
                    </div>
                    <div className='budget-list-item'>
                        <div className='budget-list-item-date'>29/05/2020</div>
                        <div className='budget-list-item-amount'>+$2000</div>
                        <div className='budget-list-item-title'>Salary</div>
                        <div className='budget-list-item-by'>Saba</div>
                        <FaPencilAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaTrashAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaInfo color='#64a1a2' size='1.5rem' className='budget-list-item-icon'/>
                    </div>
                    <div className='budget-list-item'>
                        <div className='budget-list-item-date'>09/08/2020</div>
                        <div className='budget-list-item-amount'>-$15</div>
                        <div className='budget-list-item-title'>Clothes</div>
                        <div className='budget-list-item-by'>Saba</div>
                        <FaPencilAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaTrashAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaInfo color='#64a1a2' size='1.5rem' className='budget-list-item-icon'/>
                    </div>
                    <div className='budget-list-item'>
                        <div className='budget-list-item-date'>13/03/2020</div>
                        <div className='budget-list-item-amount'>-$78</div>
                        <div className='budget-list-item-title'>Bill</div>
                        <div className='budget-list-item-by'>Reza</div>
                        <FaPencilAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaTrashAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaInfo color='#64a1a2' size='1.5rem' className='budget-list-item-icon'/>
                    </div>
                    <div className='budget-list-item'>
                        <div className='budget-list-item-date'>12/08/2020</div>
                        <div className='budget-list-item-amount'>-$10</div>
                        <div className='budget-list-item-title'>Grocery</div>
                        <div className='budget-list-item-by'>Reza</div>
                        <FaPencilAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaTrashAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaInfo color='#64a1a2' size='1.5rem' className='budget-list-item-icon'/>
                    </div>
                    <div className='budget-list-item'>
                        <div className='budget-list-item-date'>29/05/2020</div>
                        <div className='budget-list-item-amount'>+$2000</div>
                        <div className='budget-list-item-title'>Salary</div>
                        <div className='budget-list-item-by'>Saba</div>
                        <FaPencilAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaTrashAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaInfo color='#64a1a2' size='1.5rem' className='budget-list-item-icon'/>
                    </div>
                    <div className='budget-list-item'>
                        <div className='budget-list-item-date'>09/08/2020</div>
                        <div className='budget-list-item-amount'>-$15</div>
                        <div className='budget-list-item-title'>Clothes</div>
                        <div className='budget-list-item-by'>Saba</div>
                        <FaPencilAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaTrashAlt color='#a9c6c7' size='1.5rem' className='budget-list-item-icon'/>
                        <FaInfo color='#64a1a2' size='1.5rem' className='budget-list-item-icon'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BudgetList