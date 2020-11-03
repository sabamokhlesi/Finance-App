import React from 'react'
import './dashboard-edit.scss'
// import {FaTimes} from 'react-icons/fa'
import editingPageImg from '../../../../images/editPage.png'
class DashboardBudgetDetails extends React.Component{
    state={
        editing:false
    }

    editHandler=()=>{this.setState({editing:true})}
    saveHandler=()=>{this.setState({editing:false})}

    render(){
        let view
        if(this.state.editing){
            view =[
                <h2>Editing...</h2>,
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
                ,<div className='dashboard-edit-bottom'>
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
                        <button className='btn btn-four' onClick={()=>this.saveHandler()}>Save Changes</button>
                    </div>
                </div>
                ]
        } else {
            view = [
             <h2>Settings</h2>,
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
             ,<div className='dashboard-edit-bottom'>
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
                     <button className='btn btn-four' onClick={()=>this.editHandler()}>Edit</button>
                 </div>
             </div>
             ]
        }
        return(<div className='dashboard-settings'>{view}</div>)
    }
}

export default DashboardBudgetDetails