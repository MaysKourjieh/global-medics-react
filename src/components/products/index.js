import * as React from "react";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useSelector } from "react-redux";
import { BASE_URL } from "../../config";

export default function Products() {
  const { id } = useParams();
  const { contentInfo } = useSelector((state) => state.content);
  const product = contentInfo.products.find((product) => product.id == id);

  return (
    <>
      <title>{contentInfo.general.website_title}</title>
      <Layout>
        <div
          className={`d-flex  flex-column h-100 pt-4 text-blue ${
            product.productImages1.length > 0
              ? "align-items-center justify-content-center"
              : ""
          }`}
          id="about"
        >
          <div className="row h-100">
            <main className="col-md-12">
              <div className="container">
                <div className="row m-0 mb-5">
                  {product?.productImages1.length > 0 && (
                    <div className="col-md-6 ps-0 pe-5">
                      {product?.productImages1 ? (
                        <div className="slider-galeria-thumbs">
                          {product?.productImages1.map((image, index) => (
                            <div key={index + 1}>
                              <span>
                                <img src={`${BASE_URL}/storage/${image}`}></img>
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="loading">Loading...</div>
                      )}
                      {product?.productImages1 ? (
                        <div className="slider-galeria">
                          {product?.productImages1.map((image, index) => (
                            <div key={index + 1}>
                              <span>
                                <img src={`${BASE_URL}/storage/${image}`}></img>
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="loading">Loading...</div>
                      )}
                    </div>
                  )}
                  <div className="col-md-6 pe-0 float-end relative">
                    <h3 className="display-3 font-33">{product?.name}</h3>
                    <span
                      className="text-green mb-5 font-16"
                      dangerouslySetInnerHTML={{
                        __html: product?.subtext,
                      }}
                    />
                    <div
                      className="accordion mt-4"
                      id="accordionPanelsStayOpenExample"
                    >
                      <div className="accordion-item mb-3 border-0">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingOne"
                        >
                          <button
                            className="accordion-button font-24"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                          >
                            Description
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="panelsStayOpen-headingOne"
                        >
                          <div
                            className="accordion-body"
                            dangerouslySetInnerHTML={{
                              __html: product?.description,
                            }}
                          />
                        </div>
                      </div>
                      <div className="accordion-item mb-3 border-0">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingTwo"
                        >
                          <button
                            className="accordion-button collapsed font-24"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                          >
                            Supplement Facts
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingTwo"
                        >
                          <div className="accordion-body">
                            <img
                              src={`${BASE_URL}/storage/${product?.supplement_facts}`}
                              alt=""
                            ></img>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item mb-3 border-0">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingThree"
                        >
                          <button
                            className="accordion-button collapsed font-24"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                          >
                            Suggested Use
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree"
                        >
                          <div
                            className="accordion-body"
                            dangerouslySetInnerHTML={{
                              __html: product?.suggested_use,
                            }}
                          />
                        </div>
                      </div>
                      <div className="accordion-item mb-3 border-0">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFour"
                        >
                          <button
                            className="accordion-button collapsed font-24"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFour"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFour"
                          >
                            Resources
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFour"
                        >
                          <div
                            className="accordion-body"
                            dangerouslySetInnerHTML={{
                              __html: product?.resources,
                            }}
                          />
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
    </>
  );
}
