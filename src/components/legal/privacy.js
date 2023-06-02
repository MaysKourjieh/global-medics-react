import * as React from "react"
import Layout from "../../components/Layout";
// import { Center } from "../../components/styled";

export default function Privacy() {
    const title = 'Global Medics USA';
    return <>
    <title>{title}</title>
        <Layout>
            <div className="d-flex align-items-center flex-column justify-content-center h-100 pt-4 text-blue" id="about">
        <h1 className="display-5">Privacy Policy</h1>
        <div className="row h-100">
            <main className="col-md-12">
                <div className="container">
                    <div className="row m-0 mb-5">
                        <div className="col-md-12 ps-0 pe-5">
                            <h6 className="display-5 pe-0 mb-3">Our Privacy Policy</h6>
                            <p className="text-grey">This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from www.globalmedicsusa.com (the 
                              “Site”).<br/><br/>
                              Please read this Privacy Policy carefully and share information with us only if you agree with these terms. Your use of this website is subject not only to this 
                              Privacy Statement, but also to this website’s Terms of Use. By accessing and using our website, and by providing us with your information, you agree to the terms 
                              of this Privacy Policy.</p>
                              <h6 className="display-5 pe-0 mb-3">PERSONAL INFORMATION WE COLLECT</h6>
                                <p className="text-grey">
                                  When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and 
                                  some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that 
                                  you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically collected 
                                  information as “Device Information.”<br/><br/>
                                  
                                  We collect Device Information using the following technologies:<br/><br/>
                                  
                                      – “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and 
                                  how to disable cookies, visit http://www.allaboutcookies.org.<br/><br/>
                                  
                                      – “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and 
                                  date/time stamps.<br/><br/>
                                  
                                      – “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.</p>
                                  <h6 className="display-5 pe-0 mb-3">DO NOT TRACK</h6>
                                    <p className="text-grey">Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser</p>
                                      <h6 className="display-5 pe-0 mb-3">DATA SUBJECT ACCESS REQUEST</h6>
                                        <p className="text-grey">To make an access request regarding your data, please email info@globalmedicsusa.com.</p>
                                        <h6 className="display-5 pe-0 mb-3">DO NOT TRACK</h6>
                                    <p className="text-grey">Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser</p>
                                      <h6 className="display-5 pe-0 mb-3">CHANGES</h6>
                                        <p className="text-grey">We may update this privacy policy from time to time to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
                                        <h6 className="display-5 pe-0 mb-3">CONTACT US</h6>
                                        <p className="text-grey">For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at 
                                          info@globalmedicsusa.com or by mail using the details provided below:<br/><br/>
                                          
                                          17735 NE 65th Street, Suite 120, Redmond, WA, 98052, United States</p>
                                      </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

        </Layout>
    </>;
}
