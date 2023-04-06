import React from 'react';
import { useLocation } from "react-router-dom";

import './dashboard.css';
import SideBar from '../subComponents/SideBar/SideBar';
import { employeeData, vendorData} from '../../data/dashboardData'

const HomePage = () => {
    
    const { employee } = useLocation().state;

    return (
        <div className='dashboard'>
            <SideBar employee= { employee }/>

            <div className='right-container'>
                <h1>Dashboard</h1>
                <hr/>&nbsp;

                <table>
                    <caption>Frequently Shipped Locations</caption>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Location</th>
                            <th>Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (employee ? employeeData : vendorData).map((row) => {
                                return(    
                                    <tr key={row.id}>               
                                        <td>{row.id}</td>
                                        <td>{row.location}</td>
                                        <td>{row.freq}</td>
                                    </tr>             
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>            
        </div>        
    )
}

export default HomePage