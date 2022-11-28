import React, { useState } from 'react'
import ReactRouterPrompt from "react-router-prompt";
import { ErrorBoundary } from "react-error-boundary";

import SingleGatepass from '../SingleGatepass/SingleGatepass';
import WarningModal from '../WarningModal/WarningModal';
import SideBar from '../SideBar/SideBar'
import './gatepassaction.css'


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

    const [display, setDisplay]= useState(true);
    const [change1, setChange1]= useState(false);

    // const gatepasses= [
    //     { "id": "1", },
    //     { "id": "2", },
    //     { "id": "3", }
    // ]

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
                <div className= 'dashboard'>
                    <SideBar />

                    <div className= 'right-container'>
                        <h1>Gatepass Action</h1>
                        <hr/>&nbsp;

                        <div className='right-container-gp'>
                        {                                                      
                            // gatepasses.map((gatepass) => (
                                
                            //         display ?
                            //         <div className='gatepass-container' key= {gatepass.id}>                                   
                            //             <SingleGatepass />

                            //             <span className='actionpage-remark'>
                            //                 Remarks: 
                            //                 <input type="text" onChange={() => setChange1(true)}/>
                            //             </span>
                                        
                            //             <div className='action-btn-group'>
                            //                 <button className='approve-btn' onClick={() => setDisplay(false)}>Approve</button>
                            //                 <button className='reject-btn' onClick={() => setDisplay(false)}>Reject</button>
                            //                 <button className='stall-btn' onClick={() => setDisplay(false)}>Stall</button>
                            //             </div>
                            //         </div>
                            //         :
                            //         <h3> No Pending Gatepasses </h3>                          
                            // ))
                            display ?  
                            <>
                                <div className='gatepass-container'> 
                                    <SingleGatepass />
                                    <span className='actionpage-remark'>Remarks: <input type="text" onChange={() => setChange1(true)}/></span>
                                    <div className='action-btn-group'>
                                        <button className='approve-btn' onClick={() => { setDisplay(false); setChange1(false); }}>Approve</button>
                                        <button className='reject-btn' onClick={() => { setDisplay(false); setChange1(false); }}>Reject</button>
                                        <button className='stall-btn' onClick={() => { setDisplay(false); setChange1(false); }}>Stall</button>
                                    </div>
                                </div>

                                <div className='gatepass-container'> 
                                    <SingleGatepass />
                                    <span className='actionpage-remark'>Remarks: <input type="text" /></span>
                                    <div className='action-btn-group'>
                                        <button className='approve-btn' onClick={() => setDisplay(false)}>Approve</button>
                                        <button className='reject-btn' onClick={() => setDisplay(false)}>Reject</button>
                                        <button className='stall-btn' onClick={() => setDisplay(false)}>Stall</button>
                                    </div>
                                </div> 
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