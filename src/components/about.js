import * as React from "react";

// import styled from "styled-components"
import Layout from "../components/Layout";
import aboutImage from "../images/about-image.png";
import aboutMission from "../images/about_mission.png";
import aboutCompany from "../images/about-company.png";
import { useSelector } from "react-redux";

// import styled, { ThemeProvider } from '';

const About = () => {
    const { contentInfo } = useSelector((state) => state.content);
    const title = "Global Medics USA";
    return (
        <>
            <title>{title}</title>
            <Layout>
                <div
                    className="d-flex align-items-center position-relative flex-column about-background font_color justify-content-center h-100"
                    id="slider"
                >
                    <h4
                        className="display-5 text-center font-24"
                        dangerouslySetInnerHTML={{
                            __html: contentInfo.about.hero_description,
                        }}
                    />
                    <p className="text-blue explore p-2 ps-4 pe-4">
                        {contentInfo.about.hero_heading}
                    </p>
                    <div
                        className="row top-position position-absolute text-center me-0 h-100"
                        id="footer"
                    >
                        {contentInfo.metricCards.map((metric) => (
                            <div className="text-center rounded number-rectangle shadow box ps-5 pe-5 pt-4 pb-2 me-5">
                                <span className="font-24 text-blue font-weight-bold">
                                    {metric.value}
                                </span>{" "}
                                <p>{metric.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="d-flex align-items-center flex-column justify-content-center h-100 pt-4 text-blue background-color"
                    id="about"
                >
                    <div className="row h-100">
                        <main className="col-md-12">
                            <div className="container">
                                <div className="row m-0 mb-5">
                                    <div className="col-md-6 pe-0 float-end relative">
                                        <div className="about-circle pe-0 shadow-lg rounded rounded-circle"></div>
                                        <img
                                            className="about-image"
                                            src={aboutImage}
                                        />
                                    </div>
                                    <div className="col-md-6 ps-0 pe-5">
                                        <h4 className="display-5 pe-0 mb-5 pt-5">
                                            {contentInfo.about.section_1_title}
                                        </h4>
                                        <p className="text-grey">
                                            {
                                                contentInfo.about
                                                    .section_1_description
                                            }
                                        </p>
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
                    <div className="row h-100">
                        <main className="col-md-12">
                            <div className="container">
                                <div className="row m-0 mb-5 ">
                                    <div className="col-md-6 ps-0 pe-5">
                                        <h4 className="display-5 pe-0 mb-5 pt-5">
                                            {contentInfo.about.section_2_title}
                                        </h4>
                                        <p className="text-grey">
                                            {
                                                contentInfo.about
                                                    .section_2_description
                                            }
                                        </p>
                                    </div>
                                    <div className="col-md-6 pe-0 float-end relative about_mission">
                                        <div className="about-rectangle pe-0 "></div>
                                        <img
                                            className="about-mission"
                                            src={aboutMission}
                                        />
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div
                    className="d-flex align-items-center flex-column justify-content-center h-100 pt-4 text-blue background-color"
                    id="about"
                >
                    <div className="row h-100">
                        <main className="col-md-12">
                            <div className="container">
                                <div className="row m-0 mb-5">
                                    <div className="col-md-6 pe-0 float-end relative">
                                        <div className="about-circle pe-0 shadow-lg rounded rounded-circle"></div>
                                        <img
                                            className="about-image"
                                            src={aboutCompany}
                                        />
                                    </div>
                                    <div className="col-md-6 ps-0 pe-5">
                                        <h4 className="display-5 pe-0 mb-5 pt-5">
                                            {contentInfo.about.section_3_title}
                                        </h4>
                                        <p className="text-grey">
                                            {
                                                contentInfo.about
                                                    .section_3_description
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default About;
