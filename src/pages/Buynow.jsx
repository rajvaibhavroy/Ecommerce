import React from 'react'
import { useNavigate } from 'react-router-dom'

const Buynow = () => {
    let navigate = useNavigate();

    const handleBackPage = () =>{
        navigate('/viewdetails')
    }
  return (
    
    <div>

<div className="col-1">
      <i onClick={handleBackPage} class="bi bi-arrow-90deg-left backButton"></i>
      </div>

      <h1>buy Nowpage</h1>
    </div>
  )
}

export default Buynow
