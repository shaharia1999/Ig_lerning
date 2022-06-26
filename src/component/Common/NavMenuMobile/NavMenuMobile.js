import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../asset/css/navMenuMobile.css';
import Android from "../../../asset/images/icon/android.png";
import IOS from "../../../asset/images/icon/ios.png";
import BlackMainLogo from "../../../asset/images/logo/black-iglearn-main-logo.svg";
import { Button, Col, Container, Row } from "react-bootstrap";
import { GrClose } from "react-icons/gr";

function NavMenuMobile() {
    const [SideNavState, setSideNavState] = useState("sideNavClose");
    const [ContentOverState, setContentOverState] = useState("ContentOverlayClose");

    console.log('SideNavState = ', SideNavState);

    const userTheme = localStorage.getItem("theme");
    if (userTheme === null) {
        localStorage.setItem("theme", "light");
    }

    // const showSelectedLabel = ("Show Selected Label", true);
    // const showSecondarySelectedLabel = (
    //     "Show Secondary Selected Label",
    //     false
    // );

    // const selectedSize = ("Selected Size", 20);
    // const showOptionLabel = ("Show Option Label", true);
    // const showSecondaryOptionLabel = ("Show Secondary Option Label", false);
    // const optionsSize = ("Options Size", 56);
    // const placeholder = ("Placeholder", "Lang");
    // const searchable = ("Searchable", false);
    // const alignOptionsToRight = ("Align Options to Right", false);
    // const fullWidth = ("Full Width", true);
    // const disabled = ("Disabled", false);

    // const customLabels = ("Custom Labels", {
    //     US: { primary: "EN" },
    //     FR: { primary: "FR" },
    //     ES: { primary: "ES" },
    //     IT: { primary: "IT" },
    //     DE: { primary: "DE" },
    // });

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
                className="NavMobile shadow-sm border-0 NavbarBGMobile sticky-top fixed-top position-fixed p-2">
                <Row className="mt-2">
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <Button onClick={MenuBarClickHandler} className="bars-btn"><i
                            className="fa fa-bars"></i></Button>
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
                        <span onClick={MenuBarClickHandler} className=""><GrClose className="mt-6 ml-20 font-bold text-gray-600 h-9 w-9 bg-gray-200 rounded-full p-2" /></span>
                    </div>
                </div>

                <div className="mt-3 text-center">
                    <button className="border-2 border-price-deep xl:mt-3 h-12 w-56 rounded-3xl text-base font-light text-price-deep">  <i className="fa fa-graduation-cap mr-1"></i>I want to Teach</button> <br />
                    <button className="mt-3 border-2 border-price-deep xl:mt-3 h-12 w-56 rounded-3xl text-base font-light text-price-deep"> <i className="fa fa-book-reader mr-1"></i> I want to Learn</button>
                </div>

                <hr className="border mt-5 mb-8 ml-8 mr-8" />

                <h6 className="ml-6 text-xl text-black font-semibold">Download App</h6>

                <div className="flex flex-wrap mt-3">
                    <div className="w-1/2">
                        <Link to="/"> <img className="h-12 ml-6 float-right" src={IOS} alt="" /></Link>
                    </div>
                    <div className="w-1/2">
                        <Link to="/"> <img className="h-12 ml-6 float-left" src={Android} alt="" /></Link>
                    </div>
                </div>

                <hr className="border mt-8 mb-8 ml-8 mr-8" />

                <div className="mt-3 text-center">
                    <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-64 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light"><span className="float-left ml-8">Home</span><span className="float-right mr-6">></span></button> <br />
                    <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-64 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light"><span className="float-left ml-8">Pricing</span><span className="float-right mr-6">></span></button> <br />
                    <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-64 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light"><span className="float-left ml-8">About us</span><span className="float-right mr-6">></span></button> <br />
                    <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-64 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light"><span className="float-left ml-8">IgLearn Pro</span><span className="float-right mr-6">></span></button> <br />
                    <button className="mt-3 focus:border bg-gray-100 focus:border-maincolordeep xl:mt-3 h-12 w-64 rounded-3xl text-base font-normal text-maingray focus:text-maincolordeep focus:bg-navigation-drawer-btn-bg-light"><span className="float-left ml-8">Contact</span><span className="float-right mr-6">></span></button> <br />
                </div>

                <hr className="border mt-8 mb-8 ml-8 mr-8" />

                <h6 className="ml-6 text-xl text-black font-semibold">Categories</h6>


                <div className="flex flex-wrap mt-3">
                    <div className="w-full">
                        <Link to="/"> <img className="h-12 ml-6" src={IOS} alt="" /> Programming</Link>
                    </div>
                </div>

            </div>

            <div onClick={ContentOverlayClickHandler} className={ContentOverState}>

            </div>

        </Fragment>
    );
}
export default NavMenuMobile;