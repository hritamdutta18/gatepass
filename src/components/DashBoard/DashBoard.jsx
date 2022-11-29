import React from 'react';
import { useLocation } from "react-router-dom";

import './dashboard.css';
import SideBar from '../subComponents/SideBar/SideBar';

const HomePage = () => {
    
    const { employee } = useLocation().state;

    const rows = [
        { id: 1, location: 'Jharia', freq: 10 },
        { id: 2, location: 'Bokaro', freq: 8 },
        { id: 3, location: 'Kalinga Nagar', freq: 7 },
        { id: 4, location: 'Gamharia', freq: 3 },
        { id: 5, location: 'Durgapur', freq: 1 }
    ];

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
                            rows.map((row) => {
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