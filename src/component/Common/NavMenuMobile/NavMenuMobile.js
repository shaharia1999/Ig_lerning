import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../../asset/css/navMenuMobile.css';
import Android from "../../../asset/images/icon/android.png";
import IOS from "../../../asset/images/icon/ios.png";
import BlackMainLogo from "../../../asset/images/logo/black-iglearn-main-logo.svg";
import { GrClose } from "react-icons/gr";
import BarChart from "../../../asset/images/nav-drawer-icon/bar-chart.svg";
import Cloud from "../../../asset/images/nav-drawer-icon/cloud.svg";
import CyberSecurity from "../../../asset/images/nav-drawer-icon/cyber-security.svg";
import MegaPhone from "../../../asset/images/nav-drawer-icon/megaphone.svg";
import PaintBoard from "../../../asset/images/nav-drawer-icon/paint-board-and-brush.svg";
import Programming from "../../../asset/images/nav-drawer-icon/programming.svg";
import Project from "../../../asset/images/nav-drawer-icon/project.svg";
import VideoPlayer from "../../../asset/images/nav-drawer-icon/video-player.svg";
import Whistle from "../../../asset/images/nav-drawer-icon/whistle.svg";
import NavIcon from "../../../asset/images/nav-drawer-icon/icon_menu.svg";
import IgLearnFullLogo from "../../../asset/images/logo/igLearn_fullLogo.svg";
import SearchIcon from "../../../asset/images/nav-drawer-icon/search-icon.svg";
import CartIcon from "../../../asset/images/nav-drawer-icon/cart-icon.svg";
import ReactFlagsSelect from "react-flags-select";
import MoonImg from "../../../asset/images/icon/moon.svg";
import SunImg from "../../../asset/images/icon/sun.svg";
import StudentImg from '../../../asset/images/student-bought/student-img.png';
import Bag from '../../../asset/images/nav-menu-dropdown/Bag.svg';
import Chat from '../../../asset/images/nav-menu-dropdown/Chat.svg';
import Graph from '../../../asset/images/nav-menu-dropdown/Graph.svg';
import Home from '../../../asset/images/nav-menu-dropdown/Home.svg';
import Notification from '../../../asset/images/nav-menu-dropdown/Notification.svg';
import Setting from '../../../asset/images/nav-menu-dropdown/Setting.svg';
import Wallet from '../../../asset/images/nav-menu-dropdown/Wallet.svg';
import Logout from '../../../asset/images/nav-menu-dropdown/power-off.png';

