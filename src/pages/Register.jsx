import React, { useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import { FaEyeSlash, FaEye} from 'react-icons/fa'
import { useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { register} from '../features/auth/authSlice'
import {toast } from 'react-toastify';


const Register = (props) => {
    const navigate = useNavigate()
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const dispatch = useDispatch()

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

    const submit = (e) =>{
        e.preventDefault();
        if(nameRef.current.value.length < 1){
          toast.error('Invalid Name!')
        }
        if(!emailRegex.test(emailRef.current.value)){
          toast.error('Invalid Email!')
        }
        if(passwordRef.current.value.length < 8){
          toast.error('Minimum password length is 8')
        }
        if(!passwordRegex.test(passwordRef.current.value)){
          toast.error('Password should have a mixture of alphanumeric and a special character')
        }

        // const cut = && (emailRegex.test(emailRef.current.value)) && (passwordRef.current.value.length >= 8) && (passwordRegex.test(passwordRef.current.value))

        if((nameRef.current.value.length > 0) ){
            dispatch(register({
              username: nameRef.current.value,
              email: emailRef.current.value,
              password: passwordRef.current.value
            }))
        }
        // if(name.length < 0){
        //     // console.log([name,email,password]
        //     r

        //     dispatch(register({
        //       username: nameRef.current.value,
        //       email: emailRef.current.value,
        //       password: passwordRef.current.value
        //     }))
      
        // }else{
        //   console.log('error')
        // }

    }

    const togglePassword = (e) =>{
        e.preventDefault()
        setPasswordVisibility(!passwordVisibility)
    }

    // const isPasswordValid = () =>{

    //     if(regex.test(password)){
    //         setValidPassword(true)
    //         return true
    //     }else{
    //         setValidPassword(false)
    //         return false
    //     }
    // }
    // const isEmailValid = () =>{
    //     const regex = ;

    //     if(){
    //         setValidEmail(true)
    //         return true
    //     }else{
    //         setValidEmail(false)
    //         return false
    //     }
    // }
    // const isNameValid = () =>{
    //     if(name.length > 0){
    //         setValidName(true)
    //         return true
    //     }else{
    //         setValidName(false)
    //         return false
    //     }
    // }

  return (
    <div className='forms'>
        <form action="" method='post' className="form">
            <h3>
                Register
            </h3>
            <div className="form-name">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="" placeholder="Enter your name" ref={nameRef}/>
            </div>         
            <div className="form-email">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="" placeholder="Enter your email" ref={emailRef}/>
            </div>
            <div className="form-password">
                <label htmlFor="password">Password:</label>
                <div className="password-container">
                    <input type={passwordVisibility ? "text" : "password"} name="password" id="" placeholder="Enter your password" ref={passwordRef}/>
                    <button className="eye" onClick={togglePassword}>
                        {
                            passwordVisibility ?
                            <FaEyeSlash/>
                            :
                            <FaEye />
                        }

                    </button>
                </div>
            </div>
            <button className="form-submit" type="submit" onClick={submit}>
                Register
            </button>
            <p className='dont'>
                Have an account? <Link to="/login">Login</Link>
            </p>
        </form>

    </div>
  )
}

export default Register