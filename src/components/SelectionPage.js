import React from 'react'
import Table from 'react-bootstrap/Table'
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"

const CustomCheckBox = withStyles({
	root: {
	  color: '#0772ba',
	  '&$checked': {
		color: '#0772ba',
	  },
	},
	checked: {},
  })(props => <Checkbox color="default" {...props} />)


const SelectionPage = (props) => {
    
   
    return(
        <div className = 'container' style = {{ marginTop: 60}}>
            <div className = 'row'>
                <div className = "col-md-6">
                    <div className = 'fillDetails-form'>
                        <div className = 'title'>
                                    <p className = 'titleText'>Make a Selection</p>                                
                        </div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Please make a selection to proceed.</th>                                
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <CustomCheckBox 	size = 'small' checked = {props.box1} onChange = { () => props.setBox1(!props.box1) } />
                                        Box 1
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <CustomCheckBox 	size = 'small' checked = {props.box2} onChange = { () => props.setBox2(!props.box2) } />
                                        Box 2
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <CustomCheckBox 	size = 'small' checked = {props.box3} onChange = { () => props.setBox3(!props.box3) } />
                                        Box 3
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <CustomCheckBox 	size = 'small' checked = {props.box4} onChange = { () => props.setBox4(!props.box4) } />
                                        Box 4
                                    </td>
                                </tr>
                            </tbody>
                        </Table>                        
                    </div>
                    { (props.box1 || props.box2 || props.box3 || props.box4) &&
                        <div className = 'nextBlock'>
                           <Link to = '/details'> 
                            <p className = 'nextButton' >Next</p>
                           </Link>
                        </div> 
                    }
                </div>
            </div>
        </div>
    )
}

export default SelectionPage