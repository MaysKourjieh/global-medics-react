import * as React from "react"
import Layout from "../../components/Layout";
// import { Link } from "gatsby"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import supplement from "../../images/supplement.png";
  import background1 from "../../images/background1.png";
  import background2 from "../../images/background2.png";
  import background3 from "../../images/background3.png";
  import product from "../../images/product.png";
  // import data from "./data.json";
  // import VerticalCarousel from "./verticalCarousel";
  import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';
import $ from "jquery"
  
export default function Products() {
    const styles1 = {
        background:`url("${background1}") no-repeat center center`,
        height:'336px'
      };
      const styles2 = {
        background:`url("${background2}") no-repeat center center`,
        height:'336px'
      };
      const styles3 = {
        background:`url("${background3}") no-repeat center center`,
        height:'336px'
      };
      
      
    return <>
        <Layout>
        <div className="d-flex align-items-center flex-column justify-content-center h-100 pt-4 text-blue" id="about">
        <div className="row h-100">
            <main className="col-md-12">
                <div className="container">
                    <div className="row m-0 mb-5">
                        <div className="col-md-6 ps-0 pe-0">
                          
                        <div className="slider-galeria-thumbs">
  <div><span><img src={product}></img></span></div>
  <div><span><img src={product}></img></span></div>
  <div><span><img src={product}></img></span></div>
  <div><span><img src={product}></img></span></div>
  <div><span><img src={product}></img></span></div>
  <div><span><img src={product}></img></span></div>
</div>

<div className="slider-galeria">
  <div><span><img src={product}></img></span></div>
  <div><span><img src={product}></img></span></div>
  <div><span><img src={product}></img></span></div>
  <div><span><img src={product}></img></span></div>
  <div><span><img src={product}></img></span></div>
  <div><span><img src={product}></img></span></div>
</div>

                        </div>
                        <div className="col-md-6 pe-0 float-end relative">
                        <h3 className="display-3 font-33">FFC FEMALE FERTILICEIVE®</h3>
        <span className="text-green mb-5 font-16">* Increases probability of pregnancy
<br/>* Normalizes progesterone levels using chasteberry
<br/>* Balances estrogen and progesterone levels using maca root
<br/>* Restores natural hormonal balance*</span>
                        <div className="accordion mt-4" id="accordionPanelsStayOpenExample">
<div className="accordion-item mb-3 border-0">
<h2 className="accordion-header" id="panelsStayOpen-headingOne">
  <button className="accordion-button font-24" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
    Description
  </button>
</h2>
<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
  <div className="accordion-body">
  Use our herbal supplement to support your natural ovulation and improve your egg quality to increase the chances of fertilization. Our product is made from all natural ingredients and is Halal certified to support a woman’s reproductive system.<br/>

Our blend contains Chasteberry Fruit, which helps optimize progesterone levels to prepare your body for pregnancy by invigorating the luteinizing hormone (LH) that helps promotes ovulation. It also helps lengthen short cycles, further increasing chances of fertility. Its progesterone level boosting properties can also mitigate chances of miscarriage during early pregnancy.<br/>

It also comprises Maca roots, which can serve as an aid for reproductive issues and increase low sex drive among women
  </div>
</div>
</div>
<div className="accordion-item mb-3 border-0">
<h2 className="accordion-header" id="panelsStayOpen-headingTwo">
  <button className="accordion-button collapsed font-24" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
    Supplement Facts
  </button>
</h2>
<div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
  <div className="accordion-body">
    <img src={supplement}></img>
  </div>
</div>
</div>
<div className="accordion-item mb-3 border-0">
<h2 className="accordion-header" id="panelsStayOpen-headingThree">
  <button className="accordion-button collapsed font-24" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
    Suggested Use
  </button>
</h2>
<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
  <div className="accordion-body">
  As a dietary supplement, take two (2) capsules per day with food.
  </div>
</div>
</div>
<div className="accordion-item mb-3 border-0">
<h2 className="accordion-header" id="panelsStayOpen-headingFour">
  <button className="accordion-button collapsed font-24" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
    Resources
  </button>
</h2>
<div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
  <div className="accordion-body">
  Brochure:<br/>
  <a href="https://instagram.com/" target="_blank"> Global Medics USA® Fertility Brochure </a>
  </div>
</div>
</div>
</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

        </Layout>
    </>;
}
