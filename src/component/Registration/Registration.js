import React, { Component, Fragment } from "react";
import LoginImg from "../../asset/images/banner/login.png";
import { Link } from "react-router-dom";
import "../../asset/css/login.css";
import { FaFacebookSquare, FaGoogle, FaTwitter } from "react-icons/fa";

class Registration extends Component {
    render() {
        return (
            <Fragment>
                <section className="md:h-screen bg-login-bg-color">
                    <div className="container h-full lg:pl-32 lg:pr-32">
                        <div className="flex justify-center items-center flex-wrap text-gray-800">
                            <div className="xl:w-12/12 lg:w-12/12 mt-10">
                                <div className="block bg-white shadow-lg">
                                    <div className="lg:flex lg:flex-wrap">

                                        <div className="lg:w-4/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                                            <div className="text-white">
                                                <img className="" src={LoginImg} />
                                            </div>
                                        </div>

                                        <div className="lg:w-8/12 px-4 md:px-0">
                                            <div className="md:p-8 md:mx-6">
                                                <div className="text-center">
                                                    <h4 className="text-4xl font-semibold lg:mt-16 mb-12 pb-1">Login</h4>
                                                </div>

                                               <form class="space-y-5 lg:mt-8">
                                                    <div class="mb-4 relative">
                                                        <input id="email" class="rounded px-3 input active:outline-none pt-5 block w-full bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" type="text" autofocus />
                                                        <label for="email" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-CourseTitle text-base mt-2 cursor-text">Email or Phone</label>
                                                    </div>
                                                    <div class="mb-4 relative">
                                                        <input id="password" class="w-full rounded px-3 pt-5 focus:outline-none active:outline-none input block bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" type="password" />
                                                        <label for="password" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text">Password</label>
                                                    </div>

                                                    <div class="flex justify-between items-center mb-6">
                                                        <div class="form-group form-check">
                                                            <input type="checkbox" class="default:ring-8" />
                                                            <label class="form-check-label inline-block font-light lg:text-sm mx-2" for="inlineCheckbox1"> keep me logged in</label>
                                                        </div>
                                                        <a class="font-light lg:text-sm hover:underline p-2 float-right" href="#">Forgot password?</a>
                                                    </div>

                                                    <div  className="w-full mt-8 flex flex-auto lg:w-full image-center bg-maincolor rounded-sm lg:pt-4 lg:pb-4">
                                                        <Link to="#"><span className="text-lg font-normal leading-tight text-white lg:pl-24 lg:pr-24 mx-2 h-11">LOGIN</span></Link>
                                                    </div>
                                                </form>


                        

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}
export default Registration;