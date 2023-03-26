import React from 'react'
import { TiTick } from 'react-icons/ti'
import { ImCross } from 'react-icons/im'
import { MdPending } from 'react-icons/md'
import { useLocation } from "react-router-dom";

import SideBar from '../subComponents/SideBar/SideBar';
import SingleGatepass from '../subComponents/SingleGatepass/SingleGatepass'
import './gatepasshistory.css'
import historyData from '../../data/historyData.json'

const GatepassHistory = () => {

  const { employee } = useLocation().state;

  return (
    <div className= 'dashboard'>
      
      <SideBar employee= { employee } />

      <div className= 'right-container'>
        <h1>Gatepass History</h1>
        <hr style={{height: "5px"}}/>&nbsp;

        <div className='right-container-gp'>     
            {   
                historyData.map (data => {
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
                            
                            <span className= {data.action === "1" ? 'approved' : (data.action === "2" ? 'rejected' : 'stalled')}>
                              {data.action === "1" ? <TiTick/> : (data.action === "2" ? <ImCross/> : <MdPending/>)} &nbsp;
                              {data.action === "1" ? 'Approved' : (data.action === "2" ? 'Rejected' : 'Stalled')}
                            </span>
                        </div>
                    )                                        
                })
            }             
        </div>        
      </div>
    </div>
  )
}

export default GatepassHistory