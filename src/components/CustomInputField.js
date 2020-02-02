import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { MdErrorOutline } from "react-icons/md";

const fieldStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
}
const labelStyle = {
    marginTop : 10,
    marginBottom : 10,   
    color : '#909090'
}
const labelStyleErr = {
    marginTop : 10,   
}
const inputStyle = {
    paddingTop : 10,
    borderBottom : '1px solid #0772ba',
    width: '100%'    
}
const inputStyleErr = {
    paddingTop : 10,
    borderBottom : '1px solid red' ,
    width: '100%' 
}

const CustomInputField = (props) => {

    return(
        <>
        <FormControl error style = {fieldStyle}>
	        <InputLabel style = {props.errorStatus ? labelStyleErr:labelStyle}  >{props.label}</InputLabel>
			<Input										
                    value={props.value}
                    style = {props.errorStatus ? inputStyleErr : inputStyle}
                    type = {props.type}
                    onChange= { props.onChange }   
                    disableUnderline                
        		/>
           
		</FormControl>
         { props.errorStatus &&
            <div className = 'errorIcon'>
                <MdErrorOutline/>
                <span className = 'errorIcontext'>{props.errorText}</span>
            </div>
            }
            </>
    )
}

export default CustomInputField;