// import { Link } from 'gatsby';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Footer.css';
import logo from "../images/gmu_logo_lg.png";


const Footer = () => {
    return (
    <footer>
        <div className="row text-center me-0 h-100 pb-5 background-color overflow-hidden"  id="footer">
        <div className="col-md-3 box ps-0 mt-5 pe-5">
                <img className="logo-small mb-3" src={logo} />
                <p className="font-16 ms-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <span className="fa-stack fa-x text-white">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-instagram text-blue fa-stack-1x"></i>
                  </span>
                  <span className="fa-stack fa-x text-white">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-envelope text-blue fa-stack-1x"></i>
                  </span>
                  <span className="fa-stack fa-x text-white">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-map-marker text-blue fa-stack-1x"></i>
                  </span>
                  <span className="fa-stack fa-x text-white">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-phone text-blue fa-stack-1x"></i>
                  </span>
        </div>
        <div className="col-md-3 box ps-0 mt-5 pe-5 pt-5">
                <h6 className="font-16 font-weight-bold mb-3">Our Products</h6>
                <p>Product 1</p>
                <p>Product 2</p>
                <p>Product 3</p>
                <p>Product 4</p>
        </div>
        <div className="col-md-3 ps-0 mt-5 pe-5 pt-5">
            <h6 className="font-16 font-weight-bold mb-3">Contact</h6>
            <p>Info@globalmedicsusa.com</p>
        </div>
        <div className="col-md-3 ps-0 mt-5 pt-5">
            <h6 className="font-16 font-weight-bold mb-3">Quick Links</h6>
            <p>Link 1</p>
            <p>Link 2</p>
            <p>Link 3</p>
            <p>Link 4</p>
        </div>
      </div>
    
    <div className="row text-center me-0 text-white background-blue pt-3 overflow-hidden">
        <div className="col-md-4 box">
          <span className="copyright quick-links font-14">©2023 Global Medics USA®. All Rights Reserved.</span>
        </div>
        <div className="col-md-4 box">
        </div>
        <div className="col-md-4 box">
          <ul className="list-inline quick-links">
            <li className="list-inline-item margin-r font-14 pe-5">
            <Link to="/privacy" className="text-white">Privacy Policy
                </Link>
            </li>
            <li className="list-inline-item font-14">
            <Link to="/terms" className="text-white">Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </footer>
 )
}

export default Footer