import React from 'react'
import './dashboard-edit.scss'
// import {FaTimes} from 'react-icons/fa'
import editingPageImg from '../../../../images/editPage.png'
class DashboardBudgetDetails extends React.Component{
    render(){
        return(
            <div className='dashboard-settings'>
                <h2>Editing...</h2>
                <div className='dashboard-edit-categories'>
                    <div className='dashboard-edit-categories-add-box'>
                        <h3>Create a new category</h3>
                        <div>
                            <input type="text" id="new-category-name" name="new-category-name" placeholder='Category Name'/>
                        </div>
                        <div>
                            <input type="number" id="new-category-amount" name="new-category-amount" min="0" max="1000000" placeholder='Category Budget'/>
                        </div>
                        <button className='btn btn-primary'>Add</button>
                    </div>
                    <div className='dashboard-edit-categories-items'>
                        <h3>Edit Your Categories</h3>
                        <div className='dashboard-edit-categories-items-body'>
                            <div className='dashboard-edit-categories-item'>
                                <label for="category-item-1"><span>&times;</span>Groceries</label><br/>
                                <input type="number" id="category-item-1" name="category-item-1" defaultValue='150'/>
                            </div>
                            <div className='dashboard-edit-categories-item'>
                                <label for="category-item-2"><span>&times;</span>Bills</label><br/>
                                <input type="number" id="category-item-2" name="category-item-2" defaultValue='250'/>
                            </div>
                            <div className='dashboard-edit-categories-item'>
                                <label for="category-item-3"><span>&times;</span>Transportation</label><br/>
                                <input type="number" id="category-item-3" name="category-item-3" defaultValue='350'/>
                            </div>
                            <div className='dashboard-edit-categories-item'>
                                <label for="category-item-4"><span>&times;</span>Clothes</label><br/>
                                <input type="number" id="category-item-4" name="category-item-4" defaultValue='450'/>
                            </div>
                            <div className='dashboard-edit-categories-item'>
                                <label for="category-item-5"><span>&times;</span>Restaurant</label><br/>
                                <input type="number" id="category-item-5" name="category-item-5" defaultValue='550'/>
                            </div>
                            <div className='dashboard-edit-categories-item'>
                                <label for="category-item-6"><span>&times;</span>Fun</label><br/>
                                <input type="number" id="category-item-6" name="category-item-6" defaultValue='650'/>
                            </div>
                            <div className='dashboard-edit-categories-item'>
                                <label for="category-item-7"><span>&times;</span>Others</label><br/>
                                <input type="number" id="category-item-7" name="category-item-7" defaultValue='750'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dashboard-edit-bottom'>
                    <div className='dashboard-edit-bottom-left'>
                        <div className='dashboard-edit-bottom-left-unit'>
                            <label for="profile-firstname">Your First Name</label><br/>
                            <input type="text" id="profile-firstname" name="profile-firstname" defaultValue='Saba'/>
                        </div>
                        <div className='dashboard-edit-bottom-left-unit'>
                            <label for="profile-lastname">Your Last Name</label><br/>
                            <input type="text" id="profile-lastname" name="profile-lastname" defaultValue='Mokhlesi'/>
                        </div>
                    </div>
                    <div className='dashboard-edit-bottom-right'>
                        <img src={editingPageImg} alt="budget settings editing"/>
                        <button className='btn btn-four'>Save Changes</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardBudgetDetails