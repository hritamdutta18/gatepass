import React, { useState } from 'react'
import ReactRouterPrompt from "react-router-prompt";
import { ErrorBoundary } from "react-error-boundary";
import { BsFillBookmarkFill } from 'react-icons/bs'
import { MdPreview, MdDelete } from 'react-icons/md'
import { GrAddCircle } from 'react-icons/gr'
import Select from 'react-select';
import { useLocation } from "react-router-dom";

import { locationdeptData, matOptions, TSLOptions, vendorOptions } from '../../data/formData'
import Sidebar from '../subComponents/SideBar/SideBar'
import Modal from '../subComponents/PreviewModal/PreviewModal'
import WarningModal from '../subComponents/WarningModal/WarningModal';
import '../subComponents/WarningModal/warningmodal.css'
import './gatepassform.css'


function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}

const GatepassForm = () => {

    const { employee } = useLocation().state;

    const[modalOpen, setModalOpen] = useState(false);
    const[change, setChange]= useState(false);
    
    const[type, setType]= useState('');

    const[srclocation, setsrcLocation]= useState('');
    const[srcdeptList, setsrcDeptList]= useState([]);
    const[srcdept, setsrcDept]= useState("");

    const[destlocation, setdestLocation]= useState('');
    const[destdeptList, setdestDeptList]= useState([]);
    const[destdept, setdestDept]= useState('');

    const[material, setMaterial]= useState('');
    const[matCount, setmatCount]= useState();
    const[date, setDate]= useState('');
    const[remarks, setRemarks]= useState('');


    const handleType = e => {
        setType(e);
        setsrcDept(null);
        setsrcLocation(null);
        setdestDept(null);
        setdestLocation(null);
        setDate('');

        setChange(true);
    }

    const handlesrcLocation= e => {
        setsrcLocation(e);
        setsrcDeptList(e.depts);
        setsrcDept(null);

        setChange(true);
    }
    const handledestLocation= e => {
        setdestLocation(e);
        setdestDeptList(e.depts);
        setdestDept(null);

        setChange(true);
    }

    const dateFunction= (id) => {        
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; 
        var yyyy = today.getFullYear();

        if (dd < 10) 
            dd = '0' + dd;
        if (mm < 10) 
            mm = '0' + mm;
            
        today = yyyy + '-' + mm + '-' + dd;
        document.getElementById("expiry").setAttribute("min", today);

        if (id === "3"){
            var today1 = new Date();
            today1.setDate(today1.getDate() + 7);             
            dd= today1.getDate();
            mm = today1.getMonth() + 1; 
            yyyy = today1.getFullYear();

            if (dd < 10) 
                dd = '0' + dd;
            if (mm < 10) 
                mm = '0' + mm;

            today1 = yyyy + '-' + mm + '-' + dd;
            document.getElementById("expiry").setAttribute("max", today1);
        }
    }

    const handleModal= () => {
        if (type && srclocation && srcdept && destlocation && destdept && material && matCount)
            setModalOpen(true);
    }    
    

    const handleSubmit= e => {
        e.preventDefault();

        setType('');

        setsrcLocation('');
        setsrcDeptList([]);
        setsrcDept('');

        setdestLocation('');
        setdestDeptList([]);
        setdestDept('');

        setMaterial('');
        setmatCount('');
        setDate('');
        setRemarks('');

        setChange(false);
    }


    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>

            <div className='dashboard'>            
                <Sidebar employee={ employee }/>

                <div className='right-container'>
                    <h1>New Gatepass</h1>
                    <hr/>&nbsp;
                    
                    <div className='right-container-gp'>
                        <form action="" onSubmit={handleSubmit} id="myForm">
                            <div className='form-row'>                    
                                <div className='form-input'>
                                    <label  className="form-label">Type</label> 
                                    <Select 
                                        placeholder="--Select Type--"
                                        value={type}
                                        options={ employee ? TSLOptions : vendorOptions}
                                        onChange={ handleType }
                                        getOptionLabel={x => x.type}
                                        getOptionValue={x => x.id}
                                        isClearable
                                        required
                                    />
                                </div>
                            </div>

                                
                            <div className='form-row'>
                                <div className='form-input'>
                                    <label  className="form-label">Source Location</label> 
                                    <Select 
                                        placeholder="--Select Source Location--"
                                        value={srclocation}
                                        options={locationdeptData.filter((item) => item !== destlocation)}
                                        onChange={handlesrcLocation}
                                        getOptionLabel={x => x.loc_name}
                                        getOptionValue={x => x.loc_id}
                                        isOptionDisabled= {option => option === destlocation}  
                                        isClearable
                                        required  
                                    />
                                </div>
                                
                                {
                                    employee ?
                                    <div className='form-input'>
                                        <label  className="form-label">Source Department</label>
                                        <Select
                                            placeholder="--Select Source Department--"
                                            value={srcdept}
                                            options={srcdeptList}
                                            onChange={ e => { setsrcDept(e); setChange(true);} }
                                            getOptionLabel={x => x.dept_name}
                                            getOptionValue={x => x.dept_id}
                                            isClearable
                                            required
                                        />  
                                    </div>
                                    :
                                    <div className='form-input'>
                                        <label  className="form-label">Vendor Name</label>
                                        <input
                                            className='non-react-select'
                                            style={{ width: "100%" }}
                                            type="text" 
                                            name='vendor-name' 
                                            placeholder="Enter Vendor Name"
                                            value= {srcdept ? srcdept.dept_name : ""}
                                            onChange= { e => { setsrcDept({"dept_name" : e.target.value}); setChange(true);} }
                                            required
                                        />  
                                    </div>
                                }                                
                            </div>

                            <div className='form-row'>
                                <div className='form-input'>
                                    <label  className="form-label">Destination Location</label> 
                                    <Select 
                                        placeholder="--Select Destination Location--"
                                        value={destlocation}
                                        options={locationdeptData.filter((item) => item !== srclocation)}
                                        onChange={ handledestLocation }
                                        getOptionLabel={x => x.loc_name}
                                        getOptionValue={x => x.loc_id}     
                                        isClearable                   
                                        required                
                                    />
                                </div>

                                <div className='form-input'>
                                    <label  className="form-label">Destination Department</label>
                                    <Select
                                        placeholder="--Select Destination Department--"
                                        value={destdept}
                                        options={destdeptList}
                                        onChange={ e => { setdestDept(e); setChange(true);} }
                                        getOptionLabel={x => x.dept_name}
                                        getOptionValue={x => x.dept_id}
                                        isClearable
                                        required
                                    />  
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='form-input'>
                                    <label  className="form-label">Material Required</label><br/>
                                    {
                                        employee ?
                                        <Select 
                                            placeholder="--Select Material--"
                                            value={material}
                                            options={matOptions}
                                            onChange={ e => { setMaterial(e); setChange(true);} }
                                            getOptionLabel={x => x.mat_name}
                                            getOptionValue={x => x.id}
                                            isClearable
                                            required
                                        />
                                        :
                                        <input 
                                            className='non-react-select'
                                            style={{ width: "100%" }}
                                            type="text" 
                                            name='material' 
                                            value= {material.mat_name}
                                            onChange={ e => { setMaterial({"mat_name" : e.target.value}); setChange(true);} }
                                            required
                                        />
                                    } 

                                    {/* <button className='material-btn-group add-btn' ><GrAddCircle />&nbsp;Add Material</button> */}
                                    {/* <button className='delete-btn' ><MdDelete /></button> */}
                                </div>

                                <div className='form-input'>
                                    <label  className="form-label">Material Quantity</label> <br/>
                                    <input 
                                        className='non-react-select'
                                        type="number" 
                                        name= "material count" 
                                        min="1" 
                                        value= {matCount}
                                        onChange= { e => { setmatCount(e.target.value); setChange(true); }}   
                                        required                         
                                    />
                                </div>
                            </div>


                            {
                                !employee ?
                                <div className='form-row'>                            
                                    <div className='form-input'>
                                        <label  className="form-label">Expiry Date</label><br/>
                                        <input 
                                            className='non-react-select'
                                            type="date" 
                                            id="expiry" 
                                            name="expiry date" 
                                            value={date}
                                            onChange={ e => { setDate (e.target.value); setChange(true);} }
                                            onClick= { () => dateFunction(type.id) } 
                                            required
                                        />
                                    </div>
                                </div>
                                :
                                <></>
                            }  

                            <div className='form-row'>
                                <div className='form-input'>
                                    <label className="form-label">Remarks</label><br/>
                                    <textarea 
                                        id='remarks' 
                                        value={remarks}
                                        onChange= {e => { setRemarks(e.target.value); setChange(true);}}
                                    />
                                </div>
                            </div>                            

                            <button id="submit" type='submit' >Submit</button>                        
                        </form>  

                        <div className='functionality form-row'>                
                            <button className='save-later'>
                                <BsFillBookmarkFill />&nbsp;
                                Save for Later
                            </button>
                            <button className='preview' onClick={handleModal}>
                                <MdPreview /> &nbsp;
                                Preview Gatepass
                            </button>
                        </div>                      
                    </div>
                    

                    {/* Warning Modal for unsaved changes */}
                    <ReactRouterPrompt when= {change === true}>
                        {({ isActive, onConfirm, onCancel }) =>
                            isActive && (
                            <WarningModal 
                                onConfirm= {onConfirm}
                                onCancel= {onCancel}
                            />
                        )}
                    </ReactRouterPrompt>


                    {/* Preview Modal for Gatepass */}
                    {
                        modalOpen
                        && 
                        <Modal 
                            setOpenModal={setModalOpen} 
                            type= {type.id} 
                            sloc= {srclocation.loc_name}  
                            sdept= {srcdept.dept_name}
                            dloc= {destlocation.loc_name}
                            ddept= {destdept.dept_name}
                            matname= {material.mat_name}
                            matcount= {matCount}
                            expiry= {date}
                            remarks= {remarks}
                        />
                    }

                </div>
            </div>

        </ErrorBoundary>
    )
}

export default GatepassForm