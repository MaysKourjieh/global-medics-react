import React from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../config";

const Footer = () => {
    const { contentInfo } = useSelector((state) => state.content);
    return (
        <footer>
            <div
                className="row text-center me-0 h-100 pb-5 background-color overflow-hidden"
                id="footer"
            >
                <div className="col-md-4 box ps-0 mt-5 pe-5">
                    <img
                        className="logo-small mb-3"
                        src={`${BASE_URL}/storage/${contentInfo?.general.logo}`}
                        alt=""
                    />
                    <p className="font-16 ms-5">
                        {contentInfo?.general.footer_description}
                    </p>
                    <a target="_blank" href={contentInfo?.general.instagram_link} className="text-white">
                    <span className="fa-stack fa-x text-white">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-instagram text-blue fa-stack-1x"></i>
                    </span>
                    </a>
                    <a target="_blank" href={`mailto:${contentInfo?.general.contact_email}`} className="text-white">
                    <span className="fa-stack fa-x text-white">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-envelope text-blue fa-stack-1x"></i>
                    </span>
                    </a>
                    {/* <Link target="_blank" to={contentInfo?.general.phone_number} className="text-white">
                    <span className="fa-stack fa-x text-white">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-map-marker text-blue fa-stack-1x"></i>
                    </span>
                    </Link> */}
                    <a target="_blank" href={contentInfo?.general.phone_number} className="text-white">
                    <span className="fa-stack fa-x text-white">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-phone text-blue fa-stack-1x"></i>
                    </span>
                    </a>
                </div>
                <div className="col-md-4 box ps-0 mt-5 pe-5 pt-5">
                    <h6 className="font-16 font-weight-bold mb-3">
                        {contentInfo?.general.footer_products_title}
                    </h6>
                    {contentInfo?.products.slice(0, 3).map((product) => (
                        <a key={product.id} href={`products/${product.id}`} className="black-color">
                        <h2 className="font-18">
                        {product.name}
                        </h2>
                        </a>
                    ))}
                </div>
                <div className="col-md-4 ps-0 mt-5 pe-5 pt-5">
                    <h6 className="font-16 font-weight-bold mb-3">
                        {" "}
                        {contentInfo?.general.footer_contact_title}
                    </h6>
                    <p> {contentInfo?.general.contact_email}</p>
                </div>
                {/* <div className="col-md-3 ps-0 mt-5 pt-5">
                    <h6 className="font-16 font-weight-bold mb-3">
                        {contentInfo?.general.footer_quick_links_title}
                    </h6>
                    <p>Link 1</p>
                    <p>Link 2</p>
                    <p>Link 3</p>
                    <p>Link 4</p>
                </div> */}
            </div>

            <div className="row text-center me-0 text-white background-blue pt-3 overflow-hidden">
                <div className="col-md-4 box">
                    <span className="copyright quick-links font-14">
                        {contentInfo?.general.footer_copyrights_title}
                    </span>
                </div>
                <div className="col-md-4 box"></div>
                <div className="col-md-4 box">
                    <ul className="list-inline quick-links">
                        <li className="list-inline-item margin-r font-14 pe-5">
                            <a href="/privacy" className="text-white">
                                {contentInfo?.privacyPolicyHeading.heading}
                            </a>
                        </li>
                        <li className="list-inline-item font-14">
                            <a href="/terms" className="text-white">
                                {contentInfo?.termsAndConditionsHeading.heading}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;