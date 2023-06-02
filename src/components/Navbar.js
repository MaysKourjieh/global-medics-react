import React from 'react'
// import styled from 'styled-components';
// import { Link } from "gatsby"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Navbar.css';
import logo from "../images/gmu_logo_lg.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../components/functions.js';

const Navbar = () => {
    return (        
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 pb-2 text-primary" id="header">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <Link to="/products" className="nav-link dropdown-toggle cursor" id="products_button" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Products
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
              <li className="nav-item">
              <a className="nav-link cursor" id="about_button">
                About Us
                </a>
              </li>
          </ul>
          <Link to="/" className="navbar-brand mx-auto cursor" id="logo_button">
            <img className="logo-size" src={logo} alt="Global Medics" />
            </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link cursor" id="team_button">Our Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link cursor" id="contact_button">Contact</a>
              </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div className="searchBox">
              <input className="searchInput" type="text" name="" placeholder="" />
              <button className="searchButton" href="#">
                <i className="fa fa-search cursor"></i>
              </button>
          </div>
          </form>
          {/* <form className="form-inline my-2 my-lg-0">
            <div className="input-group rounded">
                <span className="input-group-text border-0" id="search-addon">
                  <a><i className="fa fa-search cursor"></i></a>
                  
                </span>
              </div>
          </form> */}
        </div>
      </nav>
    )
}

export default Navbar