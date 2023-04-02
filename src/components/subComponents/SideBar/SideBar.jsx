import React, { useState } from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { GiTicket } from 'react-icons/gi';
import { FaSignOutAlt, FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im'
import { NavLink } from 'react-router-dom';
import { MdPendingActions, MdHistory } from 'react-icons/md'

import './sidebar.css';
import Logo from '../../../assets/logo.png';

const SideBar = ( { employee } ) => {

    const [selected, setSelected] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const matchQuery = window.matchMedia("(max-width: 450px)").matches;

    return (
        <div style={{width: matchQuery ? (isOpen ? "50%" : "50px") : "20%"}} className='sidebar'>
            <div>
                <div className="top-section">
                    <div style={{ display: matchQuery ? "flex" : "block" }} className='logo-container'>
                        <img style={{ display: matchQuery ? (isOpen ? "block" : "none") : "initial" }} src= {Logo} alt="logo" />
                        <div style={{ display: matchQuery ? "block" : "none" }} className="bars">
                        {
                            isOpen ?
                            <ImCross className='menu-btn' onClick= {toggle}/>
                            :
                            <FaBars className='menu-btn' onClick= {toggle}/>
                        }
                            
                        </div>
                    </div>                    
                    <h2 style={{display: matchQuery ? (isOpen ? "block" : "none") : "block"}}>Smart Materials Gatepass System</h2>
                </div>

                <div className="menu">
                    <NavLink
                        className={selected === 1 ? "menuItem active" : "menuItem"}
                        onChange={() => setSelected(1) }
                        to= "/dashboard"
                        state={{ employee: employee }}
                    >
                        <BiHomeAlt />
                        <span style={{display: matchQuery ? (isOpen ? "inline" : "none") : "initial"}} >Dashboard</span>
                    </NavLink>

                    <NavLink
                        className={selected === 2 ? "menuItem active" : "menuItem"}
                        onChange={() => setSelected(2)}
                        to= "/generateForm"
                        state={{ employee: employee }}
                    >
                        <GiTicket />
                        <span style={{display: matchQuery ? (isOpen ? "inline" : "none") : "initial"}}>New Gatepass</span>
                    </NavLink>

                    <NavLink
                        className={selected === 3 ? "menuItem active" : "menuItem"}
                        onChange={() => setSelected(3)}
                        to= "/action"
                        state={{ employee: employee }}
                    >
                        <MdPendingActions />
                        <span style={{display: matchQuery ? (isOpen ? "inline" : "none") : "initial"}}>Gatepass Action</span>
                    </NavLink>
                    
                    <NavLink
                        className={selected === 4 ? "menuItem active" : "menuItem"}
                        onChange={() => setSelected(4)}
                        to= "/history"
                        state={{ employee: employee }}
                    >
                        <MdHistory />
                        <span style={{display: matchQuery ? (isOpen ? "inline" : "none") : "initial"}}>Gatepass History</span>
                    </NavLink>
                </div>
            </div>
            
            <NavLink className="menuItem sign-out" to="/login" state={{ employee: employee }}>
                <FaSignOutAlt />
                <span style={{display: matchQuery ? (isOpen ? "inline" : "none") : "initial"}}>Sign Out</span>
            </NavLink>
        </div>        
    )
}

export default SideBar