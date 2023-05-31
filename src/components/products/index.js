import * as React from "react"
import Layout from "../../components/Layout";
// import { Link } from "gatsby"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Home() {
    return <>
        <Layout>
        <div className="d-flex align-items-center flex-column justify-content-center h-100 pt-4 text-blue" id="about">
            <h1 className="display-5">About Us</h1>
            <span className="text-green mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </span>
            <div className="row h-100">
                <main className="col-md-12">
                    <div className="container">
                        <div className="row m-0 mb-5">
                            <div className="col-md-6 ps-0 pe-5">
                                <h4 className="display-5 pe-0 mb-5">Lorem ipsum dolor sit amet.</h4>
                                <p className="text-grey">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem</p>
                                <Link className="btn btn-outline-primary mt-4 text-blue ps-4 pe-4" to="/about">Read More</Link>
                            
                            </div>
                            <div className="col-md-6 pe-0 float-end relative">
                                <div className="about-circle pe-0 shadow-lg rounded rounded-circle"></div>
                                <img className="about-image" src="" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

        </Layout>
    </>;
}
