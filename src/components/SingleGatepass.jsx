import React from 'react'
import './singlegatepass.css'

const SingleGatepass = ({ type, sloc, sdept, dloc, ddept, matname, matcount, expiry, remarks }) => {

    return (
    <div>
        <table id= "preview-table">
            <thead>                
                <tr>
                    <th className='preview-col'>Type</th>
                    <th className='preview-col'>From</th>
                    <th className='preview-col'>To</th>
                    <th className='preview-col'>Materials</th>
                    <th className='preview-col'>Expiry</th>
                    <th className='preview-col'>Remarks</th>
                </tr>
            </thead>

            <tbody>                
                <tr>
                    <td className='preview-col'>{type}</td>
                    <td className='preview-col'>                        
                        {sdept} 
                        {                            
                            type === "1" ? "Division, " : ", "
                        }
                        {sloc}
                    </td>
                    <td className='preview-col'>{ddept} Division, {dloc}</td>
                    <td className='preview-col'>{matname} - {matcount}</td>
                    <td className='preview-col'>{expiry ? expiry : "NA"}</td>
                    <td className='preview-col'>{remarks ? remarks : "Nil"}</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default SingleGatepass