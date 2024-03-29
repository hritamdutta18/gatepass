import React from 'react'
import './warningmodal.css'

const WarningModal = ( { onConfirm, onCancel }) => {

    const matchQuery = window.matchMedia("(max-width: 450px)").matches;

    return (
        <div className="modalBackground" style={{ top: "0" }}>
            <div className="modalContainer" style={{ width: matchQuery ? "80%" : "40%", padding: "1rem" }}>
                <div className="title">
                    <h3 style={{ margin: "1rem" }}>Unsaved changes ! Do you want to exit?</h3>
                </div>                            
                
                <div className="footer">                                
                    <button onClick={onCancel} id="noBtn">Cancel</button>
                    <button onClick={onConfirm} id="yesBtn">Yes</button>
                </div>
            </div>
        </div>
    )
}

export default WarningModal