import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import ios from "../../../asset/images/icon/ios.png";
import android from "../../../asset/images/icon/android.png";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="footer-2 pt-6 md:pt-12 bg-maincolor">
                    <div className="container px-4 mx-auto">
                        <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
                            <div className="footer-info lg:w-1/3 md:px-4">
                                <p className="text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <div className="mt-4">
                                    <div class="flex sm:justify-center xl:justify-start">
                                        <a href="" class="w-8 h-8 border-2 border-white-900 border-slate-50 rounded-full text-center py-1 text-white-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
                                            <i class="fab fa-facebook"></i>
                                        </a>
                                        <a href="" class="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                        <a href="" class="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
                                            <i class="fab fa-google-plus-g"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-2/3 lg:w-2/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
                                <div className="sm:flex">
                                    <div className="sm:flex-1">
                                        <h6 className="text-base font-medium text-white uppercase mb-2">Link</h6>
                                        <div>
                                            <a href="#" classNameName="text-gray-400 py-1 block hover:underline">Home</a>
                                            <a href="#" className="text-gray-400 py-1 block hover:underline">Pricing</a>
                                            <a href="#" className="text-gray-400 py-1 block hover:underline">Contact Us</a>
                                            <a href="#" className="text-gray-400 py-1 block hover:underline">About</a>
                                            <a href="#" className="text-gray-400 py-1 block hover:underline">Service</a>
                                        </div>
                                    </div>
                                    <div className="sm:flex-1 mt-4 sm:mt-0">
                                        <h6 className="text-base font-medium text-white uppercase mb-2">Support</h6>
                                        <div>
                                            <a href="#" className="text-gray-400 py-1 block hover:underline">Terms & Condition</a>
                                            <a href="#" className="text-gray-400 py-1 block hover:underline">Privacy Policy</a>
                                            <a href="#" className="text-gray-400 py-1 block hover:underline">Faq's</a>
                                            <a href="#" className="text-gray-400 py-1 block hover:underline">How it Works</a>
                                            <a href="#" className="text-gray-400 py-1 block hover:underline">Repoting</a>
                                        </div>
                                    </div>

                                    <div className="sm:flex-1 mt-4 sm:mt-0">
                                        <h6 className="text-base font-medium text-white uppercase mb-2">Contact Us</h6>
                                        <div>
                                            <a href="#" className="text-gray-400 py-1 block hover:underline">+880 123456789</a>
                                            <a href="#" className="text-gray-400 py-1 block hover:underline">info@intellogeek.com</a>
                                        </div>
                                        <h4 classNameName="mt-4">Download App</h4>
                                        <div className="mt-4">
                                            <span className=""><img className="w-25" src={ios} /> <img className='w-25' src={android} /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="border-t bg-maincolordeep mt-4 py-4">
                        <div class="container px-4 mx-auto">

                            <div class="md:flex md:-mx-4 md:items-center">
                                <div class="md:flex-1 md:px-4 text-center md:text-left">
                                    <p class="text-white">Copyright &copy; <strong>2020 IntelloGeek. All Right Reserved.</strong></p>
                                </div>
                                <div class="md:flex-1 md:px-4 text-center md:text-right">
                                    <a href="#" class="py-2 px-4 text-white inline-block hover:underline">Trusted Partner: The Cube</a>
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