import * as React from "react";
import Layout from "./components/Layout";
import { useState, useEffect } from "react";
import axiosClient from "./axiosClient";
import ReactPaginate from 'react-paginate';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadContent } from "./redux/features/content/contentActions";
import { BASE_URL } from "./config";

export default function App() {
    const title = "Global Medics USA";
    const [click, setClicked] = useState(false);


    const paginate = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    const { contentInfo } = useSelector(
        (state) => state.content
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadContent({}));
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const [initialPage, setInitialPage] = React.useState(0)

    // function heartFilled(e) {
    //     e.target.className = "fa fa-heart favorite-icon font-24 pt-3";
    // }
    // function heartEmpty(e) {
    //     if (click) {
    //         e.target.className = "fa fa-heart favorite-icon font-24 pt-3";
    //     } else {
    //         e.target.className = "fa fa-heart-o favorite-icon font-24 pt-3";
    //     }
    // }
    function heartClicked(e) {
        setClicked(true);
        if (e.target.className == "fa fa-heart favorite-icon font-24 pt-3") {
            e.target.className = "fa fa-heart-o favorite-icon font-24 pt-3";
        } else {
            e.target.className = "fa fa-heart favorite-icon font-24 pt-3";
        }
    }
    const selectInputRef = useRef();
    const [state, setState] = useState({
        full_name: "",
        email: "",
        contact_form_interest_id: "",
        message: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    };
    const [data, setData] = useState(null);
    const [error2, setError] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            full_name: state.full_name,
            email: state.email,
            contact_form_interest_id: state.contact_form_interest_id,
            message: state.message,
        };
        axiosClient.post("/contact-forms/store", userData)
            .then(response => {
                setData(response.data);
            })
            .catch(error2 => {
                setError(error2);
            });
        setState({
            full_name: "",
            email: "",
            contact_form_interest_id: "",
            message: ""
        });
        setError("");
    };
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <>
            <title>{title}</title>
            <Layout>
                <Carousel showThumbs={false} showStatus={false}>
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{
                            background: `url("${`${BASE_URL}/storage/${contentInfo?.index.carousel_1_photo}`}") 
                 no-repeat center center`, height: "336px"
                        }}>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{contentInfo?.index.carousel_1_heading}</h5>
                                <p>{contentInfo?.index.carousel_1_subheading}</p>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{
                            background: `url("${`${BASE_URL}/storage/${contentInfo?.index.carousel_2_photo}`}") 
                 no-repeat center center`, height: "336px"
                        }}>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{contentInfo?.index.carousel_2_heading}</h5>
                                <p>{contentInfo?.index.carousel_2_subheading}</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{
                            background: `url("${`${BASE_URL}/storage/${contentInfo?.index.carousel_3_photo}`}") 
                 no-repeat center center`, height: "336px"
                        }}>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{contentInfo?.index.carousel_3_heading}</h5>
                                <p>{contentInfo?.index.carousel_3_subheading}</p>
                            </div>
                        </div>
                    </div>
                </Carousel>
                <div
                    className="align-items-center flex-column justify-content-center h-100 text-white"
                    id="header"
                >
                    <div className="row h-100">
                        <main className="col-md-12 me-0 pe-0">
                            <div className="container">
                                <div className="row m-0">
                                    {contentInfo?.categories ? (

                                        <TabComponent heightAdjustMode='Auto' >
                                            <TabItemsDirective>
                                                <TabItemDirective key="1" header={{ text: "All" }} content={
                                                    () => {

                                                        const allProducts = contentInfo.products;
                                                        const currentProducts = allProducts.slice(indexOfFirstPost, indexOfLastPost);
                                                        const paginate = ({ selected }) => {
                                                            setCurrentPage(selected + 1);
                                                        };

                                                        return <div>
                                                            <div
                                                                className="d-flex flex-column background-white h-100"
                                                                id="products"
                                                            >
                                                                <div className="row me-0 h-100 overflow-hidden">
                                                                    <div className="col-md-12 box font-18 mt-5 ms-5 pt-2">

                                                                        {allProducts?.length} products
                                                                    </div>
                                                                    {/* <div className="col-md-3 box font-18"></div> */}
                                                                    {/* <div className="col-md-3 box font-18"></div> */}
                                                                    {/* <div className="col-md-3 box pe-5 mt-5"> */}
                                                                    {/* <select
                                        className="select p-2 font-16 recommended-background border-0 float-end mb-3"
                                        id="contact_interested"
                                    >
                                        <option value="1">Recommended</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                        <option value="4">Four</option>
                                        <option value="5">Five</option>
                                    </select> */}
                                                                    {/* </div> */}
                                                                    <div className="page-pagination">

                                                                        {currentProducts ? (
                                                                            <div
                                                                                className="row text-center me-0 h-100 pb-5 pt-2 pe-0 ps-5 overflow-hidden"
                                                                                id="products"
                                                                            >
                                                                                {currentProducts?.map((product) => (
                                                                                    <div
                                                                                        key={product?.id}
                                                                                        target="_blank"
                                                                                        className="col-md-3 box ps-0 pe-3 pb-4"
                                                                                    >
                                                                                        <div className="product-item pb-3 w-100" onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut}>
                                                                                            <i
                                                                                                className="fa fa-heart-o favorite-icon font-24 pt-3"
                                                                                                id={product?.id}
                                                                                                onClick={heartClicked}
                                                                                            ></i>
                                                                                            {/* onMouseLeave={heartEmpty}  */}
                                                                                            {/* onMouseOver={heartFilled} */}

                                                                                            <a href={`products/${product?.id}`}>
                                                                                            <img
                                                                                                src={`${BASE_URL}/storage/${product?.main_image}`}
                                                                                                width="100%" height="300"
                                                                                                alt=""
                                                                                            />
                                                                                            </a>
                                                                                            <a href={`products/${product?.id}`}>
                                                                                            <h2 className="font-16 hover font-color">
                                                                                                {product?.name}
                                                                                            </h2>
                                                                                            </a>
                                                                                            <a href={`products/${product?.id}`}>
                                                                                            <span className="text-green font-16">
                                                                                                $ {product?.price}
                                                                                            </span></a><br />

                                                                                            {isHovering && <a href={`products/${product?.id}`}><span className="btn btn-primary submit hide mt-4">More info</span></a>}


                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                                {currentProducts.length > 0 &&
                                                                                    <div className="d-flex flex-row pagination pt-5">
                                                                                        <ReactPaginate
                                                                                            key="paginate1"
                                                                                            onPageChange={paginate}
                                                                                            pageCount={Math.ceil(
                                                                                                allProducts?.length /
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
                                                                                }
                                                                            </div>
                                                                        ) : (
                                                                            <div className="loading">Loading...</div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>;
                                                    }
                                                } />

                                                {contentInfo?.categories.map((category) => {


                                                    return (

                                                        <TabItemDirective key={category.id} header={{ text: `${category.name}` }} content={
                                                            () => {

                                                                const productContent = contentInfo.products.filter((product) => product.category_id == category.id);
                                                                const currentProducts = productContent.slice(indexOfFirstPost, indexOfLastPost);
                                                                const paginate = ({ selected }) => {
                                                                    setCurrentPage(selected + 1);
                                                                };

                                                                return <div>
                                                                    <div
                                                                        className="d-flex flex-column background-white h-100"
                                                                        id="products"
                                                                    >
                                                                        <div className="row me-0 h-100 overflow-hidden">
                                                                            <div className="col-md-12 box font-18 ms-5 mt-5 pt-2">

                                                                                {productContent?.length} products
                                                                            </div>
                                                                            {/* <div className="col-md-3 box font-18"></div>
                                <div className="col-md-3 box font-18"></div> */}
                                                                            {/* <div className="col-md-3 box pe-5 mt-5"> */}
                                                                            {/* <select
                                        className="select p-2 font-16 recommended-background border-0 float-end mb-3"
                                        id="contact_interested"
                                    >
                                        <option value="1">Recommended</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                        <option value="4">Four</option>
                                        <option value="5">Five</option>
                                    </select> */}
                                                                            {/* </div> */}
                                                                            <div className="page-pagination">

                                                                                {currentProducts ? (
                                                                                    <div
                                                                                        className="row text-center me-0 h-100 pb-5 pt-2 pe-0 ps-5 overflow-hidden"
                                                                                        id="products"
                                                                                    >
                                                                                        {currentProducts?.map((product) => (
                                                                                            <div
                                                                                                key={product?.id}
                                                                                                target="_blank"
                                                                                                className="col-md-3 box ps-0 pe-3 pb-4"
                                                                                            >
                                                                                                <div className="product-item pb-3 w-100">
                                                                                                    <i
                                                                                                        className="fa fa-heart-o favorite-icon font-24 pt-3"
                                                                                                        id={product?.id}
                                                                                                        onClick={heartClicked}
                                                                                                    ></i>
                                                                                                    {/* onMouseLeave={heartEmpty}  */}
                                                                                                    {/* onMouseOver={heartFilled} */}
                                                                                                    <a href={`products/${product?.id}`}>
                                                                                                        <img
                                                                                                            src={`${BASE_URL}/storage/${product?.main_image}`}
                                                                                                            width="100%" height="300"
                                                                                                            alt=""
                                                                                                        />
                                                                                                    </a>
                                                                                                    <a href={`products/${product?.id}`}>
                                                                                                        <h2 className="font-16 hover font-color">
                                                                                                            {product?.name}
                                                                                                        </h2>
                                                                                                    </a>
                                                                                                    <a >
                                                                                                        <span className="text-green font-16">
                                                                                                            $ {product?.price}
                                                                                                        </span>
                                                                                                    </a>
                                                                                                    <a href={`products/${product?.id}`}><span className="btn btn-primary submit hide mt-4">More info</span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        ))}
                                                                                        {productContent.length > 0 &&
                                                                                            <div className="d-flex flex-row pagination pt-5">
                                                                                                <ReactPaginate
                                                                                                    key="paginate2"
                                                                                                    onPageChange={paginate}
                                                                                                    pageCount={Math.ceil(
                                                                                                        productContent?.length /
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

                                                                                        }
                                                                                    </div>
                                                                                ) : (
                                                                                    <div className="loading">Loading...</div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>;
                                                            }
                                                        } />

                                                    )
                                                }
                                                )}

                                            </TabItemsDirective>
                                        </TabComponent>
                                    ) : (
                                        <div className="loading">Loading...</div>
                                    )}
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div
                    className="d-flex pt-5 flex-column h-100 products-image text-white"
                    id="header"
                >
                    <div className="row h-100">
                        <main className="col-md-12">
                            <div className="container">
                                <div className="row m-0">
                                    <div className="col-md-6 ps-0 mt-5 pe-5 pt-5">
                                        <h4 className="font-33 pe-0 font-italic font-weight-bold">
                                            {
                                                contentInfo?.index
                                                    .product_description
                                            }
                                        </h4>
                                        <p className="font-24">
                                            {contentInfo?.index.product_cta}
                                        </p>
                                    </div>
                                    <div className="col-md-6 pe-0 float-end">
                                        <img src={`${BASE_URL}/storage/${contentInfo?.index.products_photo}`} />
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
                    <h1 className="display-5">
                        {contentInfo?.index.about_title}
                    </h1>
                    <span className="text-green mb-5">
                        {contentInfo?.index.about_subtitle}
                    </span>
                    <div className="row h-100">
                        <main className="col-md-12">
                            <div className="container">
                                <div className="row m-0 mb-5">
                                    <div className="col-md-6 ps-0 pe-5">
                                        <h4 className="display-5 pe-0 mb-5">
                                            {contentInfo?.index.about_heading}
                                        </h4>
                                        <p className="text-grey">
                                            {
                                                contentInfo?.index
                                                    .about_description
                                            }
                                        </p>
                                        <a
                                            className="btn btn-outline-primary mt-4 text-blue ps-4 pe-4"
                                            href="/about"
                                        >
                                            {contentInfo?.index.about_cta}
                                        </a>
                                    </div>
                                    <div className="col-md-6 pe-0 float-end relative">
                                        <div className="about-circle pe-0 shadow-lg rounded rounded-circle"></div>
                                        <img
                                            className="about-image"
                                            src={`${BASE_URL}/storage/${contentInfo?.index.about_photo}`}
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
                    <h1 className="display-5">
                        {contentInfo?.index.team_title}
                    </h1>
                    <span className="text-green mb-5">
                        {contentInfo?.index.team_subtitle}
                    </span>
                    <div className="row h-100">
                        <main className="col-md-12">
                            <div className="container">
                                <div className="row m-0">
                                    {contentInfo?.teamMembers.map((member) => (
                                        <div key={member.id} className="col-md-6 ps-0 pe-5 mb-5">
                                            <img
                                                className="float-start"
                                                src={`${BASE_URL}/storage/${member.photo}`}
                                                width="200"
                                                height="250"
                                                alt=""
                                            />
                                            <div className="col-md-6 ps-5 float-start">
                                                <h6 className="font-weight-bold">
                                                    {member.full_name}
                                                </h6>
                                                <p className="small pb-1">
                                                    {member.job}
                                                </p>
                                                <p className="small">
                                                    {member.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div
                    className="d-flex align-items-center flex-column pt-5 justify-content-center h-100 text-blue"
                    id="contact"
                >
                    <h1 className="display-5">
                        {contentInfo?.index.contact_title}
                    </h1>
                    <span className="text-green mb-5">
                        {contentInfo?.index.contact_subtitle}
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
                                            src={`https://maps.google.com/maps?q=${contentInfo?.general.lat},${contentInfo?.general.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                            border="0"
                                            className="map-container"
                                        ></iframe>
                                    </div>
                                    <div className="col-md-6">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-row">
                                                <div className="form-group width">
                                                    <label className="mb-3">
                                                        Full Name *
                                                    </label>
                                                    <input
                                                        className="form-control form-control-lg form-background border-0 float-end mb-3"
                                                        type="text"
                                                        name="full_name"
                                                        id="contact_name"
                                                        value={state.full_name}
                                                        onChange={handleChange}
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
                                                        name="email"
                                                        value={state.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                <div className="form-group width">
                                                    <label className="mb-3">
                                                        What are you interested
                                                        in?
                                                    </label>
                                                    <select
                                                        ref={selectInputRef}
                                                        className="select form-background border-0 float-end p-2 mb-3"
                                                        id="contact_interested"
                                                        name="contact_form_interest_id"
                                                        value={state.contact_form_interest_id}
                                                        onChange={handleChange}
                                                    >
                                                        {contentInfo?.contactFormInterests.map(
                                                            (interest) => (
                                                                <option key={interest.id}
                                                                    value={
                                                                        interest.id
                                                                    }
                                                                >
                                                                    {
                                                                        interest.title
                                                                    }
                                                                </option>
                                                            )
                                                        )}
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
                                                        name="message"
                                                        value={state.message}
                                                        onChange={handleChange}
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-primary submit mt-4">
                                                    {
                                                        contentInfo?.index
                                                            .contact_submit_button_title
                                                    }
                                                </button>
                                            </div>
                                            {error2?.response
                                                && (error2?.response.data.message ? (
                                                    <div className="error">{error2.response.data.message}</div>
                                                ) : (
                                                    <div className="error">{error2.message}</div>
                                                ))}

                                            {data ? (
                                                <div className="success">{data.message}</div>
                                            ) : (
                                                <div className="success"></div>
                                            )}

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
