import React from 'react'
import Gatepass from './SingleGatepass'
import './previewmodal.css'

const PreviewModal = ({ setOpenModal, type, sloc, sdept, dloc, ddept, matname, matcount, expiry, remarks }) => {
    
return (
        <div className="modalBackground">
            <div className="modalContainer">

                <div className="titleCloseBtn">
                    <button onClick={() => setOpenModal(false) } >X</button>
                </div>

                <div className="title">
                    <h2>Preview</h2>
                </div>

                <Gatepass 
                    type= {type} 
                    sloc= {sloc}  
                    sdept= {sdept}
                    dloc= {dloc}
                    ddept= {ddept}
                    matname= {matname}
                    matcount= {matcount}
                    expiry= {expiry}
                    remarks= {remarks}
                />
            </div>
        </div>
    )
}

export default PreviewModal