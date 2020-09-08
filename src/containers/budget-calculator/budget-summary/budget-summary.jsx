import React from 'react'
import { FaRegChartBar,FaProjectDiagram,FaChartPie,FaChartLine,FaChartArea,FaCalculator,FaClipboardList,FaCocktail} from "react-icons/fa";
import './budget-summary.scss'
const budgetSummary = (props) =>{
    return(
        <div className='budget-summary'>
            <div className='budget-summary-total'>
            <h2>Budget Summary</h2>
                <div className='budget-summary-total-body'>
                    <div className='budget-summary-total-monthly'>
                        <FaRegChartBar color='#e9884b' size='4.5rem'/>
                        <h4 className='budget-summary-total-monthly-title'>Total Budget</h4>
                        <div className='budget-summary-total-monthly-body'>
                                <h1>$5400</h1>
                                <h5> (+20%)</h5>
                        </div>
                    </div>
                    <div className='budget-summary-total-monthly'>
                        <FaProjectDiagram color='#e9884b' size='4.5rem'/>
                        <h4 className='budget-summary-total-monthly-title'>Total Spending</h4>
                        <div className='budget-summary-total-monthly-body'>
                                <h1>$5400</h1>
                                <h5 className='color-red'> (+10%)</h5>
                        </div>
                    </div>
                    <div className='budget-summary-total-monthly'>
                        <FaChartPie color='#e9884b' size='4.5rem'/>
                        <h4 className='budget-summary-total-monthly-title'>Total Remaining</h4>
                        <div className='budget-summary-total-monthly-body'>
                                <h1>$4100</h1>
                                <h5 className='color-green'> (+70%)</h5>
                        </div>
                    </div>
                    <div className='budget-summary-total-monthly'>
                        <FaChartLine color='#e9884b' size='4.5rem'/>
                        <h4 className='budget-summary-total-monthly-title'>Total Saving</h4>
                        <div className='budget-summary-total-monthly-body'>
                                <h1>$1200</h1>
                                <h5 className='color-green'> (+15%)</h5>
                        </div>
                    </div>
                </div>
                <div className='budget-summary-total-spending'></div>
                <div className='budget-summary-total-remaining'></div>
                <div className='budget-summary-total-saving'></div>
            </div>
            <div className='budget-summary-total'>
            <h2>Spendings Overview</h2>
                <div className='budget-summary-total-body'>
                    <div className='budget-summary-total-monthly'>
                        <FaChartArea color='#e9884b' size='4.5rem'/>
                        <h4 className='budget-summary-total-monthly-title'>Groceries</h4>
                        <div className='budget-summary-total-monthly-body'>
                                <h1>$5400</h1>
                                <h5 className='color-red'> (+10%)</h5>
                        </div>
                    </div>
                    <div className='budget-summary-total-monthly'>
                        <FaClipboardList color='#e9884b' size='4.5rem'/>
                        <h4 className='budget-summary-total-monthly-title'>Bills And Rent</h4>
                        <div className='budget-summary-total-monthly-body'>
                                <h1>$3300</h1>
                                <h5> (0%)</h5>
                        </div>
                    </div>
                    <div className='budget-summary-total-monthly'>
                        <FaCocktail color='#e9884b' size='4.5rem'/>
                        <h4 className='budget-summary-total-monthly-title'>Entertainment</h4>
                        <div className='budget-summary-total-monthly-body'>
                                <h1>$5400</h1>
                                <h5 className='color-green'> (-35%)</h5>
                        </div>
                    </div>
                    <div className='budget-summary-total-monthly'>
                        <FaCalculator color='#e9884b' size='4.5rem'/>
                        <h4 className='budget-summary-total-monthly-title'>Others</h4>
                        <div className='budget-summary-total-monthly-body'>
                                <h1>$570</h1>
                                <h5 className='color-red'> (+25%)</h5>
                        </div>
                    </div>
                </div>
                <div className='budget-summary-total-spending'></div>
                <div className='budget-summary-total-remaining'></div>
                <div className='budget-summary-total-saving'></div>
            </div>
            <div className='budget-spending-overview'>
                <div className='budget-spending-groceries'></div>
                <div className='budget-spending-bills-and-rent'></div>
                <div className='budget-spending-entertainment'></div>
                <div className='budget-spending-others'></div>
            </div> 
        </div>
    )
}

export default budgetSummary