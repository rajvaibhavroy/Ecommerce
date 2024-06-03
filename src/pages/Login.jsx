import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  
  let arr = JSON.parse(localStorage.getItem('signup')) || []
  let navigate = useNavigate()
  let emailRef = useRef();
  let passwordRef = useRef();

  const handleLogin = (e)=>{
    e.preventDefault()

    let obj = {
      email:emailRef.current.value,
      password:passwordRef.current.value
    }
    console.log(obj)

    let userAlreadyExists = arr.find((ele)=>ele.email===obj.email)
    console.log(userAlreadyExists)

    if(userAlreadyExists){
      if(userAlreadyExists.password===obj.password){
        navigate('/')
      }
    }
    else{
      alert('User does not Exists,Please Sign Up')
    }

  }

  return (
    <div className='backgroundImageLogin'>

<div className='Background'>
      <form class="col-md-7 m-auto pt-5  loginForm">
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  ref={emailRef}/>


    <div id="emailHelp" className="form-text">Please fill every field manually, Do not use Auto-Save.</div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" ref={passwordRef}/>


  </div>

  <button onClick={handleLogin} type="submit" className="btn btn-primary buttonSubmitSignup">Login</button>

  <h6 style={{paddingTop:'13px',paddingLeft:'140px'}}>New to us, <Link to="/signup">Signup</Link></h6>
</form>

    </div>
    </div>
  )
}

export default Login
