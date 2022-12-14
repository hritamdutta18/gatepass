import React from 'react'
import { TiTick } from 'react-icons/ti'
import { ImCross } from 'react-icons/im'
import { MdPending } from 'react-icons/md'
import { useLocation } from "react-router-dom";

import SideBar from '../subComponents/SideBar/SideBar';
import SingleGatepass from '../subComponents/SingleGatepass/SingleGatepass'
import './gatepasshistory.css'

const GatepassHistory = () => {

  const { employee } = useLocation().state;

  return (
    <div className= 'dashboard'>
      
      <SideBar employee= { employee } />

      <div className= 'right-container'>
        <h1>Gatepass History</h1>
        <hr style={{height: "5px"}}/>&nbsp;

        <div className='right-container-gp'>      
            <div className='gatepass-container'>                
              <SingleGatepass />
              <span className='action-remark'><b>Remarks:</b> There is some issue in the material count. Please resolve</span>
              <span className='pending'><MdPending/> &nbsp;Stalled</span>
            </div>

            <div className='gatepass-container'> 
              <SingleGatepass />
              <span className='action-remark'><b>Remarks:</b> Nil</span>
              <span className='approved'><TiTick/> &nbsp;Approved</span>
            </div>

            <div className='gatepass-container'> 
              <SingleGatepass />
              <span className='action-remark'><b>Remarks:</b> Gatepass details are wrong. Please change</span>
              <span className='rejected'><ImCross/> &nbsp;Rejected</span>
            </div>

            <div className='gatepass-container'> 
              <SingleGatepass />
              <span className='action-remark'><b>Remarks:</b> Wrong location department name.</span>
              <span className='rejected'><ImCross/> &nbsp;Rejected</span>
            </div>

            <div className='gatepass-container'> 
              <SingleGatepass />
              <span className='action-remark'><b>Remarks:</b> Granted Approval</span>
              <span className='approved'><TiTick/> &nbsp;Approved</span>
            </div>
            
        </div>        
      </div>
    </div>
  )
}

export default GatepassHistory