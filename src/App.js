
import * as React from "react"
import Layout from "./components/Layout";
import {
  Link
} from "react-router-dom";
import { useState, useEffect } from 'react';

import background1 from "./images/background1.png";
import background2 from "./images/background2.png";
import background3 from "./images/background3.png";
import productImage from "./images/product.png";
import productsImage from "./images/products-image.svg";
import aboutImage from "./images/about-image.png";
import employee1 from "./images/employee1.png";
import employee2 from "./images/employee2.png";
import employee3 from "./images/employee3.png";
import employee4 from "./images/employee4.png";
import './components/functions.js';
import ReactPaginate from 'react-paginate';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel'; 
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
export default function App(props) {
  const title = 'Global Medics USA';
  const [click, setClicked] = useState(false);
  
  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  const htmlContent = () => {
    return <div>
  HyperText Markup Language, commonly referred to as HTML, is the standard markup language used to create web pages. Along with CSS, and JavaScript, HTML is a cornerstone technology, used by most websites to create visually engaging web pages, user interfaces for web applications, and user interfaces for many mobile applications.[1] Web browsers can read HTML files and render them into visible or audible web pages. HTML describes the structure of a website semantically along with cues for presentation, making it a markup language, rather than a programming language.
</div>;
}
let headerText = [{ text: "Twitter" }, { text: "Facebook" }, { text: "WhatsApp" }];
const csharpContent = () => {
    return <div>
  C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.
</div>;
}
const javaContent = () => {
    return <div>
      <div className="row text-center me-0 h-100 overflow-hidden">
        <div className="col-md-3 box font-18 mt-5 pt-2">44 products</div>
        <div className="col-md-3 box font-18"></div>
        <div className="col-md-3 box font-18"></div>
        <div className="col-md-3 box pe-5 mt-3"><select className="select p-2 font-16 recommended-background border-0 float-end mb-3" id="contact_interested">
        <option value="1">Recommended</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
  </select></div>
  <div className='page-pagination'>
        {products ? (
            <div className="row text-center me-0 h-100 pb-5 pt-2 pe-0 ps-5 overflow-hidden" id="products">
                  {currentPosts.map((product) => (

                    <div key={product.id} target="_blank" className="col-md-3 box ps-0 pe-3 pb-4">
  <div className="product-item pb-3 ">
  <i className="fa fa-heart-o favorite-icon font-24 pt-3" id={product.id}  
        onClick={heartClicked} ></i>
        {/* onMouseLeave={heartEmpty}  */}
        {/* onMouseOver={heartFilled} */}

        <a href="products"><img src={productImage} width="250" /></a>
              <a href="products"><h2 className="font-16">{product.title}</h2></a>
              <a><span className="text-green font-16">{product.price}</span></a>
           
        </div>
        </div>
                    
                  ))}
                  <div className="d-flex flex-row pagination pt-5">
                  <ReactPaginate
						onPageChange={paginate}
						pageCount={Math.ceil(products.length / postsPerPage)}
						previousLabel={'<'}
						nextLabel={'>'}
						containerClassName={'pagination'}
						pageLinkClassName={'page-number'}
						previousLinkClassName={'page-number'}
						nextLinkClassName={'page-number'}
						activeLinkClassName={'active'}
					/>
          </div>
            </div>
         ) : (
            <div className="loading">Loading...</div>
         )}
         
</div>
        {/* <nav aria-label="Page navigation example" className="ps-4 pt-5">
  <ul className="d-flex flex-row pagination">
    <li className="page-item shadow-none">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span className="sr-only">Previous</span>
      </a>
    </li>
    <li className="page-item shadow-none"><a className="page-link" href="#">1</a></li>
    <li className="page-item shadow-none"><a className="page-link" href="#">2</a></li>
    <li className="page-item shadow-none"><a className="page-link" href="#">3</a></li>
    <li className="page-item shadow-none">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span className="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav> */}
      </div>
</div>;
}
const vbNetContent = () => {
    return <div>
  The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.
</div>;
}
const xamarinContent = () => {
    return <div>
  Xamarin is a San Francisco, California based software company created in May 2011[3] by the engineers that created Mono,[4] Mono for Android and MonoTouch that are cross-platform implementations of the Common Language Infrastructure (CLI) and Common Language Specifications (often called Microsoft .NET). With a C#-shared codebase,developers can use Xamarin tools to write native Android, iOS, and Windows apps with native user interfaces and share code across multiple platforms.[5] Xamarin has over 1 million developers in more than 120 countries around the World as of May 2015.
</div>;
}
const aspNetcontent = () => {
    return <div>
  ASP.NET is an open-source server-side web application framework designed for web development to produce dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, web applications and web services. It was first released in January 2002 with version 1.0 of the .NET Framework, and is the successor to Microsoft Active Server Pages (ASP) technology. ASP.NET is built on the Common Language Runtime (CLR), allowing programmers to write ASP.NET code using any supported .NET language. The ASP.NET SOAP extension framework allows ASP.NET components to process SOAP messages.
</div>;
}
const mvcContent = () => {
    return <div>
  The ASP.NET MVC is a web application framework developed by Microsoft, which implements the model–view–controller (MVC) pattern. It is open-source software, apart from the ASP.NET Web Forms component which is proprietary. In the later versions of ASP.NET, ASP.NET MVC, ASP.NET Web API, and ASP.NET Web Pages (a platform using only Razor pages) will merge into a unified MVC 6. The project is called ASP.NET vNext.
</div>;
}
const jsContent = () => {
    return <div>
  JavaScript (JS) is an interpreted computer programming language. It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.[5] More recently, however, it has become common in both game development and the creation of desktop applications.
</div>;
}

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
  const products = [
    {
       id: 1,
       title:
          'MSC MALE SPERMACEIVE® 1',
       price:'15.5',
       url:'products'
    },
    {
      id: 2,
      title:
         'MSC MALE SPERMACEIVE® 2',
      price:'12.5',
      url:'products'
   },
   {
    id: 3,
    title:
       'MSC MALE SPERMACEIVE® 2',
    price:'12.5',
    url:'products'
 },
 {
  id: 4,
  title:
     'MSC MALE SPERMACEIVE® 2',
  price:'12.5',
  url:'products'
},
{
  id: 5,
  title:
     'MSC MALE SPERMACEIVE® 1',
  price:'15.5',
  url:'products'
},
{
 id: 6,
 title:
    'MSC MALE SPERMACEIVE® 2',
 price:'12.5',
 url:'products'
},
{
id: 7,
title:
  'MSC MALE SPERMACEIVE® 2',
price:'12.5',
url:'products'
},
{
id: 8,
title:
'MSC MALE SPERMACEIVE® 2',
price:'12.5',
url:'products'
},
{
  id: 9,
  title:
     'MSC MALE SPERMACEIVE® 1',
  price:'15.5',
  url:'products'
},
{
 id: 10,
 title:
    'MSC MALE SPERMACEIVE® 2',
 price:'12.5',
 url:'products'
},
{
id: 11,
title:
  'MSC MALE SPERMACEIVE® 2',
price:'12.5',
url:'products'
},
{
id: 12,
title:
'MSC MALE SPERMACEIVE® 2',
price:'12.5',
url:'products'
},
{
  id: 13,
  title:
     'MSC MALE SPERMACEIVE® 13',
  price:'13.5',
  url:'products'
},
{
 id: 14,
 title:
    'MSC MALE SPERMACEIVE® 14',
 price:'14.5',
 url:'products'
},
{
id: 15,
title:
  'MSC MALE SPERMACEIVE® 15',
price:'15.5',
url:'products'
},
{
id: 16,
title:
'MSC MALE SPERMACEIVE® 16',
price:'16.5',
url:'products'
},
{
  id: 17,
  title:
     'MSC MALE SPERMACEIVE® 17',
  price:'17.5',
  url:'products'
},
{
 id: 18,
 title:
    'MSC MALE SPERMACEIVE® 18',
 price:'18.5',
 url:'products'
},
{
id: 19,
title:
  'MSC MALE SPERMACEIVE® 19',
price:'19.5',
url:'products'
},
{
id: 20,
title:
'MSC MALE SPERMACEIVE® 20',
price:'20.5',
url:'products'
},
 ];
 const [productList, setProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

 function heartFilled(e){
  e.target.className = 'fa fa-heart favorite-icon font-24 pt-3';
}
useEffect(() => {
  // console.log('Clicked ', click);
}, [click]);
function heartEmpty(e){
  if(click){
    e.target.className = 'fa fa-heart favorite-icon font-24 pt-3';
  }
  else{
  e.target.className = 'fa fa-heart-o favorite-icon font-24 pt-3';
  }
}
function heartClicked(e){
  setClicked(true);
  if(e.target.className =="fa fa-heart favorite-icon font-24 pt-3"){
    e.target.className ="fa fa-heart-o favorite-icon font-24 pt-3";
  }
  else{
  e.target.className ="fa fa-heart favorite-icon font-24 pt-3";
  }
}


  return <>
  <title>{ title }</title>
    <Layout>
    <Carousel showThumbs={false} showStatus={false}>  
    <div className="carousel-inner">
                <div className="carousel-item active" style={styles1}>
            {/* <img className="bd-placeholder-img bd-placeholder-img-lg d-block" height="336" src={background1} /> */}
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
                    
                </div>  
                <div className="carousel-inner">
                <div className="carousel-item active" style={styles2}>
            {/* <img className="bd-placeholder-img bd-placeholder-img-lg d-block" height="336" src={background1} /> */}
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
                </div>  
                <div className="carousel-inner">
                <div className="carousel-item active" style={styles3}>
            {/* <img className="bd-placeholder-img bd-placeholder-img-lg d-block" height="336" src={background1} /> */}
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
                </div>  
            </Carousel>
      
        <div className="align-items-center flex-column background-white justify-content-center h-100" id="products">
        <div className="mt-5">
        <TabComponent heightAdjustMode='Auto' >
      <TabItemsDirective>
        <TabItemDirective header={headerText[0]} content={javaContent}/>
        <TabItemDirective header={headerText[1]} content={csharpContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[0]} content={htmlContent}/>
        <TabItemDirective header={headerText[1]} content={csharpContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[0]} content={htmlContent}/>
        <TabItemDirective header={headerText[1]} content={csharpContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
        <TabItemDirective header={headerText[2]} content={javaContent}/>
      </TabItemsDirective>
    </TabComponent>
    </div>
        </div>
    
        <div className="d-flex align-items-center pt-5 flex-column justify-content-center h-100 products-image text-white" id="header">
            <div className="row h-100">
                <main className="col-md-12">
                    <div className="container">
                        <div className="row m-0">
                            <div className="col-md-6 ps-0 mt-5 pe-5 pt-5">
                                <h4 className="font-33 pe-0 font-italic font-weight-bold">Dedicated to provide the world with high quality vitamins and supplements, we have our global team ready to support you.</h4>
                                <p className="font-24">Have an interest in our products for your country? Reach out to one of our team members below and we will be happy to assist you in all your vitamin and supplement needs.</p>
                            </div>
                            <div className="col-md-6 pe-0 float-end">
                                <img src={productsImage} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
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
                                <img className="about-image" src={aboutImage} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <div className="d-flex align-items-center flex-column justify-content-center pt-5 pb-5 mt-4 background-image background-color text-blue" id="team">
            <h1 className="display-5">Meet The Team</h1>
            <span className="text-green mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </span>
            <div className="row h-100">
                <main className="col-md-12">
                    <div className="container">
                            <div className="row m-0 mb-5">
                                <div className="col-md-6 ps-0 pe-5">
                                <img className="float-start" src={employee1} width="200" height="250"/>       
                                      <div className="col-md-6 ps-5 float-start">
                                      <h6 className="font-weight-bold">Frankie Chew</h6>
                                      <p className="small pb-1">Asia & Africa Regional Sales & Marketing</p>
                                      <p className="small">Mr. Frankie Chew supports the following regions/countries: Europe, Central Asia/Middle East(Sweden, Germany, France, Turkey, Iran, Georgia , Azerbaijan, Russia, Kyrgyzstan, Uzbekistan, Kazakhstan, Tajikistan), East &West Africa (Nigeria, Kenya, Ghana, Senegal, South Africa, Ivory Coast)</p>                                                                  
                                    </div> 
                                   
                                </div>
                                <div className="col-md-6 pe-0">
                                <img className="float-start" src={employee2} width="200" height="250"/>
                                      <div className="col-md-6 ps-5 float-start">
                                      <h6 className="font-weight-bold">Frankie Chew</h6>
                                      <p className="small pb-1">Asia & Africa Regional Sales & Marketing</p>
                                      <p className="small">Mr. Frankie Chew supports the following regions/countries: Europe, Central Asia/Middle East(Sweden, Germany, France, Turkey, Iran, Georgia , Azerbaijan, Russia, Kyrgyzstan, Uzbekistan, Kazakhstan, Tajikistan), East &West Africa (Nigeria, Kenya, Ghana, Senegal, South Africa, Ivory Coast)</p>                                                                  
                                    </div>     
                                </div>
                        </div>
                            <div className="row m-0">
                                <div className="col-md-6 ps-0 pe-5">
                                <img className="float-start" src={employee3} width="200" height="250"/>
                                      <div className="col-md-6 ps-5 float-start">
                                      <h6 className="font-weight-bold">Frankie Chew</h6>
                                      <p className="small pb-1">Asia & Africa Regional Sales & Marketing</p>
                                      <p className="small">Mr. Frankie Chew supports the following regions/countries: Europe, Central Asia/Middle East(Sweden, Germany, France, Turkey, Iran, Georgia , Azerbaijan, Russia, Kyrgyzstan, Uzbekistan, Kazakhstan, Tajikistan), East &West Africa (Nigeria, Kenya, Ghana, Senegal, South Africa, Ivory Coast)</p>                                                                  
                                    </div>
                                    </div>
                                <div className="col-md-6 pe-0">
                                <img className="float-start" src={employee4} width="200" height="250"/>
                                      <div className="col-md-6 ps-5 float-start">
                                      <h6 className="font-weight-bold">Frankie Chew</h6>
                                      <p className="small pb-1">Asia & Africa Regional Sales & Marketing</p>
                                      <p className="small">Mr. Frankie Chew supports the following regions/countries: Europe, Central Asia/Middle East(Sweden, Germany, France, Turkey, Iran, Georgia , Azerbaijan, Russia, Kyrgyzstan, Uzbekistan, Kazakhstan, Tajikistan), East &West Africa (Nigeria, Kenya, Ghana, Senegal, South Africa, Ivory Coast)</p>                                                                  
                                    </div>         
                                </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <div className="d-flex align-items-center flex-column pt-5 justify-content-center h-100 text-blue" id="contact">
            <h1 className="display-5">WE'D LOVE TO WORK WITH YOU</h1>
            <span className="text-green mb-5">Contact us today and help us encourage others to live 
                healthy, productive lives!</span>
            <div className="row h-100">
                <main className="col-md-12">
                    <div className="container ">
                        <div className="row m-0 mb-5">
                        <div id="map-container-google-1" className="col-md-6 z-depth-1-half float-start">
                                    <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                                    border="0" className="map-container"></iframe>
                                  </div>
                                      <div className="col-md-6">
                                      <form>
                                    <div className="form-row">
                                    <div className="form-group width">
                                        <label className="mb-3">Full Name *</label>
                                        <input className="form-control form-control-lg form-background border-0 float-end mb-3" type="text" id="contact_name"/>
                                    </div>
                                    <div className="form-group width">
                                        <label className="mb-3">Email *</label>
                                        <input type="email" className="form-control form-control-lg form-background float-end border-0 mb-3" id="contact_email"/>
                                    </div>
                                    
                                    <div className="form-group width">
                                        <label className="mb-3">What are you interested in?</label>
                                            <select className="select form-background border-0 float-end p-2 mb-3" id="contact_interested">
                                                <option></option>
                                                <option>1</option>
                                              <option>2</option>
                                              <option>3</option>
                                              <option>4</option>
                                              <option>5</option>
                                            </select>
                                    </div>
                                    <div className="form-group width">
                                        <label className="mb-3">Message (Optional)</label>
                                        <textarea className="form-control form-control-lg form-background border-0 float-end" id="contact_message" rows="3"></textarea>
                                    </div>
                                </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary submit mt-4">Submit</button>
                                    </div>
                                </form>                                                                 
                                    </div> 
                           
                        </div>
                    </div>
                </main>
            </div>
      </div>
    </Layout>
  </>;
}
