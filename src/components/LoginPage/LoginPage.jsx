import React, { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import { HiKey, HiLockClosed } from 'react-icons/hi'
import { useLocation } from "react-router-dom";

import './loginpage.css'
import Logo from '../../assets/logo.png';

const LoginPage = () => {
    
    const userRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');

    useEffect(() => userRef.current.focus(), [])
    const { employee } = useLocation().state;


    return (
        <div className='main-container'>
            <div className='navbar'>
                <img src= {Logo} alt="logo" />
                <h1>Smart Material Gatepass System</h1>
            </div>
            
            <div className='cards'>
                <div className='container'>
                    <div className='container-head'>
                        <span style={{ writingMode: "vertical-lr" }}><HiLockClosed/></span> &nbsp;
                        <span>{employee ? "Employee" : "Vendor"}&nbsp;Log In</span>
                    </div>

                    <div className='container-body'>
                        <div className='input-field'>
                            <span><BsFillPersonFill/></span>

                            <input
                                type="text"
                                id="personal-num"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                placeholder= { employee ? "Personal No." : "Username" }
                                required
                            />
                        </div>
                        
                        <div className='input-field'>
                            <span><HiKey/></span>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                placeholder= { employee ? "ADID Password" : "Password" }
                                required
                            />
                        </div>
                        
                        <NavLink id= 'sign-in' to= "/dashboard" state={{ employee: employee }}>Sign In</NavLink>  
                        <NavLink id= 'back-home' to= "/">Go to Home Page</NavLink>  
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default LoginPage