import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">       
           {/* <img src="https://getmybooks.com/theme-files/img/logo.svg"></img> */}
          
           <img style={{"height":"35px","width":"180px"}}src="finallogo.jpg"></img>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link style={{color:"white","fontWeight":"bold"}}className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{color:"white","fontWeight":"bold"}}className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item dropdown">
          <a style={{"color":"white","fontWeight":"bold"}}class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">School Books</a></li>
            <li><a class="dropdown-item" href="#">College Books</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">E-Books</a></li>
            <li><a class="dropdown-item" href="#">Other</a></li>
          </ul>
        </li>
        <li className="nav-item">
                <Link style={{color:"white","fontWeight":"bold"}}className="nav-link" to="/">
                  Login
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-danger" type="submit">Search</button>
      </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
