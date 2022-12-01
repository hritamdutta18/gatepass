import React from 'react'

import Logo from '../../assets/logo.png'
import HomeOption from '../subComponents/HomeOption/HomeOption'
import './homepage.css'
import '../LoginPage/loginpage.css'

const HomePage = () => {

    return (
        <div className='main-container'>
            <div className='navbar'>
                <img src= { Logo } alt="logo" />
                <h1>Smart Material Gatepass System</h1>
            </div>
            
            <div className='cards'>                    
                <div className='card-container'>
                    <HomeOption employee={true}/>
                </div>

                <div className='card-container'>
                    <HomeOption employee={false}/>
                </div>
            </div>
        </div>
    )
}

export default HomePage