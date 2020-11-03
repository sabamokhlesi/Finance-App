import React from 'react'
import './dashboard-edit.scss'
// import {FaTimes} from 'react-icons/fa'
import editingPageImg from '../../../../images/editPage.png'
class DashboardBudgetDetails extends React.Component{
    render(){
        return(
        <div className='dashboard-settings'>
             <h2>Settings</h2>
             <div className='dashboard-edit-categories'>
                <div className='dashboard-settings-categories-total'>
                    <h2>Total budget</h2>
                    {/* <p>Based on the budget you have assigned to each categoy</p> */}
                    <h1>$2765</h1>
                </div>
                 <div className='dashboard-settings-categories-items'>
                     <h3>Budget for Each Category</h3>
                     <div className='dashboard-edit-categories-items-body'>
                         <div className='dashboard-settings-categories-item'>
                             <h4>Grocery:  </h4>
                             <p>$350</p>
                         </div>
                         <div className='dashboard-settings-categories-item'>
                            <h4>Clothes:  </h4>
                             <p>$200</p>
                         </div>
                         <div className='dashboard-settings-categories-item'>
                            <h4>Restaurant:  </h4>
                             <p>$150</p>
                         </div>
                         <div className='dashboard-settings-categories-item'>
                            <h4>Transportation:  </h4>
                             <p>$70</p>
                         </div>
                         <div className='dashboard-settings-categories-item'>
                            <h4>fun:  </h4>
                             <p>$130</p>
                         </div>
                         <div className='dashboard-settings-categories-item'>
                            <h4>Grocery:  </h4>
                             <p>$350</p>
                         </div>
                         <div className='dashboard-settings-categories-item'>
                            <h4>Grocery:  </h4>
                             <p>$350</p>
                         </div>
                     </div>
                 </div>
             </div>
             <div className='dashboard-edit-bottom'>
                 <div className='dashboard-edit-bottom-left'>
                     <div className='dashboard-edit-bottom-left-unit'>
                        <h4>Your First Name:</h4>
                        <p>Saba</p>
                     </div>
                     <div className='dashboard-edit-bottom-left-unit'>
                        <h4>Your Last Name:</h4>
                        <p>Mokhlesi</p>
                     </div>
                 </div>
                 <div className='dashboard-edit-bottom-right'>
                     <img src={editingPageImg} alt="budget settings editing"/>
                     <button className='btn btn-four'>Edit</button>
                 </div>
             </div>
         </div>
        )
    }
}

export default DashboardBudgetDetails