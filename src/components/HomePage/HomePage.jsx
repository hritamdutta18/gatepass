import React from 'react';
import './homepage.css';
import SideBar from '../subComponents/SideBar/SideBar';

const HomePage = () => {
      
    const rows = [
        { id: 1, location: 'Jharia', freq: 10 },
        { id: 2, location: 'Bokaro', freq: 8 },
        { id: 3, location: 'Kalinga Nagar', freq: 7 },
        { id: 4, location: 'Gamharia', freq: 3 },
        { id: 5, location: 'Durgapur', freq: 1 }
    ];

    return (
        <div className='dashboard'>
            <SideBar />
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
                            rows.map((row, index) => {
                                return(    
                                    <tr key={index}>               
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