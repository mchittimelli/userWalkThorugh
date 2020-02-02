const validateEmail = (email, setEmailErrorStatus, setEmailErrorText) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        setEmailErrorText('')
        setEmailErrorStatus(false)
    }
    else{
        setEmailErrorText("Invalid email format.")
        setEmailErrorStatus(true)
    }
}

const validateName = ( name, setNameErrorStatus, setNameErrorText ) => {
    if(/[a-z]/.test(name)){
        setNameErrorText('')
        setNameErrorStatus(false)
    }
    else{
        setNameErrorText("Invalid name, must have letters only.")
        setNameErrorStatus(true)
    }
}

const validateAddress = ( address, setAddressErrorStatus, setAddressErrorText ) => {
    if(/^[a-zA-Z0-9\s,.'-]{3,}$/.test(address)){
        setAddressErrorText('')
        setAddressErrorStatus(false)
    }
    else{
        setAddressErrorText("Invalid Address, must have letters, numbers and valid characters only.")
        setAddressErrorStatus(true)
    }
}

const validatePhone = ( phone, setPhoneErrorStatus, setPhoneErrorText ) => {
    if(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(phone)){
        setPhoneErrorText('')
        setPhoneErrorStatus(false)
    }
    else{
        setPhoneErrorText("Invalid Phone number.")
        setPhoneErrorStatus(true)
    }
}


export default {validateEmail, validateName, validateAddress, validatePhone}