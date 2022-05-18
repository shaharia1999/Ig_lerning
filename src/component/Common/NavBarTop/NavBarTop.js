import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import igLearn from "../../../asset/images/logo/igLearn.png";
import Usa from "../../../asset/images/language-flag/usa.png";
import Germany from "../../../asset/images/language-flag/germany.png";
import France from "../../../asset/images/language-flag/franch.png";
import Spain from "../../../asset/images/language-flag/spain.svg";
import Italy from "../../../asset/images/language-flag/italy.svg";

class NavBarTop extends Component {
    render() {
        return (
            <Fragment>
                <div className="bg-maincolordeep h-16 w-full">

                    <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="float-right xl:mr-16 xl:mt-3 text-sectionTitleColor bg-BgLoveIcon focus:outline-none font-medium rounded-md text-sm xl:px-6 xl:py-2.5 text-center inline-flex items-center" type="button"> <img className="w-4 h-3 mr-2" src={Usa} /> EN <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                    <div id="dropdown" className="z-10 hidden bg-white divide-y rounded shadow w-28">
                        <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownDefault">
                            <li className="w-full basis-auto">
                                <a href="#" className="image-center px-3 py-2 text-center hover:bg-gray-100"> <img className="w-5 h-4 mr-3 d-flex" src={Usa} /> EN </a>
                            </li>

                            <li>
                                <a href="#" className="block px-1 py-2 hover:bg-gray-100"> <img className="w-4 h-3 mr-2" src={Spain} /> ES </a>
                            </li>

                            <li>
                                <a href="#" className="block px-1 py-2 hover:bg-gray-100"> <img className="w-4 h-3 mr-2" src={Germany} /> DE </a>
                            </li>

                            <li>
                                <a href="#" className="block px-1 py-2 hover:bg-gray-100"> <img className="w-4 h-3 mr-2" src={Italy} /> IT </a>
                            </li>

                            <li>
                                <a href="#" className="block px-1 py-2 hover:bg-gray-100"> <img className="w-4 h-3 mr-2" src={France} /> FR </a>
                            </li>
                        </ul>
                    </div>

                    {/* 
                    <select id="countries" class="float-right xl:mr-16 xl:mt-3 text-sectionTitleColor bg-BgLoveIcon focus:outline-none font-medium rounded-md text-sm xl:px-6 xl:py-2.5 text-center inline-flex items-center">
                        
                        <option value="EN"><img className="w-5 h-4 mr-3 d-flex" src={Usa} /> EN</option>
                        <option value="ES"><img className="w-4 h-3 mr-2" src={Spain} /> ES </option>
                        <option value="DE"><img className="w-4 h-3 mr-2" src={Germany} /> DE </option>
                        <option value="IT"><img className="w-4 h-3 mr-2" src={Italy} /> IT</option>
                        <option value="FR"><img className="w-4 h-3 mr-2" src={France} /> FR</option>
                    </select> */}


        

                </div>

                <nav className="flex flex-wrap top-0 sticky-top items-center justify-between w-full py-4 md:py-0 px-4 text-lg bg-maincolor">
                    <div className="h-24">
                        <a href='/'>
                            <img className="h-24 mt-3 ml-36" src={igLearn} alt=""/>
                        </a>
                    </div>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="menu-button"
                        className="h-6 w-6 cursor-pointer md:hidden block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>


                    <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                        <ul className="text-base text-gray-700 md:flex md:justify-between md:pt-0">
                            <li>
                                <Link className="md:p-4 block font-light text-lg text-white " to="/"><span className="hover:border-b-4 hover:pb-2 hover:border-white">Home</span> <span className="mx-4 font-light text-white text-xl">|</span></Link>
                            </li>
                            <li>
                                <Link className="md:p-4 block font-light text-lg text-white" to="/price"><span className="hover:border-b-4 hover:pb-2 hover:border-white">Pricing</span> <span className="mx-4 font-light text-white text-xl">|</span></Link>
                            </li>
                            <li>
                                <Link className="md:p-4 block font-light text-lg text-white" to="/ig-learn-Pro"><span className="hover:border-b-4 hover:pb-2 hover:border-white">igLearn Pro</span> <span className="mx-4 font-light text-white text-xl">|</span></Link>
                            </li>
                            <li>
                                <Link className="md:p-4 block font-light text-lg text-white" to="/about"><span className="hover:border-b-4 hover:pb-2 hover:border-white">About Us</span> <span className="mx-4 font-light text-white text-xl">|</span></Link>
                            </li>
                            <li>
                                <button className="outline outline-2 hover:bg-white lg:mt-3 lg:mr-12 float-right h-12 w-52 rounded-3xl ml-auto text-base font-light text-white hover:text-maincolor hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"> <i className="fa fa-graduation-cap mr-1"></i> I want to Teach</button>
                            </li>
                            <li>
                                <button className="outline outline-2 hover:bg-white lg:mt-3 lg:mr-12 float-right h-12 w-52 rounded-3xl ml-auto text-base font-light text-white hover:text-maincolor"> <i className="fa fa-book-reader mr-1"></i> I want to Learn</button>
                            </li>
                        </ul>
                    </div>
                </nav>


            </Fragment>
        );
    }
}

export default NavBarTop;