import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  let navigate = useNavigate()

  let arr = JSON.parse(localStorage.getItem('signup'))  || [];

  let nameRef = useRef();
  let phonenoRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let confirmpasswordRef = useRef();


  const handleSubmit = (e)=>{
    e.preventDefault()
    let obj = {
      name:nameRef.current.value,
      phoneno:phonenoRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      confirmpassword:confirmpasswordRef.current.value
    }

    console.log(obj)

    if (obj.name && obj.email && obj.phoneno && obj.password && obj.confirmpassword){

      arr.push(obj);
    console.log(arr)
    localStorage.setItem('signup', JSON.stringify(arr))
   navigate('/login')
    }
    else{
      alert('User details can not be Empty, Please fill it')
    }
    
  }

  
  return (

    

    <div class='backgroundDiv'>

<div class='col-3 md-6 signupForm'>
      <form class='d-flex' action="">
        
<div class='mt-1'>
  <div>
  <marquee style={{color:'white'}} behavior="" direction="">- Please fill every field manually</marquee>
  </div>
<div>
<input class='mt-3 inputForm' type="text" placeholder='Full Name' ref={nameRef}/><br />
<input class='mt-3 inputForm' type="email" placeholder='Enter Your Email' ref={emailRef}/><br />
<input class='mt-3 inputForm' type="number" placeholder='Enter Your Phone Number' ref={phonenoRef}/><br />
<input class='mt-3 inputForm' type="password" placeholder='Create a Password' ref={passwordRef}/><br />
<input class='mt-3 inputForm' type="password" placeholder='Confirm Password' ref={confirmpasswordRef}/><br />
</div>
<button onClick={handleSubmit} className='submitButton'>Submit</button>
 <h6 style={{color:'white',paddingTop:'13px',paddingLeft:'30px'}}>Already a Customer, <Link to="/login">Login</Link></h6>
        </div>
        
      </form>
      
    </div>
    </div>
  ) 
}

export default Signup
