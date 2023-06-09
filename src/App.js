import * as React from "react";
import Layout from "./components/Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
import "./components/functions.js";
import ReactPaginate from "react-paginate";

import { useDispatch, useSelector } from "react-redux";
import { loadContent } from "./redux/features/content/contentActions";
import { BASE_URL } from "./config";

export default function App(props) {
    const title = "Global Medics USA";
    const [click, setClicked] = useState(false);

    const paginate = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    const styles1 = {
        background: `url("${background1}") no-repeat center center`,
        height: "336px",
    };
    const styles2 = {
        background: `url("${background2}") no-repeat center center`,
        height: "336px",
    };
    const styles3 = {
        background: `url("${background3}") no-repeat center center`,
        height: "336px",
    };

    const { loading, contentInfo, error } = useSelector(
        (state) => state.content
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadContent({}));
    }, []);

    const products = [
        {
            id: 1,
            title: "MSC MALE SPERMACEIVE® 1",
            price: "15.5",
            url: "products",
        },
        {
            id: 2,
            title: "MSC MALE SPERMACEIVE® 2",
            price: "12.5",
            url: "products",
        },
        {
            id: 3,
            title: "MSC MALE SPERMACEIVE® 2",
            price: "12.5",
            url: "products",
        },
        {
            id: 4,
            title: "MSC MALE SPERMACEIVE® 2",
            price: "12.5",
            url: "products",
        },
        {
            id: 5,
            title: "MSC MALE SPERMACEIVE® 1",
            price: "15.5",
            url: "products",
        },
        {
            id: 6,
            title: "MSC MALE SPERMACEIVE® 2",
            price: "12.5",
            url: "products",
        },
        {
            id: 7,
            title: "MSC MALE SPERMACEIVE® 2",
            price: "12.5",
            url: "products",
        },
        {
            id: 8,
            title: "MSC MALE SPERMACEIVE® 2",
            price: "12.5",
            url: "products",
        },
        {
            id: 9,
            title: "MSC MALE SPERMACEIVE® 1",
            price: "15.5",
            url: "products",
        },
        {
            id: 10,
            title: "MSC MALE SPERMACEIVE® 2",
            price: "12.5",
            url: "products",
        },
        {
            id: 11,
            title: "MSC MALE SPERMACEIVE® 2",
            price: "12.5",
            url: "products",
        },
        {
            id: 12,
            title: "MSC MALE SPERMACEIVE® 2",
            price: "12.5",
            url: "products",
        },
        {
            id: 13,
            title: "MSC MALE SPERMACEIVE® 13",
            price: "13.5",
            url: "products",
        },
        {
            id: 14,
            title: "MSC MALE SPERMACEIVE® 14",
            price: "14.5",
            url: "products",
        },
        {
            id: 15,
            title: "MSC MALE SPERMACEIVE® 15",
            price: "15.5",
            url: "products",
        },
        {
            id: 16,
            title: "MSC MALE SPERMACEIVE® 16",
            price: "16.5",
            url: "products",
        },
        {
            id: 17,
            title: "MSC MALE SPERMACEIVE® 17",
            price: "17.5",
            url: "products",
        },
        {
            id: 18,
            title: "MSC MALE SPERMACEIVE® 18",
            price: "18.5",
            url: "products",
        },
        {
            id: 19,
            title: "MSC MALE SPERMACEIVE® 19",
            price: "19.5",
            url: "products",
        },
        {
            id: 20,
            title: "MSC MALE SPERMACEIVE® 20",
            price: "20.5",
            url: "products",
        },
    ];
    const [productList, setProducts] = useState(products);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

    function heartFilled(e) {
        e.target.className = "fa fa-heart favorite-icon font-24 pt-3";
    }
    useEffect(() => {
        // console.log('Clicked ', click);
    }, [click]);
    function heartEmpty(e) {
        if (click) {
            e.target.className = "fa fa-heart favorite-icon font-24 pt-3";
        } else {
            e.target.className = "fa fa-heart-o favorite-icon font-24 pt-3";
        }
    }
    function heartClicked(e) {
        setClicked(true);
        if (e.target.className == "fa fa-heart favorite-icon font-24 pt-3") {
            e.target.className = "fa fa-heart-o favorite-icon font-24 pt-3";
        } else {
            e.target.className = "fa fa-heart favorite-icon font-24 pt-3";
        }
    }

    return (
        <>
            <title>{title}</title>
            <Layout>
                <div
                    id="carouselExampleCaptions"
                    className="carousel slide slider-background"
                    data-bs-ride="false"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            className="active ps-2 pt-2 pe-2 "
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            className="ps-2 pe-2 pt-2 "
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            className="ps-2 pe-2 pt-2 "
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={styles1}>
                            {/* <img className="bd-placeholder-img bd-placeholder-img-lg d-block" height="336" src={background1} /> */}
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>
                                    Some representative placeholder content for
                                    the first slide.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item" style={styles2}>
                            {/* <img className="bd-placeholder-img bd-placeholder-img-lg d-block"  height="336" src={background2}/> */}

                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>
                                    Some representative placeholder content for
                                    the second slide.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item" style={styles3}>
                            {/* <img className="bd-placeholder-img bd-placeholder-img-lg d-block"  height="336" src={background3} /> */}

                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>
                                    Some representative placeholder content for
                                    the third slide.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div
                    className="d-flex align-items-center flex-column background-white justify-content-center h-100"
                    id="products"
                >
                    <div className="row text-center me-0 h-100 overflow-hidden">
                        <div className="col-md-3 box font-18 mt-5 pt-2">
                            {contentInfo?.products.length} products
                        </div>
                        <div className="col-md-3 box font-18"></div>
                        <div className="col-md-3 box font-18"></div>
                        <div className="col-md-3 box pe-5 mt-5">
                            <select
                                className="select p-2 font-16 recommended-background border-0 float-end mb-3"
                                id="contact_interested"
                            >
                                <option value="1">Recommended</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                            </select>
                        </div>
                        <div className="page-pagination">
                            {contentInfo?.products ? (
                                <div
                                    className="row text-center me-0 h-100 pb-5 pt-2 pe-0 ps-5 overflow-hidden"
                                    id="products"
                                >
                                    {contentInfo?.products.map((product) => (
                                        <div
                                            key={product.id}
                                            target="_blank"
                                            className="col-md-3 box ps-0 pe-3 pb-4"
                                        >
                                            <div className="product-item pb-3 ">
                                                <i
                                                    className="fa fa-heart-o favorite-icon font-24 pt-3"
                                                    id={product.id}
                                                    onClick={heartClicked}
                                                ></i>
                                                {/* onMouseLeave={heartEmpty}  */}
                                                {/* onMouseOver={heartFilled} */}

                                                <a
                                                    href={`products/${product.id}`}
                                                >
                                                    <img
                                                        src={`${BASE_URL}/storage/${product.photo}`}
                                                        width="100%"
                                                        alt=""
                                                    />
                                                </a>
                                                <a
                                                    href={`products/${product.id}`}
                                                >
                                                    <h2 className="font-16">
                                                        {product.name}
                                                    </h2>
                                                </a>
                                                <a>
                                                    <span className="text-green font-16">
                                                        $ {product.price}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="d-flex flex-row pagination pt-5">
                                        <ReactPaginate
                                            onPageChange={paginate}
                                            pageCount={Math.ceil(
                                                contentInfo?.products.length /
                                                    postsPerPage
                                            )}
                                            previousLabel={"<"}
                                            nextLabel={">"}
                                            containerClassName={"pagination"}
                                            pageLinkClassName={"page-number"}
                                            previousLinkClassName={
                                                "page-number"
                                            }
                                            nextLinkClassName={"page-number"}
                                            activeLinkClassName={"active"}
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
                </div>
                <div
                    className="d-flex align-items-center pt-5 flex-column justify-content-center h-100 products-image text-white"
                    id="header"
                >
                    <div className="row h-100">
                        <main className="col-md-12">
                            <div className="container">
                                <div className="row m-0">
                                    <div className="col-md-6 ps-0 mt-5 pe-5 pt-5">
                                        <h4 className="font-33 pe-0 font-italic font-weight-bold">
                                            Dedicated to provide the world with
                                            high quality vitamins and
                                            supplements, we have our global team
                                            ready to support you.
                                        </h4>
                                        <p className="font-24">
                                            Have an interest in our products for
                                            your country? Reach out to one of
                                            our team members below and we will
                                            be happy to assist you in all your
                                            vitamin and supplement needs.
                                        </p>
                                    </div>
                                    <div className="col-md-6 pe-0 float-end">
                                        <img src={productsImage} />
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div
                    className="d-flex align-items-center flex-column justify-content-center h-100 pt-4 text-blue"
                    id="about"
                >
                    <h1 className="display-5">About Us</h1>
                    <span className="text-green mb-5">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam{" "}
                    </span>
                    <div className="row h-100">
                        <main className="col-md-12">
                            <div className="container">
                                <div className="row m-0 mb-5">
                                    <div className="col-md-6 ps-0 pe-5">
                                        <h4 className="display-5 pe-0 mb-5">
                                            Lorem ipsum dolor sit amet.
                                        </h4>
                                        <p className="text-grey">
                                            Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt
                                            ut labore et dolore magna aliquyam
                                            erat, sed diam voluptua. At vero eos
                                            et accusam et justo duo dolores et
                                            ea rebum. Stet clita kasd gubergren,
                                            no sea takimata sanctus est Lorem
                                        </p>
                                        <Link
                                            className="btn btn-outline-primary mt-4 text-blue ps-4 pe-4"
                                            to="/about"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                    <div className="col-md-6 pe-0 float-end relative">
                                        <div className="about-circle pe-0 shadow-lg rounded rounded-circle"></div>
                                        <img
                                            className="about-image"
                                            src={aboutImage}
                                        />
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div
                    className="d-flex align-items-center flex-column justify-content-center pt-5 pb-5 mt-4 background-image background-color text-blue"
                    id="team"
                >
                    <h1 className="display-5">Meet The Team</h1>
                    <span className="text-green mb-5">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam{" "}
                    </span>
                    <div className="row h-100">
                        <main className="col-md-12">
                            <div className="container">
                                <div className="row m-0 mb-5">
                                    <div className="col-md-6 ps-0 pe-5">
                                        <img
                                            className="float-start"
                                            src={employee1}
                                            width="200"
                                            height="250"
                                        />
                                        <div className="col-md-6 ps-5 float-start">
                                            <h6 className="font-weight-bold">
                                                Frankie Chew
                                            </h6>
                                            <p className="small pb-1">
                                                Asia & Africa Regional Sales &
                                                Marketing
                                            </p>
                                            <p className="small">
                                                Mr. Frankie Chew supports the
                                                following regions/countries:
                                                Europe, Central Asia/Middle
                                                East(Sweden, Germany, France,
                                                Turkey, Iran, Georgia ,
                                                Azerbaijan, Russia, Kyrgyzstan,
                                                Uzbekistan, Kazakhstan,
                                                Tajikistan), East &West Africa
                                                (Nigeria, Kenya, Ghana, Senegal,
                                                South Africa, Ivory Coast)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 pe-0">
                                        <img
                                            className="float-start"
                                            src={employee2}
                                            width="200"
                                            height="250"
                                        />
                                        <div className="col-md-6 ps-5 float-start">
                                            <h6 className="font-weight-bold">
                                                Frankie Chew
                                            </h6>
                                            <p className="small pb-1">
                                                Asia & Africa Regional Sales &
                                                Marketing
                                            </p>
                                            <p className="small">
                                                Mr. Frankie Chew supports the
                                                following regions/countries:
                                                Europe, Central Asia/Middle
                                                East(Sweden, Germany, France,
                                                Turkey, Iran, Georgia ,
                                                Azerbaijan, Russia, Kyrgyzstan,
                                                Uzbekistan, Kazakhstan,
                                                Tajikistan), East &West Africa
                                                (Nigeria, Kenya, Ghana, Senegal,
                                                South Africa, Ivory Coast)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-0">
                                    <div className="col-md-6 ps-0 pe-5">
                                        <img
                                            className="float-start"
                                            src={employee3}
                                            width="200"
                                            height="250"
                                        />
                                        <div className="col-md-6 ps-5 float-start">
                                            <h6 className="font-weight-bold">
                                                Frankie Chew
                                            </h6>
                                            <p className="small pb-1">
                                                Asia & Africa Regional Sales &
                                                Marketing
                                            </p>
                                            <p className="small">
                                                Mr. Frankie Chew supports the
                                                following regions/countries:
                                                Europe, Central Asia/Middle
                                                East(Sweden, Germany, France,
                                                Turkey, Iran, Georgia ,
                                                Azerbaijan, Russia, Kyrgyzstan,
                                                Uzbekistan, Kazakhstan,
                                                Tajikistan), East &West Africa
                                                (Nigeria, Kenya, Ghana, Senegal,
                                                South Africa, Ivory Coast)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 pe-0">
                                        <img
                                            className="float-start"
                                            src={employee4}
                                            width="200"
                                            height="250"
                                        />
                                        <div className="col-md-6 ps-5 float-start">
                                            <h6 className="font-weight-bold">
                                                Frankie Chew
                                            </h6>
                                            <p className="small pb-1">
                                                Asia & Africa Regional Sales &
                                                Marketing
                                            </p>
                                            <p className="small">
                                                Mr. Frankie Chew supports the
                                                following regions/countries:
                                                Europe, Central Asia/Middle
                                                East(Sweden, Germany, France,
                                                Turkey, Iran, Georgia ,
                                                Azerbaijan, Russia, Kyrgyzstan,
                                                Uzbekistan, Kazakhstan,
                                                Tajikistan), East &West Africa
                                                (Nigeria, Kenya, Ghana, Senegal,
                                                South Africa, Ivory Coast)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div
                    className="d-flex align-items-center flex-column pt-5 justify-content-center h-100 text-blue"
                    id="contact"
                >
                    <h1 className="display-5">WE'D LOVE TO WORK WITH YOU</h1>
                    <span className="text-green mb-5">
                        Contact us today and help us encourage others to live
                        healthy, productive lives!
                    </span>
                    <div className="row h-100">
                        <main className="col-md-12">
                            <div className="container ">
                                <div className="row m-0 mb-5">
                                    <div
                                        id="map-container-google-1"
                                        className="col-md-6 z-depth-1-half float-start"
                                    >
                                        <iframe
                                            src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            border="0"
                                            className="map-container"
                                        ></iframe>
                                    </div>
                                    <div className="col-md-6">
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group width">
                                                    <label className="mb-3">
                                                        Full Name *
                                                    </label>
                                                    <input
                                                        className="form-control form-control-lg form-background border-0 float-end mb-3"
                                                        type="text"
                                                        id="contact_name"
                                                    />
                                                </div>
                                                <div className="form-group width">
                                                    <label className="mb-3">
                                                        Email *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control form-control-lg form-background float-end border-0 mb-3"
                                                        id="contact_email"
                                                    />
                                                </div>

                                                <div className="form-group width">
                                                    <label className="mb-3">
                                                        What are you interested
                                                        in?
                                                    </label>
                                                    <select
                                                        className="select form-background border-0 float-end p-2 mb-3"
                                                        id="contact_interested"
                                                    >
                                                        <option></option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                                <div className="form-group width">
                                                    <label className="mb-3">
                                                        Message (Optional)
                                                    </label>
                                                    <textarea
                                                        className="form-control form-control-lg form-background border-0 float-end"
                                                        id="contact_message"
                                                        rows="3"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-primary submit mt-4">
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </Layout>
        </>
    );
}
