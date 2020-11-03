import React from 'react'
// import {FaChartLine,FaRegMoneyBillAlt,FaRegCreditCard} from 'react-icons/fa'
const budgetSettingsGeneralCell = (props) =>{
    let cell = null
    if(props.icontype==='moneybill'){
        cell =
            <div className='budget-add-input-unit'>
                {/* <FaRegMoneyBillAlt color={props.iconolor} size={props.iconsize}/> */}
                <h4>{props.subject}</h4>
                <input placeholder={props.inputplaceholder} type={props.inputtype} onChange={props.inputonchange} defaultValue={props.defaultvalue}/>
            </div>
    } if(props.icontype==='creditcard'){
        cell = 
            <div className='budget-add-input-unit'>
                {/* <FaRegCreditCard color={props.iconolor} size={props.iconsize}/> */}
                <h4>{props.subject}</h4>
                <input placeholder={props.inputplaceholder} type={props.inputtype} onChange={props.inputonchange} defaultValue={props.defaultvalue}/>
            </div>
    } if(props.icontype==='chart') {
        cell =
            <div className='budget-add-input-unit'>
                {/* <FaChartLine color={props.iconolor} size={props.iconsize}/> */}
                <h4>{props.subject}</h4>
                <input placeholder={props.inputplaceholder} type={props.inputtype} onChange={props.inputonchange} defaultValue={props.defaultvalue}/>
            </div>
    }






    return(
        <div className='budget-dashboard-general-settings-right-unit'>
            {cell}
        </div>
    )
}
export default budgetSettingsGeneralCell



                        
