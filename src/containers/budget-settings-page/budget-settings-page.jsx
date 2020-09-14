import React from 'react'
import './budget-settings-page.scss'
import { FaCarrot,FaPencilAlt,FaWallet,FaRegClipboard,FaRegCreditCard,FaRegStickyNote} from "react-icons/fa";
class BudgetSettingsPage extends React.Component{
    render(){
        return(
            <div className='budget-settings-page'>
                <div className='budget-dashboard'>
                    <div className='budget-dashboard-nav'>
                        <div className='budget-dashboard-nav-logo'></div>
                        <div className='budget-dashboard-nav-items'>
                            <div className='budget-dashboard-nav-item'></div>
                            <div className='budget-dashboard-nav-item'></div>
                            <div className='budget-dashboard-nav-item'></div>
                            <div className='budget-dashboard-nav-item'></div>
                        </div>
                    </div>
                    <div className='budget-dasboard-body'>
                        <div className='budget-dashboard-body-left'>
                            <h2>Your Monthly Budget For Each Category</h2>
                            <div className='budget-dashboard-category'>
                                <FaPencilAlt color='#a9c6c7' size='1.5rem' className=''/>
                                <div>
                                    <FaCarrot color='#64a1a2' size='3rem'/>
                                    <div>
                                        <h3>Groceries</h3>
                                        <h1>$400</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='budget-dashboard-category'>
                                <FaPencilAlt color='#a9c6c7' size='1.5rem' className=''/>
                                <div>
                                    <FaCarrot color='#64a1a2' size='3rem'/>
                                    <div>
                                        <h3>Restaurant</h3>
                                        <h1>$150</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='budget-dashboard-category'>
                                <FaPencilAlt color='#a9c6c7' size='1.5rem' className=''/>
                                <div>
                                    <FaCarrot color='#64a1a2' size='3rem'/>
                                    <div>
                                        <h3>Entertainment</h3>
                                        <h1>$180</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='budget-dashboard-body-right'>
                            <div className='budget-dasboard-total-amounts'>
                                <FaPencilAlt color='#a9c6c7' size='1.5rem' className=''/>
                                <div>
                                    <FaWallet color='#64a1a2' size='3rem'/>
                                    <div>
                                        <h3>Total Spendings By Now</h3>
                                        <h1>$180</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='budget-dasboard-total-amounts'>
                                <FaPencilAlt color='#a9c6c7' size='1.5rem' className=''/>
                                <div>
                                    <FaRegClipboard color='#64a1a2' size='3rem'/>
                                    <div>
                                        <h3>Total Spendings By Now</h3>
                                        <h1>$180</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='budget-dasboard-total-amounts'>
                                <FaPencilAlt color='#a9c6c7' size='1.5rem' className=''/>
                                <div>
                                    <FaRegCreditCard color='#64a1a2' size='3rem'/>
                                    <div>
                                        <h3>Total Spendings By Now</h3>
                                        <h1>$180</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='budget-dasboard-total-amounts'>
                                <FaPencilAlt color='#a9c6c7' size='1.5rem' className=''/>
                                <div>
                                    <FaRegStickyNote color='#64a1a2' size='3rem'/>
                                    <div>
                                        <h3>Total Spendings By Now</h3>
                                        <h1>$180</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BudgetSettingsPage