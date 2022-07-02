import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin, FaTwitter, } from "react-icons/fa";
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

                        <div class="container mt-5">
                            <div class="m-2 rounded overflow-hidden">

                                <div class="group outline-none accordion-section" tabindex="1">
                                    <div class="group bg-maincolor flex justify-between px-0 py-3 items-center border-b-2 border-gray-300 text-white transition ease duration-500 cursor-pointer pr-10 relative">
                                        <div class="group-focus:text-white text-lg transition ease duration-500">
                                            Links
                                        </div>
                                        <div class="h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                                            <i class="fas fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div class="group-focus:max-h-screen max-h-0 bg-maincolor px-1 overflow-hidden ease duration-500">
                                        <p class="pl-0 pt-2 pb-2 text-gray-200 text-sm text-justify">+012 345678790</p>
                                        <p class="pl-0 pt-0 pb-2 text-gray-200 text-sm text-justify">info@intellogeek.com</p>
                                    </div>
                                </div>

                                <div class="group outline-none accordion-section" tabindex="2">
                                    <div class="group bg-maincolor flex justify-between px-0 py-3 items-center border-b-2 border-gray-300 text-white transition ease duration-500 cursor-pointer pr-10 relative">
                                        <div class="group-focus:text-white text-lg transition ease duration-500">
                                            Support
                                        </div>
                                        <div class="h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                                            <i class="fas fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div class="group-focus:max-h-screen max-h-0 bg-maincolor px-1 overflow-hidden ease duration-500">
                                        <p class="pl-0 pt-2 pb-2 text-gray-200 text-sm text-justify">+012 345678790</p>
                                        <p class="pl-0 pt-0 pb-2 text-gray-200 text-sm text-justify">info@intellogeek.com</p>
                                    </div>
                                </div>

                                <div class="group outline-none accordion-section" tabindex="3">
                                    <div class="group bg-maincolor flex justify-between px-0 py-3 items-center border-b-2 border-gray-300 text-white transition ease duration-500 cursor-pointer pr-10 relative">
                                        <div class="group-focus:text-white text-lg transition ease duration-500">
                                            Contact us
                                        </div>
                                        <div class="h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                                            <i class="fas fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div class="group-focus:max-h-screen max-h-0 bg-maincolor px-1 overflow-hidden ease duration-500">
                                        <p class="pl-0 pt-2 pb-2 text-gray-200 text-sm text-justify">+012 345678790</p>
                                        <p class="pl-0 pt-0 pb-2 text-gray-200 text-sm text-justify">info@intellogeek.com</p>
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