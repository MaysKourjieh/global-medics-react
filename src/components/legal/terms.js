import * as React from "react";
import Layout from "../../components/Layout";
import { Center } from "../../components/styled";
import { useSelector } from "react-redux";

export default function Terms() {
    const { contentInfo } = useSelector((state) => state.content);
    const title = "Global Medics USA";
    return (
        <>
            <title>{title}</title>
            <Layout>
                <div
                    className="d-flex align-items-center flex-column justify-content-center h-100 pt-4 text-blue"
                    id="about"
                >
                    <h1 className="display-5">
                        {contentInfo.termsAndConditionsHeading.heading}
                    </h1>
                    <div className="row h-100">
                        <main className="col-md-12">
                            <div className="container">
                                <div className="row m-0 mb-5">
                                    <div className="col-md-12 ps-0 pe-5">
                                        {contentInfo?.termsAndConditions.map(
                                            (term) => (
                                                <>
                                                    <h6 className="display-5 pe-0 mb-3">
                                                        {term.title}
                                                    </h6>
                                                    <p
                                                        className="text-grey"
                                                        dangerouslySetInnerHTML={{
                                                            __html: term.description,
                                                        }}
                                                    />
                                                </>
                                            )
                                        )}
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
