import React, { Component, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import MainLogo from "../../../asset/images/logo/main-logo.svg";
import ReactFlagsSelect from "react-flags-select";

function NavBarTop() {
    const [selected, setSelected] = useState("US");
    const onSelect = (code) => setSelected(code);

    const showSelectedLabel = ("Show Selected Label", true);
    const showSecondarySelectedLabel = (
        "Show Secondary Selected Label",
        false
    );

    const selectedSize = ("Selected Size", 20);
    const showOptionLabel = ("Show Option Label", true);
    const showSecondaryOptionLabel = ("Show Secondary Option Label", false);
    const optionsSize = ("Options Size", 56);
    const placeholder = ("Placeholder", "Lang");
    const searchable = ("Searchable", false);
    const alignOptionsToRight = ("Align Options to Right", false);
    const fullWidth = ("Full Width", true);
    const disabled = ("Disabled", false);

    const customLabels = ("Custom Labels", {
        US: { primary: "EN" },
        FR: { primary: "FR" },
        ES: { primary: "ES" },
        IT: { primary: "IT" },
        DE: { primary: "DE" },
    });

    return (
        <Fragment>
            <div className="flex flex-wrap">
                <div className="bg-maincolordeep h-16 w-full">
                    <div className="flex flex-wrap float-right xl:pr-28 xl:pt-3">
                        <ReactFlagsSelect
                            selected={selected}
                            onSelect={onSelect}
                            showSelectedLabel={showSelectedLabel}
                            showSecondarySelectedLabel={showSecondarySelectedLabel}
                            selectedSize={selectedSize}
                            showOptionLabel={showOptionLabel}
                            showSecondaryOptionLabel={showSecondaryOptionLabel}
                            optionsSize={optionsSize}
                            placeholder={placeholder}
                            searchable={searchable}
                            alignOptionsToRight={alignOptionsToRight}
                            fullWidth={fullWidth}
                            disabled={disabled}

                            customLabels={customLabels}
                            countries={["US", "FR", "ES", "IT", "DE"]}
                        />

                        <label class="swap swap-rotate bg-light-version xl:ml-3 xl:w-12 xl:h-11 rounded-sm">
                            <input className="visually-hidden" type="checkbox" />
                            <svg class="swap-off fill-yellow-300 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                            <svg class="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>
                    </div>
                </div>
            </div>


            <nav className="flex flex-wrap top-0 sticky-top items-center justify-between w-full py-4 md:py-0 px-4 text-lg bg-maincolor">
                <div className="h-24">
                    <a href='/'>
                        <img className="h-24 mt-3 ml-24" src={MainLogo} alt="" />
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
                            <button className="outline outline-2 hover:bg-white lg:mt-3 lg:mr-12 float-right h-12 w-52 rounded-3xl ml-auto text-base font-light text-white hover:text-maincolor hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"> <i className="fa fa-graduation-cap mr-1"></i> I want to Teach</button>
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
export default NavBarTop;