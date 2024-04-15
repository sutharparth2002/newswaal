import React from 'react'
import '../style/Navbar.scss'
import {  Link } from 'react-router-dom'
export default function Navbar() {
    
  return (
    
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <div className="navbar-brand" style={{color :'white' ,fontSize: "25px" ,color:"orange"}}>NewsWaala</div>
    <button className="navbar-toggler" style={{background:"white"}}type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item text-white">
          <Link className="nav-link active" aria-current="page" to="/general">General</Link>
        </li>
        <li className="nav-item text-white">
          <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
        </li>
        <li className="nav-item text-white">
          <Link className="nav-link active" aria-current="page" to="/cricket">Sports</Link>
        </li>
        <li className="nav-item text-white">
          <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
        </li> 
        <li className="nav-item text-white">
          <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
        </li>  
      </ul>
    </div>
  </div>
</nav>
    </div>
    // </BrowserRouter>
  )
}
