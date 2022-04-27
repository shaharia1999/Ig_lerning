import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class ContactUs extends Component {
    render() {
        return (
            <Fragment>
                <div className="ContactBanner">
                    <div className="container">
                        <div class="flex flex-auto">
                            <div class="lg:basis-1/12">

                            </div>

                            <div class="lg:basis-4/12 lg:pl-12 lg:pr-6">
                                <h2 className="text-sectionTitleColor lg:font-semibold lg:text-5xl lg:mt-40 ">Get in Touch</h2>
                                <h2 className="text-client-section-des lg:font-normal lg:text-base lg:mb-6 lg:mt-10">Fill in the form and we’ll analyse your website and get back to you with 100% specific recommendations on how to improve it back to you with 100% specific</h2>
                            </div>

                            <div class="lg:basis-6/12 lg:p-2">
                                <div class="bg-white rounded-xl shadow-client border-none lg:p-12 w-auto lg:mt-10">
                                    <h2 className="text-sectionTitleColor lg:font-semibold lg:text-2xl text-center lg:mb-6">We would like to hear from you</h2>
                                    <h2 className="text-client-section-des lg:font-normal lg:text-sm text-center lg:mb-6">Fill in the form and we’ll analyse your website and get back to you with 100% specific recommendations on how to improve it</h2>

                                    <form class="w-full">
                                        <div class="flex flex-wrap -mx-3 mb-6">
                                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input class="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" id="grid-first-name" type="text" placeholder="Name *" />
                                            </div>

                                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input class="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" id="grid-first-name" type="text" placeholder="Surname *" />
                                            </div>

                                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input class="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" id="grid-first-name" type="text" placeholder="Phone Number *" />
                                            </div>


                                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input class="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" id="grid-first-name" type="text" placeholder="Job Title *" />
                                            </div>


                                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input class="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" id="grid-first-name" type="text" placeholder="Professional Email *" />
                                            </div>

                                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input class="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" id="grid-first-name" type="text" placeholder="Company Name *" />
                                            </div>


                                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input class="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" id="grid-first-name" type="text" placeholder="Company Size *" />
                                            </div>

                                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input class="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" id="grid-first-name" type="text" placeholder="Number of Learner *" />
                                            </div>

                                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <div class="relative">
                                                    <select class="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" id="grid-state">
                                                        <option className="text-CourseTitle selected">Name of Country</option>
                                                        <option>Missouri</option>
                                                        <option>Texas</option>
                                                    </select>
                                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-CourseTitle">
                                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <div class="relative">
                                                    <select class="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" id="grid-state">
                                                        <option>City of Company</option>
                                                        <option>Missouri</option>
                                                        <option>Texas</option>
                                                    </select>
                                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-CourseTitle">
                                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="lg:w-full md:w-full px-3 mb-6 md:mb-0">
                                                <textarea class="resize-y appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" placeholder="Message *"></textarea>
                                            </div>

                                            <h2 className="text-client-section-des lg:font-normal lg:text-xs text-center lg:mb-6 mt-4">Fill in the form and we’ll analyse your website and get back to you with 100% specific recommendations on how to improve it</h2>

                                            <div className="mt-8 flex flex-auto image-center">
                                                <Link to="/"><span className="text-lg font-normal leading-tight bg-maincolor text-white lg:pl-24 lg:pr-24 lg:pt-4 lg:pb-4 rounded-sm mx-2 h-11">SUBMIT</span></Link>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="lg:basis-1/12">

                            </div>


                        </div>
                    </div>
                </div >
            </Fragment >
        );
    }
}
export default ContactUs;