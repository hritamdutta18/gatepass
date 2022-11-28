import React, { useState } from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { GiTicket } from 'react-icons/gi';
import {FaSignOutAlt} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { MdPendingActions, MdHistory } from 'react-icons/md'

import './sidebar.css';
import Logo from '../../../assets/logo.png';

const SideBar = () => {

    const [selected, setSelected] = useState(0);

    return (
        <div className='sidebar'>
            <div>
                <div className="logo">
                    <img src= {Logo} alt="logo" />
                    <h3>Smart Materials Gatepass System</h3>
                </div>
                <div className="menu">
                    <NavLink
                        className={selected === 1 ? "menuItem active" : "menuItem"}
                        onChange={() => setSelected(1) }
                        to= "/home"
                    >
                        <BiHomeAlt />
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink
                        className={selected === 2 ? "menuItem active" : "menuItem"}
                        onChange={() => setSelected(2)}
                        to= "/generateForm"
                    >
                        <GiTicket />
                        <span>New Gatepass</span>
                    </NavLink>
                    <NavLink
                        className={selected === 3 ? "menuItem active" : "menuItem"}
                        onChange={() => setSelected(3)}
                        to= "/action"
                    >
                        <MdPendingActions />
                        <span>Gatepass Action</span>
                    </NavLink>
                    <NavLink
                        className={selected === 4 ? "menuItem active" : "menuItem"}
                        onChange={() => setSelected(4)}
                        to= "/history"
                    >
                        <MdHistory />
                        <span>Gatepass History</span>
                    </NavLink>
                </div>
            </div>
            
            <NavLink className="menuItem sign-out" to="/login">
                <FaSignOutAlt /><span>Sign Out</span>
            </NavLink>
        </div>        
    )
}

export default SideBar