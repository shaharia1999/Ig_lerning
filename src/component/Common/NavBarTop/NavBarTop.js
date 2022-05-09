import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import igLearn from "../../../asset/images/logo/igLearn.png";
import { FaGraduationCap } from "react-icons/fa";

class NavBarTop extends Component {
    render() {
        return (
            <Fragment>
                <div className="bg-maincolordeep h-16 w-full">
                    <button id="language" value='ar' className="bg-white lg:mt-3 lg:mr-12 float-right h-10 w-20 rounded-lg ml-auto p-1 text-base font-medium text-black">EN</button>
                </div>

                <nav className="flex flex-wrap top-0 items-center justify-between w-full py-4 md:py-0 px-4 text-lg bg-maincolor">
                    <div className="h-24">
                        <img className="h-24 mt-3 ml-36" src={igLearn} />
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
                                <Link className="md:p-4 block font-light text-lg text-white" to=""><span className="hover:border-b-4 hover:pb-2 hover:border-white">Pricing</span> <span className="mx-4 font-light text-white text-xl">|</span></Link>
                            </li>
                            <li>
                                <Link className="md:p-4 block font-light text-lg text-white" to="/ig-learn-Pro"><span className="hover:border-b-4 hover:pb-2 hover:border-white">igLearn Pro</span> <span className="mx-4 font-light text-white text-xl">|</span></Link>
                            </li>
                            <li>
                                <Link className="md:p-4 block font-light text-lg text-white" to=""><span className="hover:border-b-4 hover:pb-2 hover:border-white">About Us</span> <span className="mx-4 font-light text-white text-xl">|</span></Link>
                            </li>
                            <li>
                                <button className="outline outline-2 hover:bg-white lg:mt-3 lg:mr-12 float-right h-12 w-52 rounded-3xl ml-auto text-base font-light text-white hover:text-maincolor     hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out"> <i className="fa fa-graduation-cap mr-1"></i> I want to Teach</button>
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