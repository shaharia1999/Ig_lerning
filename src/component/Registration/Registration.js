import React, {Component, Fragment} from "react";
import LoginImg from "../../asset/images/banner/login.png";
import {Link} from "react-router-dom";
import "../../asset/css/login.css";

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

                                        <div
                                            className="lg:w-4/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                                            <div className="text-white">
                                                <img className="" src={LoginImg}/>
                                            </div>
                                        </div>

                                        <div className="lg:w-8/12 px-4 md:px-0">
                                            <div className="md:p-8 md:mx-6">
                                                <div className="text-center">
                                                    <h4 className="text-4xl font-semibold lg:mt-16 mb-12 pb-1">Registration</h4>
                                                </div>

                                                <form className="space-y-5 lg:mt-8">
                                                    <div className="flex flex-auto">
                                                        <div className="w-1/2 mb-4 relative px-1">
                                                            <input id="name"
                                                                   className="rounded px-4 input active:outline-none pt-5 block w-full bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                                   type="text" autoFocus/>
                                                            <label htmlFor="name"
                                                                   className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-CourseTitle text-base mt-2 cursor-text">Name</label>
                                                        </div>
                                                        <div className="w-1/2 mb-4 relative px-1">
                                                            <input id="name"
                                                                   className="rounded px-4 input active:outline-none pt-5 block w-full bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                                   type="text" autoFocus/>
                                                            <label htmlFor="name"
                                                                   className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-CourseTitle text-base mt-2 cursor-text">Surename</label>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-auto">
                                                        <div className="w-1/2 mb-4 relative px-1">
                                                            <input id="name"
                                                                   className="rounded px-4 input active:outline-none pt-5 block w-full bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                                   type="email" autoFocus/>
                                                            <label htmlFor="name"
                                                                   className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-CourseTitle text-base mt-2 cursor-text">Email</label>
                                                        </div>
                                                        <div className="w-1/2 mb-4 relative px-1">
                                                            <input id="name"
                                                                   className="rounded px-4 input active:outline-none pt-5 block w-full bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                                   type="date" autoFocus/>
                                                            <label htmlFor="name"
                                                                   className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-CourseTitle text-base mt-2 cursor-text">Birthday</label>
                                                        </div>
                                                    </div>


                                                    <div className="flex flex-auto">
                                                        <div className="w-1/2 mb-4 relative px-1">
                                                            <select
                                                                className="appearance-none block w-full bg-BgLoveIcon border-none py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                                id="grid-state">
                                                                <option className="text-CourseTitle selected">Country
                                                                </option>
                                                                <option>Missouri</option>
                                                                <option>Texas</option>
                                                            </select>
                                                            <div
                                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-CourseTitle">
                                                                <svg className="fill-current h-4 w-4"
                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 20 20">
                                                                    <path
                                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="w-1/2 mb-4 relative px-1">
                                                            <select
                                                                className="appearance-none block w-full bg-BgLoveIcon border-none py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                                id="grid-state">
                                                                <option className="text-CourseTitle selected">City
                                                                </option>
                                                                <option>Missouri</option>
                                                                <option>Texas</option>
                                                            </select>
                                                            <div
                                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-CourseTitle">
                                                                <svg className="fill-current h-4 w-4"
                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 20 20">
                                                                    <path
                                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="flex flex-auto">
                                                        <div className="w-1/2 mb-4 relative px-1">
                                                            <input id="password"
                                                                   className="w-full rounded px-3 pt-5 focus:outline-none active:outline-none input block bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                                   type="password"/>
                                                            <label htmlFor="password"
                                                                   className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text">Password</label>
                                                        </div>
                                                        <div className="w-1/2 mb-4 relative px-1">
                                                            <input id="password"
                                                                   className="w-full rounded px-3 pt-5 focus:outline-none active:outline-none input block bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                                   type="password"/>
                                                            <label htmlFor="password"
                                                                   className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text">Confirm
                                                                Password</label>
                                                        </div>
                                                    </div>


                                                    <div className="flex justify-between items-center mb-6">
                                                        <div className="form-group form-check">
                                                            <input type="checkbox" className="default:ring-8"/>
                                                            <label
                                                                className="form-check-label inline-block font-light lg:text-sm mx-2"
                                                                htmlFor="inlineCheckbox1"> Accept Terms &
                                                                Condition</label>
                                                        </div>
                                                        <div className="form-group form-check">
                                                            <input type="checkbox" className="default:ring-8"/>
                                                            <label
                                                                className="form-check-label inline-block font-light lg:text-sm mx-2"
                                                                htmlFor="inlineCheckbox1"> Receive marketing email
                                                                update</label>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="w-full mt-8 flex flex-auto lg:w-full image-center bg-maincolor rounded-sm lg:pt-4 lg:pb-4">
                                                        <Link to="#"><span
                                                            className="text-lg font-normal leading-tight text-white lg:pl-24 lg:pr-24 mx-2 h-11">REGISTER</span></Link>
                                                    </div>
                                                </form>


                                                <div className="mt-8 text-center">
                                                    <div className="lg:mt-14">
                                                        <span className="font-normal text-black lg:text-base"> Already have an account? <span
                                                            className="hover:underline">Sign In</span></span>
                                                    </div>
                                                </div>


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