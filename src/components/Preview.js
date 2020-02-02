import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'

const Preview = (props) => {

    const [display, setDisplay] = useState(true)

    return(
        <div className = 'container' style = {{ marginTop: 60}}>
            <div className = 'row'>
                <div className = "col-md-9">
                    <div className = 'fillDetails-form'>
                        <div className = 'title'>
                                    <p className = 'titleText'>Review Details</p>                                
                        </div>
                        <Table striped bordered hover>
                            { display &&
                            <>
                                <thead>
                                Please check the details you entered and click on submit.
                                </thead>
                                <tr>
                                <td>Your Selection</td>
                                <td>
                                {props.box1 && 'Box 1'}
                                {props.box2 && 'Box 2'}
                                {props.box3 && 'Box 3'}
                                {props.box4 && 'Box 4'}
                                </td>
                                </tr>
                                <tr>
                                  <td>Full Name</td>  
                                  <td>{props.name}</td>
                                </tr>
                                <tr>
                                  <td>Email</td>  
                                  <td>{props.email}</td>
                                </tr>
                                <tr>
                                  <td>Phone number</td>  
                                  <td>{props.phone}</td>
                                </tr>
                                <tr>
                                  <td>Address</td>  
                                  <td>{props.address}</td>
                                </tr>
                            </>
                            }
                            
                        </Table>

                        { !display &&
                                <div className = 'details-final'>
                                        Details submitted successfully.
                                </div>
                            }
                    </div>
                    { display &&
                        <div className = 'nextBlock'>                            
                            <p className = 'nextButton' onClick = {() => setDisplay(!display)} >Submit</p>                           
                        </div> 
                    }
                </div>
            </div>
        </div>
    )
}

export default Preview