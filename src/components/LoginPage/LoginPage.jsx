import React, { useRef, useState, useEffect } from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { HiKey, HiLockClosed } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

import './loginpage.css'
import Logo from '../../assets/logo.png';

const LoginPage = () => {
    
    const userRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

  return (
    <div className='main-container'>
        <div className='navbar'>
            <img src= {Logo} alt="logo" />
            <h1>Smart Material GatePass System</h1>
        </div>
        <div className='container'>
            <div className='container-head'>
                <span style={{ writingMode: "vertical-lr" }}><HiLockClosed/></span> &nbsp;
                <span>System Log In</span>
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
                        placeholder= "Personal No."
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
                        placeholder= "ADID Password"
                        required
                    />
                </div>
                
                <NavLink id='sign-in' to= "/home">Sign In</NavLink>    
            </div>
        </div>
    </div>
  )
}

export default LoginPage