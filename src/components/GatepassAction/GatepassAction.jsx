import React, { useState } from 'react'
import ReactRouterPrompt from "react-router-prompt";
import { ErrorBoundary } from "react-error-boundary";
import { useLocation } from "react-router-dom";

import SingleGatepass from '../subComponents/SingleGatepass/SingleGatepass';
import WarningModal from '../subComponents/WarningModal/WarningModal';
import SideBar from '../subComponents/SideBar/SideBar'
import './gatepassaction.css'
import { employeeData, vendorData } from '../../data/actionData'

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}

const GatepassAction = () => {
    
    const { employee } = useLocation().state;

    const [display, setDisplay]= useState(true);
    const [change1, setChange1]= useState(false);

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
                <div className= 'dashboard'>
                    <SideBar employee= { employee } />

                    <div className= 'right-container'>
                        <h1>Gatepass Action</h1>
                        <hr/>&nbsp;

                        <div className='right-container-gp'>
                        {          
                            display ?  
                            <>
                                {   
                                    (employee ? employeeData : vendorData).map (data => {
                                        return (
                                            <div className='gatepass-container' key={data.id}> 
                                                <SingleGatepass 
                                                    type= {data.type}
                                                    sloc= {data.src_location}
                                                    sdept= {data.src_dept}
                                                    dloc= {data.dest_location}
                                                    ddept= {data.dest_dept}
                                                    matname= {data.material_name}
                                                    matcount= {data.material_count}
                                                    expiry= {data.expiry}
                                                    remarks= {data.remarks}
                                                />
                                                <span className='actionpage-remark'>Remarks: <input type="text" onChange={() => setChange1(true)}/></span>
                                                <div className='action-btn-group'>
                                                    <button className='approve-btn' onClick={() => { setDisplay(false); setChange1(false); }}>Approve</button>
                                                    <button className='reject-btn' onClick={() => { setDisplay(false); setChange1(false); }}>Reject</button>
                                                    <button className='stall-btn' onClick={() => { setDisplay(false); setChange1(false); }}>Stall</button>
                                                </div>
                                            </div>
                                        )                                        
                                    })
                                }
                            </>
                            :
                            <h3>No Pending Gatepasses</h3>
                        }    

                        {/* Warning Modal for unsaved changes */}
                        <ReactRouterPrompt when= {change1 === true}>
                            {({ isActive, onConfirm, onCancel }) =>
                                isActive && (
                                <WarningModal 
                                    onConfirm= {onConfirm}
                                    onCancel= {onCancel}
                                />
                            )}
                        </ReactRouterPrompt>     
                    </div>     
                </div>
            </div>
        </ErrorBoundary>        
    )
}

export default GatepassAction