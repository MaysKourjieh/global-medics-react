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
                        <div className="col-md-6 ps-0 pe-5">
                        <div className="ecommerce-gallery vertical" data-mdb-zoom-effect="true">
  <div className="row">
    <div className="col-4 col-sm-3">
      <div className="multi-carousel vertical" data-mdb-items="3">
        <div className="multi-carousel-inner">
          <div className="multi-carousel-item active">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
              data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp" alt="Table Full of Spices"
              className="active w-100" />
          </div>
          <div className="multi-carousel-item">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp"
              data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/2.webp" alt="Winter Landscape"
              className="w-100" />
          </div>
          <div className="multi-carousel-item">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp"
              data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/3.webp"
              alt="View of the City in the Mountains" className="w-100" />
          </div>
          <div className="multi-carousel-item">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp"
              data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/4.webp" alt="Place Royale Bruxelles"
              className="w-100" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
    <div className="col-8 col-sm-9">
      <div className="lightbox">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp" alt="Gallery image 1"
          className="ecommerce-gallery-main-img active w-100" />
      </div>
    </div>
  </div>
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
