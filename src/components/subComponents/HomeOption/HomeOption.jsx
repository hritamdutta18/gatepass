import React from 'react'
import { NavLink } from 'react-router-dom'
import { ImEnter } from 'react-icons/im'

import './homeoption.css'
import employee_logo from '../../../assets/employee.png'
import vendor_logo from '../../../assets/vendor.png'

const HomeOption = ( { employee } ) => {

    return (
        <NavLink 
            className='card' 
            to="/login"
            state={{ employee: employee }}
        >
            <div className='card-icon-container'>
                <img 
                    src= { employee ? employee_logo : vendor_logo } 
                    alt= { employee ? "Employee Icon" : "Vendor Icon" } 
                />
            </div>

            <div className='card-content-container'>
                <h2>{ employee ? "Employee" : "Vendor" }</h2>
                <button><ImEnter /></button>                
            </div>            
        </NavLink>
    )
}

export default HomeOption