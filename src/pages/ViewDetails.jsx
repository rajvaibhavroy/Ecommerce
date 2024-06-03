import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ViewDetails = () => {
  let navigate = useNavigate();
  let location = useLocation();
  console.log(location.state)

  const handleBackward = ()=>{
    navigate('/')
  }

  const handleBuynow = () =>{
    navigate('/buynow')
  }

  
  return (
    <div>
      <div className="col-1">
      <i onClick={handleBackward} class="bi bi-arrow-90deg-left backButton"></i>
      </div>

    <div className="col-11">
    <h1>{location.state.title}</h1>
    <p>{location.state.description}</p>


    <div id="carouselExampleIndicators" classname="carousel slide">
  <div classname="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="{0}" classname="active" aria-current="true" aria-label="Slide 1">
    </button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="{1}" aria-label="Slide 2">
    </button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="{2}" aria-label="Slide 3">
    </button></div>
  <div classname="carousel-inner">
    <div classname="carousel-item active">


      {location.state.images.map((ele)=>{
        return  <div style={{height:'400px', width:'600px'}} class="carousel-item active">
      <img src={ele} class="d-block w-100" alt="..."/>
    </div>


      })}
    </div>
    
  </div>
  <button classname="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span classname="carousel-control-prev-icon" aria-hidden="true">
      <span classname="visually-hidden">Previous</span>
    </span></button>
  <button classname="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span classname="carousel-control-next-icon" aria-hidden="true">
      <span classname="visually-hidden">Next</span>
    </span></button>
</div>


    </div>

    <button onClick={handleBuynow} className='buyNowButton'>Buy Now</button>

  
    </div>
  )
}

export default ViewDetails