function NavMenuMobile() {
    const [SideNavState, setSideNavState] = useState("sideNavClose");
    const [ContentOverState, setContentOverState] = useState("ContentOverlayClose");
    const [homeRedirect, setHomeRedirect] = useState(false);

    const user_data = JSON.parse(localStorage.getItem('user_data'));
    var user_email = null;
    if (user_data == null) {
        user_email = null;
    }
    else {
        user_email = user_data['email'];
    }

    const onLogout = () => {
        localStorage.removeItem('user_data');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('access_token');
        localStorage.removeItem('keep_login');
        setHomeRedirect(true);
    }

    const onHomeRedirect = () => {
        if (homeRedirect === true) {
            return (<Redirect to="/" />);
        }
    }

    console.log('SideNavState = ', SideNavState);

    const MenuBarClickHandler = () => {
        SideNavOpenClose();
    }

    const ContentOverlayClickHandler = () => {
        SideNavOpenClose();
    }

    const SideNavOpenClose = () => {
        if (SideNavState === "sideNavOpen") {
            setSideNavState("sideNavClose");
            setContentOverState("ContentOverlayClose")
        } else {
            setSideNavState("sideNavOpen");
            setContentOverState("ContentOverlayOpen")
        }
    }

    const [selected, setSelected] = useState("US");
    const onSelect = (code) => setSelected(code);

    const userTheme = localStorage.getItem("theme");
    if (userTheme === null) {
        localStorage.setItem("theme", "light");
    }

    const showSelectedLabel = ("Show Selected Label", true);
    const showSecondarySelectedLabel = (
        "Show Secondary Selected Label",
        false
    );

    const selectedSize = ("Selected Size", 12);
    const showOptionLabel = ("Show Option Label", true);
    const showSecondaryOptionLabel = ("Show Secondary Option Label", false);
    const optionsSize = ("Options Size", 24);
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
            <div className="container-fluid NavMobile shadow-sm border-0 NavbarBGMobile bg-maincolor sticky-top fixed-top position-fixed p-2">
                <div className="mt-2 flex flex-wrap">
                    <div className="w-1/3">
                        <span onClick={MenuBarClickHandler}>
                            <img className="cursor-pointer md:ml-12 sm:ml-12 ml-4"
                                src={NavIcon} alt=""
                            />
                        </span>
                    </div>
                    <div className="w-1/3 justify-center flex">
                        <Link>
                            <img className="cursor-pointer h-16 -mt-1"
                                src={IgLearnFullLogo} alt=""
                            />
                        </Link>
                    </div>
                    <div className="w-1/3">
                        <div className="flex" style={{ float: "right" }}>
                            <div><img className="cursor-pointer mx-1" src={SearchIcon} alt="" /></div>
                            <div><img className="cursor-pointer mx-1" src={CartIcon} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={SideNavState}>
                <div className="bg-gray-200 dark:bg-dark-color4 h-16">
                    <div className="flex flex-wrap">
                        <div className="w-24 ml-10 mt-2">
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
                        <div className="w-12 bg-white dark:bg-dark-color2 pl-3 pt-1.5 h-10 mt-2 rounded-md ml-40">
                            {(() => {
                                if (userTheme === 'dark') {
                                    return (
                                        <label className="bg-white dark:bg-dark-color3 xl:ml-4 xl:w-12 xl:h-11 rounded-sm">
                                            <img className="moon cursor-pointer show xl:h-7 xl:w-7 xl:mt-1.5 xl:ml-2.5" src={MoonImg} alt="" />
                                            <img className="sun cursor-pointer hidden xl:h-7 xl:w-7 xl:mt-1.5 xl:ml-2.5" src={SunImg} alt="" />
                                        </label>
                                    )
                                }
                                else if (userTheme === 'light') {
                                    return (
                                        <label className="bg-white dark:bg-dark-color3 xl:ml-3 xl:w-12 xl:h-11 rounded-sm">
                                            <img className="sun cursor-pointer show xl:h-7 xl:w-7 xl:mt-1.5 xl:ml-2.5" src={SunImg} alt="" />
                                            <img className="moon cursor-pointer hidden xl:h-7 xl:w-7 xl:mt-1.5 xl:ml-2.5" src={MoonImg} alt="" />
                                        </label>
                                    )
                                }
                            })()}
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-dark-color2">
                    <div className="flex flex-wrap mt-3">
                        <div className="w-1/2">
                            <Link to="/">
                                <img className="h-24 ml-6"
                                    src={BlackMainLogo} alt=""
                                />
                            </Link>
                        </div>
                        <div className="w-1/2">
                            <span onClick={MenuBarClickHandler}
                                className="cursor-pointer">
                                <GrClose className="mt-6 ml-20 font-bold text-gray-600 h-9 w-9 bg-gray-200 rounded-full p-2" />
                            </span>
                        </div>
                    </div>

                    {(() => {
                        if (user_email === null) {
                            return (
                                <div className="mt-3 text-center">
                                    <Link to="/login">
                                        <button className="border-2 border-price-deep xl:mt-3 h-12 w-56 rounded-3xl text-base font-light text-price-deep">
                                            <i className="fa fa-graduation-cap mr-1"></i>
                                            I want to Teach
                                        </button>
                                        <br /> </Link>
                                    <Link to="/login">
                                        <button className="mt-3 border-2 border-price-deep xl:mt-3 h-12 w-56 rounded-3xl text-base font-light text-price-deep">
                                            <i className="fa fa-book-reader mr-1"></i>
                                            I want to Learn
                                        </button>
                                    </Link>
                                </div>
                            )
                        }
                        else {
                            return (
                                <>
                                    <div className="mt-1 image-center">
                                        <img className="h-24 w-24 border-2 border-black rounded-full"
                                            src={StudentImg} alt=""
                                        />
                                        <br />
                                    </div>
                                    <h6 className="mt-3 text-xl text-center font-semibold text-maingray">Monirul Islam</h6>
                                    <h6 className="text-sm text-center text-gray-600 font-normal">Student</h6>
                                </>
                            )
                        }
                    })()}

                    <hr className="border mt-5 mb-8 ml-10 mr-10" />

                    <h6 className="ml-10 text-xl text-black font-semibold">Download App</h6>

                    <div className="flex flex-wrap mt-3">
                        <div className="w-1/2">
                            <Link to="/">
                                <img className="h-12 ml-6 float-right"
                                    src={IOS} alt=""
                                />
                            </Link>
                        </div>
                        <div className="w-1/2">
                            <Link to="/">
                                <img className="h-12 ml-6 float-left"
                                    src={Android} alt=""
                                />
                            </Link>
                        </div>
                    </div>

                    <hr className="border mt-8 mb-8 ml-10 mr-10" />

                    {(() => {
                        if (user_email === null) {
                            return (
                                <div className="mt-3 text-center">
                                    <Link to="/">
                                        <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light">
                                            <span className="float-left ml-8">Home</span>
                                            <span className="float-right mr-6">{'>'}</span>
                                        </button>
                                        <br />
                                    </Link>
                                    <Link to="/price">
                                        <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light">
                                            <span className="float-left ml-8">Pricing</span>
                                            <span className="float-right mr-6">{'>'}</span>
                                        </button>
                                        <br />
                                    </Link>
                                    <Link to="/about">
                                        <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light">
                                            <span className="float-left ml-8">About us</span>
                                            <span className="float-right mr-6">{'>'}</span>
                                        </button>
                                        <br />
                                    </Link>
                                    <Link to="/ig-learn-Pro">
                                        <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light">
                                            <span className="float-left ml-8">IgLearn Pro</span>
                                            <span className="float-right mr-6">{'>'}</span>
                                        </button>
                                        <br />
                                    </Link>
                                    <Link to="/contact-us">
                                        <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light">
                                            <span className="float-left ml-8">Contact</span>
                                            <span className="float-right mr-6">{'>'}</span>
                                        </button>
                                        <br />
                                    </Link>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className="mt-3 text-center">
                                    <Link to="/my-course">
                                        <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light">
                                            <span className="flex float-left ml-8">
                                                <img className="h-4 w-4 mr-3 mt-1"
                                                    src={Home} alt=""
                                                />
                                                My Course
                                            </span>
                                            <span className="float-right mr-6">
                                                {'>'}
                                            </span>
                                        </button>
                                        <br />
                                    </Link>
                                    <Link to="/cart-summery">
                                        <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light">
                                            <span className="flex float-left ml-8">
                                                <img className="h-4 w-4 mr-3 mt-1"
                                                    src={Graph} alt=""
                                                />
                                                Cart
                                                <h6 className="bg-maincolor w-5 h-5 text-2xs text-white rounded-full ml-2 mt-0.5">3</h6>
                                            </span>
                                            <span className="float-right mr-6">
                                                {'>'}
                                            </span>
                                        </button>
                                        <br />
                                    </Link>
                                    <Link to="/">
                                        <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light">
                                            <span className="flex float-left ml-8">
                                                <img className="h-4 w-4 mr-3 mt-1"
                                                    src={Notification} alt=""
                                                />
                                                Notification
                                            </span>
                                            <span className="float-right mr-6">
                                                {'>'}
                                            </span>
                                        </button>
                                        <br />
                                    </Link>
                                    <Link to="/">
                                        <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light">
                                            <span className="flex float-left ml-8">
                                                <img className="h-4 w-4 mr-3 mt-1"
                                                    src={Bag} alt=""
                                                />
                                                Go to Dashboard
                                            </span>
                                            <span className="float-right mr-6">
                                                {'>'}
                                            </span>
                                        </button>
                                        <br />
                                    </Link>
                                    <Link to="/">
                                        <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light">
                                            <span className="flex float-left ml-8">
                                                <img className="h-4 w-4 mr-3 mt-1"
                                                    src={Wallet} alt=""
                                                />
                                                Payment Method
                                            </span>
                                            <span className="float-right mr-6">
                                                {'>'}
                                            </span>
                                        </button>
                                        <br />
                                    </Link>
                                    <Link to="/">
                                        <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light">
                                            <span className="flex float-left ml-8">
                                                <img className="h-4 w-4 mr-3 mt-1"
                                                    src={Chat} alt=""
                                                />
                                                Messages
                                                <h6 className="bg-maincolor w-5 h-5 text-2xs text-white rounded-full ml-2 mt-0.5">14</h6>
                                            </span>
                                            <span className="float-right mr-6">
                                                {'>'}
                                            </span>
                                        </button>
                                        <br />
                                    </Link>
                                    <Link to="/">
                                        <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light">
                                            <span className="flex float-left ml-8">
                                                <img className="h-4 w-4 mr-3 mt-1"
                                                    src={Setting} alt=""
                                                />
                                                Account Settings
                                            </span>
                                            <span className="float-right mr-6">
                                                {'>'}
                                            </span>
                                        </button>
                                        <br />
                                    </Link>
                                    <Link onClick={onLogout}>
                                        <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light">
                                            <span className="flex float-left ml-8">
                                                <img className="h-4 w-4 mr-3 mt-1"
                                                    src={Logout} alt=""
                                                />
                                                Logout
                                            </span>
                                            <span className="float-right mr-6">
                                                {'>'}
                                            </span>
                                        </button>
                                        <br />
                                    </Link>
                                </div>
                            )
                        }
                    })()}

                    <hr className="border mt-8 mb-8 ml-10 mr-10" />

                    <h6 className="ml-10 text-xl text-black font-semibold">Categories</h6>

                    <div className="flex flex-wrap mt-5">
                        <div className="w-full">
                            <Link className="flex" to="/">
                                <img className="h-5 ml-10 mr-3"
                                    src={Programming} alt=""
                                />
                                Programming
                            </Link>

                            <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3" />

                            <Link className="flex" to="/">
                                <img className="h-5 ml-10 mr-3"
                                    src={VideoPlayer} alt=""
                                />
                                Video Editing
                            </Link>

                            <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3" />

                            <Link className="flex" to="/">
                                <img className="h-5 ml-10 mr-3"
                                    src={BarChart} alt=""
                                />
                                Business and Company
                            </Link>

                            <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3" />

                            <Link className="flex" to="/">
                                <img className="h-5 ml-10 mr-3"
                                    src={PaintBoard} alt=""
                                />
                                Arts & Design
                            </Link>
                            <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3" />
                            <Link className="flex" to="/">
                                <img className="h-5 ml-10 mr-3"
                                    src={MegaPhone} alt=""
                                />
                                Digital Marketing
                            </Link>
                            <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3" />
                            <Link className="flex" to="/">
                                <img className="h-5 ml-10 mr-3"
                                    src={Whistle} alt=""
                                />
                                Coaching & Personal
                            </Link>
                            <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3" />
                            <Link className="flex" to="/">
                                <img className="h-5 ml-10 mr-3"
                                    src={Cloud} alt=""
                                />
                                Cloud Computing & DevOps
                            </Link>
                            <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3" />
                            <Link className="flex" to="/">
                                <img className="h-5 ml-10 mr-3"
                                    src={CyberSecurity} alt=""
                                />
                                Cyber Security
                            </Link>
                            <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3" />
                            <Link className="flex" to="/">
                                <img className="h-5 ml-10 mr-3"
                                    src={Project} alt=""
                                />
                                Project Management
                            </Link>
                            <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3" />
                        </div>
                    </div>
                    {onHomeRedirect()}
                </div>

            </div>

            <div onClick={ContentOverlayClickHandler}
                className={ContentOverState}
            >

            </div>

        </Fragment>
    );
}
export default NavMenuMobile;