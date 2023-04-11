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
    
    const { employee, admin } = useLocation().state;

    const [display, setDisplay]= useState(employee ? employeeData : vendorData);    
    const [change, setChange]= useState (new Array(display.length).fill(false));
    const [inputdata, setInputdata]= useState(new Array(display.length).fill(""));

    const removeItem = (index) => {
        setDisplay(display.filter((o, i) => index !== i));
        handleInput(index, "");
        handleCheck(index);
        // setChange(change.filter((o, i) => index !== i));
        // setInputdata(inputdata.filter((o, i) => index !== i));
    }

    const handleCheck = (index) => 
        setChange(prevState => 
            prevState.map((item, idx) => 
                idx === index ? (inputdata[idx] !== "" ? true : false) : item
    ));

    const handleInput = (index, value) => 
        setInputdata(prevState => 
            prevState.map((item, idx) => 
                idx === index ? (inputdata[idx]= value) : item
    ));


    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
                <div className= 'dashboard'>
                    <SideBar employee= { employee } admin= { admin } />

                    <div className= 'right-container'>
                        <h1>Gatepass Action</h1>
                        <hr/>&nbsp;

                        <div className='right-container-gp'>
                        {          
                            display.length !== 0 ?  
                            <>
                                {   
                                    display.map ((data, id) => {
                                        return (
                                            <div className='gatepass-container' key={id}> 
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

                                                <span className='actionpage-remark'>
                                                    Remarks:&nbsp;
                                                    <input type="text" value= {inputdata[id]} onChange= {e => { handleInput(id, e.target.value); handleCheck(id); }} />
                                                </span>

                                                <div className='action-btn-group'>
                                                    <button className='approve-btn' onClick= { () => removeItem(id)}>Approve</button>
                                                    <button className='reject-btn' onClick= { () => removeItem(id) }>Reject</button>
                                                    <button className='stall-btn' onClick= { () => removeItem(id) }>Stall</button>
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
                        <ReactRouterPrompt when= {change.indexOf(true) > -1}>
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