import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { FaChevronUp, FaFacebookSquare, FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import ios from "../../../asset/images/icon/ios.png";
import android from "../../../asset/images/icon/android.png";
import MainLogo from "../../../asset/images/logo/logo.png";
import FooterMobileImg from "../../../asset/images/banner/MobileFooter.svg";

function FooterMobile() {
    return (
        <Fragment>
            <div className="xl:pt-6 md:pt-12 pt-6" style={{ backgroundImage: `url(${FooterMobileImg}`, width: "100%", height: "100%" }}>
                <div className="container px-4 mx-auto">

                    <div className="flex flex-wrap p-2">
                        <div className="w-full justify-center px-4">
                            <div className="justify-center flex">
                                <img className="h-12 w-12 mt-12 flex justify-center text-center" src={MainLogo} alt="" />
                            </div>

                            <p className="mt-5 text-white text-base font-light text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <ul className="flex mt-0 justify-center">
                                <button className="p-2 mx-2 bg-maincolor social-icons rounded-full text-sm font-semibold mt-5"><FaFacebookSquare /></button>
                                <button className="p-2 mx-2 bg-maincolor social-icons rounded-full text-sm font-semibold mt-5"><FaTwitter /></button>
                                <button className="p-2 mx-2 bg-maincolor social-icons rounded-full text-sm font-semibold mt-5"><FaLinkedin /></button>
                            </ul>
                        </div>

                        <div className="w-full mt-8 mb-8">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-maincolor border border-gray-200">
                                    <h2 class="accordion-header mb-0" id="flush-headingOne">
                                        <button class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-white font-semibold text-left bg-maincolor border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                            aria-expanded="false" aria-controls="flush-collapseOne">
                                            Links
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse border-0 collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body py-4 px-5">
                                            <h6 className="text-base text-white font-normal">+880 123456789</h6>
                                            <h6 className="text-base text-white font-normal">info@intellogeek.com</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item border-l-0 border-r-0 rounded-none bg-maincolor border border-gray-200">
                                    <h2 class="accordion-header mb-0" id="flush-headingTwo">
                                        <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-white font-semibold text-left bg-maincolor border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Support
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                                        data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body py-4 px-5">
                                            <h6 className="text-base text-white font-normal">+880 123456789</h6>
                                            <h6 className="text-base text-white font-normal">info@intellogeek.com</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-maincolor border border-gray-200">
                                    <h2 class="accordion-header mb-0" id="flush-headingThree">
                                        <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-white font-semibold text-left bg-maincolor border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                            aria-expanded="false" aria-controls="flush-collapseThree">
                                            Contact us
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                                        data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body py-4 px-5">
                                            <h6 className="text-base text-white font-normal">+880 123456789</h6>
                                            <h6 className="text-base text-white font-normal">info@intellogeek.com</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="w-full mt-8 mb-8">
                            <h4 className="text-xl font-semibold text-white text-center mt-2 mb-2">Download App</h4>
                            <div className="flex flex-wrap">
                                <div className="w-1/2 flex justify-end mt-4 px-1">
                                    <span><img className="h-10 w-32" src={ios} alt="" /></span>
                                </div>
                                <div className="w-1/2 flex justify-start mt-4 px-1">
                                    <span><img className="h-10 w-32" src={android} alt="" /></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}

export default FooterMobile;