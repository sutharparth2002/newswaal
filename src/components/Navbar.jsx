import React from 'react'
import '../style/Navbar.scss'

export default function Navbar() {
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color :'white' ,fontSize: "25px" ,color:"orange"}}>NewsWaala</a>
    <button className="navbar-toggler" style={{background:"white"}}type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item text-white">
          <a className="nav-link active" aria-current="page" href="#">General</a>
        </li>
        <li className="nav-item text-white">
          <a className="nav-link active" aria-current="page" href="#">Business</a>
        </li>
        <li className="nav-item text-white">
          <a className="nav-link active" aria-current="page" href="#">Cricket</a>
        </li>
        <li className="nav-item text-white">
          <a className="nav-link active" aria-current="page" href="#">Science</a>
        </li> 
        <li className="nav-item text-white">
          <a className="nav-link active" aria-current="page" href="#">Health</a>
        </li>  
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
