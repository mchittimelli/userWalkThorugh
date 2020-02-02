import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import data from '../data'
import { Link } from "react-router-dom"

const HomePage = () => {

    const [fileData] = useState(data.fileData)
    
    return(
    <div className = 'container' style = {{ marginTop: 60}}>
        <div className = 'row'>
            <div className = "col-md-12">
                <div className = 'fillDetails-form'>
                    <div className = 'title'>
                                <p className = 'titleText'>Uploaded Files</p>                                
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>File Name</th>
                            <th>Date</th>
                            <th>Last Modified</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fileData.map( (file, index) => (
                                <tr key = {index}>
                                <td>{index + 1}</td>
                                <td>{file.name}</td>
                                <td>{file.date}</td>
                                <td>{file.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>                                     
                </div>
                <div className = 'nextBlock'>
                           <Link to = '/selection'> 
                            <p className = 'nextButton' >Next</p>
                           </Link>
                </div>  
            </div>
        </div>
    </div>
    )
}

export default HomePage