import React, { useState, useEffect } from 'react'
import CustomInputField from './CustomInputField'
import Validators from './Validators'
import { Link } from "react-router-dom"

const UserDetails = (props) => {

    const [didMount, setDidMount] = useState(false)
    const [emailErrorStatus, setEmailErrorStatus] = useState(false)
    const [emailError, setEmailError] = useState('')
    const [nameErrorStatus, setNameErrorStatus] = useState(false)
    const [nameError, setNameError] = useState('')
    const [addressErrorStatus, setAddressErrorStatus] = useState(false)
    const [addressError, setAddressError] = useState('')
    const [phoneErrorStatus, setPhoneErrorStatus] = useState(false)
    const [phoneError, setPhoneError] = useState('')

    useEffect(() => {
        setDidMount(true)
    },[])

    useEffect(() => { // email validation
        if(didMount){
            Validators.validateEmail(props.email, setEmailErrorStatus, setEmailError)            
        }
    }, [props.email])

    useEffect(() => { //name validation
        if(didMount){
            Validators.validateName(props.name, setNameErrorStatus, setNameError)
        }
    }, [props.name])

    useEffect(() => { //address validation
        if(didMount){
            Validators.validateAddress(props.address, setAddressErrorStatus, setAddressError)
        }
    }, [props.address])

    useEffect(() => { // phone number validation
        if(didMount){
            Validators.validatePhone(props.phone, setPhoneErrorStatus, setPhoneError)
        }
    }, [props.phone])
    return(
        <div className = 'container' style = {{ marginTop: 60}}>
            <div className = 'row'>
                <div className = "col-md-9">
                    <div className = 'fillDetails-form'>
                        <div className = 'title'>
                                    <p className = 'titleText'>Personal Details</p>                                
                        </div>
                        <div className = 'form-fields'>
                            <CustomInputField errorStatus = {nameErrorStatus} label = "Full Name" type = 'text' value = {props.name} 
                                        onChange = {(e) => props.setName(e.target.value)} errorText = {nameError}/>
                            <CustomInputField errorStatus = {emailErrorStatus} label = "Email" type = 'text' value = {props.email} 
                                        onChange = {(e) => props.setEmail(e.target.value)} errorText = {emailError}/>
                             <CustomInputField errorStatus = {phoneErrorStatus} label = "Phone Number" type = 'text' value = {props.phone} 
                                        onChange = {(e) => props.setPhone(e.target.value)} errorText = {phoneError}/>   
                            <CustomInputField errorStatus = {addressErrorStatus} label = "Address" type = 'text' value = {props.address} 
                                        onChange = {(e) => props.setAddress(e.target.value)} errorText = {addressError}/>        
                        </div>
                    </div> 
                    <div className = 'nextBlock'>
                           <Link to = '/preview'> 
                            <p className = 'nextButton' >Next</p>
                           </Link>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default UserDetails