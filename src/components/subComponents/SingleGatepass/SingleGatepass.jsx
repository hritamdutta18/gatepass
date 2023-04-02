import React from 'react'
import './singlegatepass.css'

const SingleGatepass = ({ type, sloc, sdept, dloc, ddept, matname, matcount, expiry, remarks }) => {

    const options= [ 
        { "id": "1", "type": "TSL to TSL" },
        { "id": "2", "type": "Vendor to TSL" },
        { "id": "3", "type": "Temporary (for 7 days)" }
    ];

    const matchQuery = window.matchMedia("(max-width: 767px)").matches;

    return (
    <div>
        {
            matchQuery ?
            <table className= "preview-table">
                    <tr>
                        <th className='preview-col'>Type</th>
                        <td className='preview-col'>{ options.filter(option => option.id === type).map(opt => opt.type) }</td>
                    </tr>

                    <tr>
                        <th className='preview-col'>From</th>
                        <td className='preview-col'>                        
                            {sdept} 
                            { type === "1" ? " Division, " : ", " }
                            {sloc}
                        </td>
                    </tr>
                        
                    <tr>
                        <th className='preview-col'>To</th>
                        <td className='preview-col'>{ddept} Division, {dloc}</td>
                    </tr>
                        
                    <tr>
                        <th className='preview-col'>Materials</th>
                        <td className='preview-col'>{matname} - {matcount}</td>
                    </tr>
                        
                    <tr>
                        {
                            expiry ? 
                            <>
                                <th className='preview-col'>Expiry</th>
                                <td className='preview-col'>{expiry}</td>
                            </>
                            :
                            <></>
                        }
                    </tr>
                        
                    <tr>
                        <th className='preview-col'>Remarks</th>
                        <td className='preview-col'>{remarks ? remarks : "Nil"}</td>
                    </tr>
            </table>
            :
            <table className= "preview-table">
                <thead>                
                    <tr>
                        <th className='preview-col'>Type</th>
                        <th className='preview-col'>From</th>
                        <th className='preview-col'>To</th>
                        <th className='preview-col'>Materials</th>
                        {
                            expiry ? 
                            <th className='preview-col'>Expiry</th>
                            :
                            <></>
                        }
                        <th className='preview-col'>Remarks</th>
                    </tr>
                </thead>

                <tbody>                
                    <tr>
                        <td className='preview-col'>{ options.filter(option => option.id === type).map(opt => opt.type) }</td>
                        <td className='preview-col'>                        
                            {sdept} 
                            { type === "1" ? " Division, " : ", " }
                            {sloc}
                        </td>
                        <td className='preview-col'>{ddept} Division, {dloc}</td>
                        <td className='preview-col'>{matname} - {matcount}</td>
                        {
                            expiry ? 
                            <td className='preview-col'>expiry</td>
                            :
                            <></>
                        }
                        <td className='preview-col'>{remarks ? remarks : "Nil"}</td>
                    </tr>
                </tbody>
            </table>
        }
    </div>
    )
}

export default SingleGatepass