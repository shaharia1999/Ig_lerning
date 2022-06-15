import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { FaChevronUp, FaFacebookSquare, FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import ios from "../../../asset/images/icon/ios.png";
import android from "../../../asset/images/icon/android.png";
import MainLogo from "../../../asset/images/logo/logo.png";

function Footer() {

    const userTheme = localStorage.getItem("theme");
    if (userTheme === null) {
        localStorage.setItem("theme", "light");
    }
    const ScrollTop = () => {
        window.scrollTo(0, 0);
    }

    if (userTheme === "dark") {
        return (
            <Fragment>
                <div className="footer-2 pt-6 md:pt-12 footer-dark-svg">
                    <div className="container px-4 mx-auto">
                        <div className="text-center">
                            <button onClick={ScrollTop} className="lg:p-10 bg-btngreen btn-dark-center rounded-full text-3xl font-extrabold mt-9"><FaChevronUp /></button>
                        </div>

                        <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
                            <div className="footer-info lg:w-1/3 md:px-4 margin-top-div">
                                <img className="h-12 w-12 box-shadow-footer-logo" src={MainLogo} alt="" />
                                <p className="footer-des-long mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <ul className="flex sm:justify-center xl:justify-start mt-2">
                                    <button className="lg:p-2 mx-2 bg-maincolor dark:bg-dark-color2 social-icons rounded-full text-lg font-semibold mt-9"><FaFacebookSquare /></button>
                                    <button className="lg:p-2 mx-2 bg-maincolor dark:bg-dark-color2 social-icons rounded-full text-lg font-semibold mt-9"><FaTwitter /></button>
                                    <button className="lg:p-2 mx-2 bg-maincolor dark:bg-dark-color2 social-icons rounded-full text-lg font-semibold mt-9"><FaLinkedin /></button>
                                </ul>
                            </div>

                            <div className="md:w-2/3 lg:w-2/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
                                <div className="sm:flex margin-top-div">
                                    <div className="sm:flex-1">
                                        <h6 className="text-lg font-medium footer-title mb-2">Links</h6>
                                        <hr className="hr-footer-color w-8 border-1 mt-4" />
                                        <hr className="hr-footer-color w-48 border-1 mb-2" />
                                        <div>
                                            <a href="#" className="footer-des block">Home</a>
                                            <a href="#" className="footer-des block">Pricing</a>
                                            <Link to="/contact-us"><span className="footer-des block">Contact Us</span></Link>
                                            <Link to="/about"><span className="footer-des block">About</span></Link>
                                        </div>
                                    </div>
                                    <div className="sm:flex-1 mt-4 sm:mt-0">
                                        <h6 className="text-lg font-medium footer-title mb-2">Support</h6>
                                        <hr className="hr-footer-color w-8 border-1 mt-4" />
                                        <hr className="hr-footer-color w-48 border-1 mb-2" />
                                        <div>
                                            <a href="#" className="footer-des block">Terms & Condition</a>
                                            <a href="#" className="footer-des block">Privacy Policy</a>
                                            <a href="#" className="footer-des block">Faq's</a>
                                            <a href="#" className="footer-des block">How it Works</a>
                                            <a href="#" className="footer-des block">Repoting</a>
                                        </div>
                                    </div>

                                    <div className="sm:flex-1 mt-4 sm:mt-0">
                                        <h6 className="text-lg font-medium footer-title mb-2">Contact Us</h6>
                                        <hr className="hr-footer-color w-8 border-1 mt-4" />
                                        <hr className="hr-footer-color w-48 border-1 mb-2" />
                                        <div>
                                            <a href="#" className="footer-des block">+880 123456789</a>
                                            <a href="#" className="footer-des block">info@intellogeek.com</a>
                                        </div>
                                        <h4 className="text-lg font-medium footer-title mt-4 mb-2">Download App</h4>

                                        <div className="flex flex-row">
                                            <div className="basis-1/2 mt-4">
                                                <span><img className="lg:h-11 lg:w-32" src={ios} /></span>
                                            </div>
                                            <div className="basis-1/2 mt-4">
                                                <span><img className="lg:h-11 lg:w-32" src={android} alt=""/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
    else if (userTheme === "light") {
        return (
            <Fragment>
                <div className="footer-2 pt-6 md:pt-12 footer-svg">
                    <div className="container px-4 mx-auto">
                        <div className="text-center">
                            <button onClick={ScrollTop} className="lg:p-10 bg-btngreen btn-center
                             rounded-full text-3xl font-extrabold mt-9"><FaChevronUp /></button>
                        </div>

                        <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
                            <div className="footer-info lg:w-1/3 md:px-4 margin-top-div">
                                <img className="h-12 w-12 box-shadow-footer-logo" src={MainLogo} alt="" />
                                <p className="footer-des-long mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <ul className="flex sm:justify-center xl:justify-start mt-2">
                                    <button className="lg:p-2 mx-2 bg-maincolor social-icons rounded-full text-lg font-semibold mt-9"><FaFacebookSquare /></button>
                                    <button className="lg:p-2 mx-2 bg-maincolor social-icons rounded-full text-lg font-semibold mt-9"><FaTwitter /></button>
                                    <button className="lg:p-2 mx-2 bg-maincolor social-icons rounded-full text-lg font-semibold mt-9"><FaLinkedin /></button>
                                </ul>
                            </div>

                            <div className="md:w-2/3 lg:w-2/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
                                <div className="sm:flex margin-top-div">
                                    <div className="sm:flex-1">
                                        <h6 className="text-lg font-medium footer-title mb-2">Links</h6>
                                        <hr className="hr-footer-color w-8 border-1 mt-4" />
                                        <hr className="hr-footer-color w-48 border-1 mb-2" />
                                        <div>
                                            <a href="#" className="footer-des block">Home</a>
                                            <a href="#" className="footer-des block">Pricing</a>
                                            <Link to="/contact-us"><span className="footer-des block">Contact Us</span></Link>
                                            <Link to="/about"><span className="footer-des block">About</span></Link>
                                        </div>
                                    </div>
                                    <div className="sm:flex-1 mt-4 sm:mt-0">
                                        <h6 className="text-lg font-medium footer-title mb-2">Support</h6>
                                        <hr className="hr-footer-color w-8 border-1 mt-4" />
                                        <hr className="hr-footer-color w-48 border-1 mb-2" />
                                        <div>
                                            <a href="#" className="footer-des block">Terms & Condition</a>
                                            <a href="#" className="footer-des block">Privacy Policy</a>
                                            <a href="#" className="footer-des block">Faq's</a>
                                            <a href="#" className="footer-des block">How it Works</a>
                                            <a href="#" className="footer-des block">Repoting</a>
                                        </div>
                                    </div>

                                    <div className="sm:flex-1 mt-4 sm:mt-0">
                                        <h6 className="text-lg font-medium footer-title mb-2">Contact Us</h6>
                                        <hr className="hr-footer-color w-8 border-1 mt-4" />
                                        <hr className="hr-footer-color w-48 border-1 mb-2" />
                                        <div>
                                            <a href="#" className="footer-des block">+880 123456789</a>
                                            <a href="#" className="footer-des block">info@intellogeek.com</a>
                                        </div>
                                        <h4 className="text-lg font-medium footer-title mt-4 mb-2">Download App</h4>

                                        <div className="flex flex-row">
                                            <div className="basis-1/2 mt-4">
                                                <span><img className="lg:h-11 lg:w-32" src={ios} /></span>
                                            </div>
                                            <div className="basis-1/2 mt-4">
                                                <span><img className="lg:h-11 lg:w-32" src={android} /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Footer;