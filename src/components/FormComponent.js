import './FormComponent.css'
import { useState } from 'react'

const FormComponent = () => {

    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [repassword,setRepassword] = useState('')

    const [errorFirstname,setErrorFirstname] = useState('')
    const [errorLastname,setErrorLastname] = useState('')
    const [errorUsername,setErrorUsername] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorRepassword,setErrorRepassword] = useState('')

    const [firstnameColor,setFirstnameColor] = useState('')
    const [lastnameColor,setLastnameColor] = useState('')
    const [usernameColor,setUsernameColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [repasswordColor,setRepasswordColor] = useState('')

    const validateForm = (e)=>{
        e.preventDefault()
        if(firstname.length>0){
            setErrorFirstname('')
            setFirstnameColor('green')
        }
        else{
            setErrorFirstname('Please enter complete information.')
            setFirstnameColor('red')
        }

        if(lastname.length>0){
            setErrorLastname('')
            setLastnameColor('green')
        }
        else{
            setErrorLastname('Please enter complete information.')
            setLastnameColor('red')
        }
        if(username.length>8){
            setErrorUsername('')
            setUsernameColor('green')
        }
        else{
            setErrorUsername('Please enter a username of more than 8 characters.')
            setUsernameColor('red')
        }
        if(email.includes('@' && '.')){
            setErrorEmail('')
            setEmailColor('green')
        }
        else{
            setErrorEmail('Invalid email format')
            setEmailColor('red')
        }
        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        }
        else{
            setErrorPassword('Please enter a password of more than 8 characters.')
            setPasswordColor('red')
        }
        if(repassword !== '' && repassword===password){
            setErrorRepassword('')
            setRepasswordColor('green')
        }
        else{
            setErrorRepassword('Password does not match')
            setRepasswordColor('red')
        }
    }

  return (
    <div className='container'>
        <form className='form' onSubmit={validateForm}>
            <h1>Register</h1>
            <div className='form-control'>
                <label>Firstname</label>
                <input type='text' placeholder='Enter Your Firstname' value={firstname} onChange={(e)=>setFirstname(e.target.value)} style={{borderColor:firstnameColor}}></input>
                <small style={{color:firstnameColor}}>{errorFirstname}</small>
            </div>
            <div className='form-control'>
                <label>Lastname</label>
                <input type='text' placeholder='Enter Your Lastname' value={lastname} onChange={(e)=>setLastname(e.target.value)} style={{borderColor:lastnameColor}}></input>
                <small style={{color:lastnameColor}}>{errorLastname}</small>
            </div>
            <div className='form-control'>
                <label>Username</label>
                <input type='text' placeholder='Enter Your Username' value={username} onChange={(e)=>setUsername(e.target.value)} style={{borderColor:usernameColor}}></input>
                <small style={{color:usernameColor}}>{errorUsername}</small>
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input type='text' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}></input>
                <small style={{color:emailColor}}>{errorEmail}</small>
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type='password' placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}></input>
                <small style={{color:passwordColor}}>{errorPassword}</small>
            </div>
            <div className='form-control'>
                <label>Re-Password</label>
                <input type='password' placeholder='Enter Your Re-Password' value={repassword} onChange={(e)=>setRepassword(e.target.value)} style={{borderColor:repasswordColor}}></input>
                <small style={{color:repasswordColor}}>{errorRepassword}</small>
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default FormComponent