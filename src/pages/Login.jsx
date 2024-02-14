import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContextApi } from '../App'

const Login = () => {
  const value = useContext(ContextApi)
  console.log(value)
  const Navigate = useNavigate()
  const [showError, setShowError] = useState(false)
  const [inputValue, setInputValue] = useState({
      email: '',
      password: ''
  })
  console.log(inputValue)
  const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.email === value.email && inputValue.password === value.password) {
          localStorage.setItem('auth', JSON.stringify(true))
          setShowError(false)
          Navigate('/')
          window.location.reload();
      }
      setShowError(true)
  }
  
  const changeEvent = (e) => {
      const { name, value } = e.target;
      setInputValue({ ...inputValue, [name]: value })
  }
  return (
    <div className='form-container' >
      <div className='logo'>
        <div>
          <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4.00031C0 1.79117 1.79086 0.000305176 4 0.000305176H8.83769C17.2047 0.000305176 23.9875 6.71597 23.9875 15.0001C23.9875 23.2844 17.2047 30 8.83769 30H4C1.79086 30 0 28.2091 0 26V4.00031Z" fill="white" />
          </svg>
          <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.159912 29.9998C8.52234 29.9943 15.2997 23.2808 15.2997 14.9999C15.2997 6.71899 8.52234 0.0053875 0.159912 0C6.08508 2.45153 10.2487 8.24425 10.2487 14.9999C10.2487 21.7554 6.08508 27.5481 0.159912 29.9998Z" fill="white" fill-opacity="0.16" />
          </svg>
        </div>
        <h1>Demo</h1>
      </div>
      <form onSubmit={handleSubmit} >
        <div className='form-top'>
          <h2>Login</h2>
          <div>
            <span>Don't have an account yet? </span>
            <Link>Create an account</Link>
          </div>
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.5011 12.2332C22.5011 11.3699 22.4296 10.7399 22.2749 10.0865H12.2153V13.9832H18.1201C18.0011 14.9516 17.3582 16.4099 15.9296 17.3898L15.9095 17.5203L19.0902 19.935L19.3106 19.9565C21.3344 18.1249 22.5011 15.4298 22.5011 12.2332Z" fill="#4285F4" />
              <path d="M12.2147 22.5C15.1075 22.5 17.5361 21.5666 19.3099 19.9567L15.929 17.3899C15.0242 18.0082 13.8099 18.4399 12.2147 18.4399C9.38142 18.4399 6.97669 16.6083 6.11947 14.0766L5.99382 14.087L2.68656 16.5954L2.64331 16.7132C4.4052 20.1433 8.02422 22.5 12.2147 22.5Z" fill="#34A853" />
              <path d="M6.11998 14.0766C5.89379 13.4233 5.76289 12.7233 5.76289 12C5.76289 11.2766 5.89379 10.5766 6.10808 9.92328L6.10208 9.78415L2.75337 7.23553L2.64381 7.28661C1.91765 8.70993 1.50098 10.3083 1.50098 12C1.50098 13.6917 1.91765 15.2899 2.64381 16.7133L6.11998 14.0766Z" fill="#FBBC05" />
              <path d="M12.2148 5.55997C14.2266 5.55997 15.5838 6.41164 16.3576 7.12335L19.3814 4.23C17.5243 2.53834 15.1076 1.5 12.2148 1.5C8.0243 1.5 4.4052 3.85665 2.64331 7.28662L6.10759 9.92332C6.97672 7.39166 9.3815 5.55997 12.2148 5.55997Z" fill="#EB4335" />
            </svg>
            <span>Sign up with Google</span>
          </button>
          <span>OR</span>
        </div>
        <div className='form-middle' >
          <div>
            <label>Email</label>
            <input onChange={changeEvent} name='email' type='email' />
          </div>
          <div>
            <label>Password</label>
            <input onChange={changeEvent} name='password' type='password' />
            <p hidden={!showError} >!Invalid email and password</p>
            <Link to='/forgot' >Forgot password</Link>
          </div>
          
        </div>
        <button>Login</button>
      </form>
    </div>

  )
}

export default Login