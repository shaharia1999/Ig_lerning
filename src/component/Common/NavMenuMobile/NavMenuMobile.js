import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../asset/css/navMenuMobile.css';
import Android from "../../../asset/images/icon/android.png";
import IOS from "../../../asset/images/icon/ios.png";
import BlackMainLogo from "../../../asset/images/logo/black-iglearn-main-logo.svg";
import { Button, Col, Container, Row } from "react-bootstrap";
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

function NavMenuMobile() {
    const [SideNavState, setSideNavState] = useState("sideNavClose");
    const [ContentOverState, setContentOverState] = useState("ContentOverlayClose");

    console.log('SideNavState = ', SideNavState);

    const userTheme = localStorage.getItem("theme");
    if (userTheme === null) {
        localStorage.setItem("theme", "light");
    }

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

    return (
        <Fragment>
            <Container fluid={true}
                className="NavMobile shadow-sm border-0 NavbarBGMobile bg-maincolor sticky-top fixed-top position-fixed p-2">
                <Row className="mt-2 flex">
                    <Col sm={4}>
                        {/* <Button onClick={MenuBarClickHandler} className="bars-btn"><i
                            className="fa fa-bars"></i></Button> */}
                            <span onClick={MenuBarClickHandler}><img className="cursor-pointer ml-4" src={NavIcon} alt=""/></span>   
                    </Col>
                    <Col sm={4}>
                            <Link><img className="cursor-pointer ml-12 justify-end h-14" src={IgLearnFullLogo} alt=""/></Link>    
                    </Col>
                    <Col className="flex" sm={4}>
                        {/* <Button onClick={MenuBarClickHandler} className="bars-btn"><i
                            className="fa fa-bars"></i></Button> */}
                            <span><img className="cursor-pointer mx-1 justify-end ml-8" src={SearchIcon} alt=""/></span>
                            <span><img className="cursor-pointer mx-1" src={CartIcon} alt=""/></span>
                    </Col>
                </Row>
            </Container>

            <div className={SideNavState}>
                <div className="bg-gray-200 h-14">

                </div>

                <div className="flex flex-wrap mt-3">
                    <div className="w-1/2">
                        <Link to="/"> <img className="h-24 ml-6" src={BlackMainLogo} alt="" /></Link>
                    </div>
                    <div className="w-1/2">
                        <span onClick={MenuBarClickHandler} className=" cursor-pointer"><GrClose className="mt-6 ml-20 font-bold text-gray-600 h-9 w-9 bg-gray-200 rounded-full p-2" /></span>
                    </div>
                </div>

                <div className="mt-3 text-center">
                    <button className="border-2 border-price-deep xl:mt-3 h-12 w-56 rounded-3xl text-base font-light text-price-deep">  <i className="fa fa-graduation-cap mr-1"></i>I want to Teach</button> <br />
                    <button className="mt-3 border-2 border-price-deep xl:mt-3 h-12 w-56 rounded-3xl text-base font-light text-price-deep"> <i className="fa fa-book-reader mr-1"></i> I want to Learn</button>
                </div>

                <hr className="border mt-5 mb-8 ml-10 mr-10" />

                <h6 className="ml-10 text-xl text-black font-semibold">Download App</h6>

                <div className="flex flex-wrap mt-3">
                    <div className="w-1/2">
                        <Link to="/"> <img className="h-12 ml-6 float-right" src={IOS} alt="" /></Link>
                    </div>
                    <div className="w-1/2">
                        <Link to="/"> <img className="h-12 ml-6 float-left" src={Android} alt="" /></Link>
                    </div>
                </div>

                <hr className="border mt-8 mb-8 ml-10 mr-10" />

                <div className="mt-3 text-center">
                    <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light"><span className="float-left ml-8">Home</span><span className="float-right mr-6">></span></button> <br />
                    <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light"><span className="float-left ml-8">Pricing</span><span className="float-right mr-6">></span></button> <br />
                    <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light"><span className="float-left ml-8">About us</span><span className="float-right mr-6">></span></button> <br />
                    <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light"><span className="float-left ml-8">IgLearn Pro</span><span className="float-right mr-6">></span></button> <br />
                    <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-80 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light"><span className="float-left ml-8">Contact</span><span className="float-right mr-6">></span></button> <br />
                </div>

                <hr className="border mt-8 mb-8 ml-10 mr-10" />

                <h6 className="ml-10 text-xl text-black font-semibold">Categories</h6>


                <div className="flex flex-wrap mt-5">
                    <div className="w-full">
                        <Link className="flex" to="/"> <img className="h-5 ml-10 mr-3" src={Programming} alt="" /> Programming</Link>
                        <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3"/>
                        <Link className="flex" to="/"> <img className="h-5 ml-10 mr-3" src={VideoPlayer} alt="" /> Video Editing</Link>
                        <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3"/>
                        <Link className="flex" to="/"> <img className="h-5 ml-10 mr-3" src={BarChart} alt="" /> Business and Company</Link>
                        <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3"/>
                        <Link className="flex" to="/"> <img className="h-5 ml-10 mr-3" src={PaintBoard} alt="" /> Arts & Design</Link>
                        <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3"/>
                        <Link className="flex" to="/"> <img className="h-5 ml-10 mr-3" src={MegaPhone} alt="" /> Digital Marketing</Link>
                        <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3"/>
                        <Link className="flex" to="/"> <img className="h-5 ml-10 mr-3" src={Whistle} alt="" /> Coaching & Personal</Link>
                        <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3"/>
                        <Link className="flex" to="/"> <img className="h-5 ml-10 mr-3" src={Cloud} alt="" /> Cloud Computing & DevOps</Link>
                        <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3"/>
                        <Link className="flex" to="/"> <img className="h-5 ml-10 mr-3" src={CyberSecurity} alt="" /> Cyber Security</Link>
                        <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3"/>
                        <Link className="flex" to="/"> <img className="h-5 ml-10 mr-3" src={Project} alt="" /> Project Management</Link>
                        <hr className="border border-gray-200 ml-10 mr-10 mt-3 mb-3"/>
                    </div>
                </div>

            </div>

            <div onClick={ContentOverlayClickHandler} className={ContentOverState}>

            </div>

        </Fragment>
    );
}
export default NavMenuMobile;