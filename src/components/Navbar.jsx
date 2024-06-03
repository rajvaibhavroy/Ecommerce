import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <div class='col-md-12'>
      <nav className="navbar navbar-expand-lg bg-warning">

  <div className="container-fluid">
    <Link className="navbar-brand shopEase" to="/"><b>ShopEase</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <form className="d-flex searchbar" role="search">
    <i class="bi bi-search"></i>
        <input  className="form-control me-2" type="search" placeholder="Search For Products" aria-label="Search" />
        
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 cartPage">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li className="nav-item ">
          <Link className="nav-link listNavbar" to="mycart"><b>MyCart</b></Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ConnectWithUs
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="signup">Signup</Link></li>
            <li><Link className="dropdown-item" to="login">Login</Link></li>
            
            
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
