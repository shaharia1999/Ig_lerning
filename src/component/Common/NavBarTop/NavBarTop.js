import React, { Component, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import MainLogo from "../../../asset/images/logo/main-logo.svg";
import ReactFlagsSelect from "react-flags-select";

function NavBarTop() {
    const [selected, setSelected] = useState("");
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
    const placeholder = ("Placeholder","Lang" );
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
                    <div className=" flex flex-wrap float-right xl:pr-28 xl:pt-3">
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