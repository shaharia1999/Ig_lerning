import React, { Fragment, useState } from 'react';
import 'flowbite';
import '../../../asset/css/searchBarHome.css';
import { Link, Redirect } from 'react-router-dom';
import MainLogo from "../../../asset/images/logo/main-logo.svg";
import BlackMainLogo from "../../../asset/images/logo/black-iglearn-main-logo.svg";
import ReactFlagsSelect from "react-flags-select";
import MoonImg from "../../../asset/images/icon/moon.svg";
import SunImg from "../../../asset/images/icon/sun.svg";
import axios from 'axios';
import ApiUrl from '../../../Api/ApiUrl';
import StudentImg from '../../../asset/images/student-bought/student-img.png';
import Bag from '../../../asset/images/nav-menu-dropdown/Bag.svg';
import Chat from '../../../asset/images/nav-menu-dropdown/Chat.svg';
import Graph from '../../../asset/images/nav-menu-dropdown/Graph.svg';
import Home from '../../../asset/images/nav-menu-dropdown/Home.svg';
import Notification from '../../../asset/images/nav-menu-dropdown/Notification.svg';
import Setting from '../../../asset/images/nav-menu-dropdown/Setting.svg';
import Wallet from '../../../asset/images/nav-menu-dropdown/Wallet.svg';
import Logout from '../../../asset/images/nav-menu-dropdown/power-off.png';
import searchDashIcon from '../../../asset/images/nav-menu-dropdown/search-dash-icon.png';
import { IoCloseOutline } from "react-icons/io5";

function NavBarTop() {
    const [teacherEmail, setTeacherEmail] = useState('');
    const [teacherPassword, setTeacherPassword] = useState('');
    const [keep_login, setKeepLoggin] = useState(false)
    const [studentEmail, setStudentEmail] = useState('');
    const [studentPassword, setStudentPassword] = useState('');
    const [homeLoginRedirect, setHomeLoginRedirect] = useState(false);
    const [homeRedirect, setHomeRedirect] = useState(false);

    const user_data = JSON.parse(localStorage.getItem('user_data'));
    var user_email = null;
    if (user_data == null) {
        user_email = null;
    }
    else {
        user_email = user_data['email'];
    }

    const onHomeLoginRedirect = () => {
        if (homeLoginRedirect === true) {
            return (<Redirect to="/" />);
        }
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

    const TeacherLoginSubmit = () => {
        const teacher_login_data = {
            username_or_email: teacherEmail,
            password: teacherPassword
        }
        axios.post(`${ApiUrl.BaseUrl}user-authentication/api/login/`, teacher_login_data).then((response) => {
            if (response.data.error === false) {
                localStorage.setItem('access_token', response.data.access_token)
                localStorage.setItem('refresh_token', response.data.refresh_token)
                localStorage.setItem('user_data', JSON.stringify(response.data.data))
                localStorage.setItem('keep_login', keep_login)
                setHomeLoginRedirect(true);
            }
        })
    }

    const StudentLoginSubmit = () => {
        const student_login_data = {
            username_or_email: studentEmail,
            password: studentPassword
        }
        axios.post(`${ApiUrl.BaseUrl}user-authentication/api/login/`, student_login_data).then((response) => {
            if (response.data.error === false) {
                localStorage.setItem('access_token', response.data.access_token)
                localStorage.setItem('refresh_token', response.data.refresh_token)
                localStorage.setItem('user_data', JSON.stringify(response.data.data))
                localStorage.setItem('keep_login', keep_login)
                setHomeLoginRedirect(true);
            }
        })
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
                <div className="bg-maincolordeep 2xl:h-16 xl:h-16 lg:h-14 w-full dark:bg-dark-color1">
                    <div className="flex flex-wrap float-right 2xl:pr-28 xl:pr-28 lg:pr-16 2xl:pt-3 xl:pt-3 lg:pt-2">
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

                        {(() => {
                            if (userTheme === 'dark') {
                                return (
                                    <label className="bg-light-version dark:bg-dark-color3 2xl:ml-4 2xl:w-12 2xl:h-11 xl:ml-4 xl:w-12 xl:h-10 lg:ml-4 lg:w-12 lg:h-10 2xl:rounded-sm xl:rounded-md lg:rounded-md">
                                        <img className="moon cursor-pointer show 2xl:h-7 2xl:w-7 2xl:mt-1.5 2xl:ml-2.5 xl:h-7 xl:w-7 xl:mt-1.5 xl:ml-2.5 lg:h-7 lg:w-7 lg:mt-1.5 lg:ml-2.5" src={MoonImg} alt="" />
                                        <img className="sun cursor-pointer hidden 2xl:h-7 2xl:w-7 2xl:mt-1.5 2xl:ml-2.5 xl:h-7 xl:w-7 xl:mt-1.5 xl:ml-2.5 lg:h-7 lg:w-7 lg:mt-1.5 lg:ml-2.5" src={SunImg} alt="" />
                                    </label>
                                )
                            }
                            else if (userTheme === 'light') {
                                return (
                                    <label className="bg-light-version 2xl:ml-3 2xl:w-12 2xl:h-11 xl:ml-4 xl:w-12 xl:h-10 lg:ml-4 lg:w-12 lg:h-10 2xl:rounded-sm xl:rounded-md lg:rounded-md">
                                        <img className="sun cursor-pointer show 2xl:h-7 2xl:w-7 2xl:mt-1.5 2xl:ml-2.5 xl:h-7 xl:w-7 xl:mt-1.5 xl:ml-2.5 lg:h-7 lg:w-7 lg:mt-1.5 lg:ml-2.5" src={SunImg} alt="" />
                                        <img className="moon cursor-pointer hidden 2xl:h-7 2xl:w-7 2xl:mt-1.5 2xl:ml-2.5 xl:h-7 xl:w-7 xl:mt-1.5 xl:ml-2.5 lg:h-7 lg:w-7 lg:mt-1.5 lg:ml-2.5" src={MoonImg} alt="" />
                                    </label>
                                )
                            }
                        })()}

                    </div>
                </div>
            </div>

            {(() => {
                if (user_email === null) {
                    return (
                        <nav className="flex flex-wrap top-0 sticky-top items-center justify-between w-full py-4 md:py-0 px-4 text-lg bg-maincolor dark:bg-dark-color2">
                            <div className="2xl:h-24 xl:h-20 lg:h-20">
                                <a href='/'>
                                    <img className="2xl:h-24 xl:h-20 lg:h-20 2xl:mt-3 xl:mt-2 lg:mt-2 2xl:ml-24 xl:ml-8 lg:ml-4"
                                        src={MainLogo} alt=""
                                    />
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
                                        <Link className="md:p-4 block font-light 2xl:text-lg text-sm text-white " to="/">
                                            <span className="hover:border-b-4 hover:pb-2 hover:border-white -ml-4">Home</span>
                                            <span className="2xl:mx-4 xl:mx-3 lg:mx-2 font-light text-white 2xl:text-xl text-sm">|</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="md:p-4 block font-light 2xl:text-lg text-sm text-white" to="/price">
                                            <span className="hover:border-b-4 hover:pb-2 hover:border-white -ml-4">Pricing</span>
                                            <span className="2xl:mx-4 xl:mx-3 lg:mx-2 font-light text-white 2xl:text-xl text-sm">|</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="md:p-4 block font-light 2xl:text-lg text-sm text-white" to="/ig-learn-Pro">
                                            <span className="hover:border-b-4 hover:pb-2 hover:border-white -ml-4">igLearn Pro</span>
                                            <span className="2xl:mx-4 xl:mx-3 lg:mx-2 font-light text-white 2xl:text-xl text-sm">|</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="md:p-4 block font-light 2xl:text-lg text-sm text-white" to="/about">
                                            <span className="hover:border-b-4 hover:pb-2 hover:border-white -ml-4">About Us</span>
                                            <span className="2xl:mx-4 xl:mx-3 lg:mx-2 font-light text-white 2xl:text-xl text-sm">|</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <div class="dropdown dropdown-end">
                                            <label tabindex="0" className="">
                                                <button className="outline outline-2 hover:bg-white 2xl:mt-3 2xl:mr-8 xl:mt-2 xl:mr-8 lg:mt-2 lg:mr-5 float-right 2xl:h-10 2xl:w-52 xl:h-10 xl:w-44 lg:h-8 lg:w-36 rounded-3xl ml-auto 2xl:text-base xl:text-sm lg:text-xs font-light text-white hover:text-maincolor">
                                                    <i className="fa fa-graduation-cap mr-1"></i>
                                                    I want to Teach
                                                </button>
                                            </label>
                                            <ul tabindex="0" className="2xl:mt-20 xl:mt-16 lg:mt-16 2xl:-mr-10 xl:-mr-16 lg:-mr-16 justify-center dark:bg-dark-color1 p-8 shadow-lg menu menu-compact dropdown-content flex bg-base-100 rounded-box xl:w-96 lg:w-80">
                                                <div className="h-4 w-4 bg-white dark:bg-dark-color1 2xl:ml-40 xl:ml-40 lg:ml-32 rotate-45 2xl:-mt-10 xl:-mt-10 lg:-mt-10 rounded-sm"></div>
                                                <form className="flex flex-wrap w-full">
                                                    <div className="2xl:ml-16 xl:ml-16 lg:ml-12 2xl:mt-8 xl:mt-4 lg:mt-4">
                                                        <img className="2xl:h-24 xl:h-20 lg:h-16"
                                                            src={BlackMainLogo} alt=""
                                                        />
                                                    </div>
                                                    <h6 className="text-maingray 2xl:font-semibold xl:font-medium 2xl:text-xl xl:text-xl lg:text-base 2xl:-mt-2 xl:-mt-2 lg:-mt-2 2xl:mb-5 xl:mb-4 lg:mb-3 2xl:ml-20 xl:ml-20 lg:ml-12 dark:text-white">
                                                        Sign in to
                                                        <span className="text-maincolor"> igLearn</span>
                                                    </h6>
                                                    <div className="flex flex-wrap">

                                                        <div className="form-floating mb-3 2xl:w-full xl:w-full lg:w-full">
                                                            <input type="email"
                                                                value={teacherEmail}
                                                                onChange={(e) => setTeacherEmail(e.target.value)}
                                                                className="form-control bg-gray-100 dark:bg-dark-color2 dark:text-white block w-full px-3 xl:py-1.5 lg:py-1 2xl:text-base text-sm font-normal text-gray-700 bg-clip-padding border-none rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="name@example.com" />
                                                            <label for="floatingInput" className="text-gray-700 dark:text-gray-400">
                                                                Email address
                                                            </label>
                                                        </div>

                                                        <div className="form-floating mb-3 2xl:w-full xl:w-full lg:w-full">
                                                            <input type="password"
                                                                value={teacherPassword}
                                                                onChange={(e) => setTeacherPassword(e.target.value)}
                                                                className="form-control bg-gray-100 dark:bg-dark-color2 dark:text-white block w-full px-3 xl:py-1.5 lg:py-1 2xl:text-base lg:text-sm font-normal text-gray-700 bg-clip-padding border-none rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingPassword" placeholder="Password" />
                                                            <label for="floatingPassword" className="text-gray-700 dark:text-gray-400">
                                                                Password
                                                            </label>
                                                        </div>

                                                        <div className="flex justify-between items-center mb-6">
                                                            <div className="form-group form-check">
                                                                <input type="checkbox"
                                                                    value={keep_login}
                                                                    onChange={e => setKeepLoggin(e.target.checked)}
                                                                    className="default:ring-8" />
                                                                <label className="form-check-label inline-block font-light xl:text-sm text-xs mx-2 dark:text-white"
                                                                    for="inlineCheckbox1
                                                        ">
                                                                    Remember me
                                                                </label>
                                                            </div>
                                                            <Link className="font-light xl:text-sm text-xs hover:underline p-2 float-right right-0 mr-0 flex dark:text-white" to="/forget-password">Forgot password</Link>
                                                        </div>

                                                        <div className="cursor-pointer 2xl:w-44 xl:w-32 lg:w-24 flex 2xl:mt-5 xl:mt-1 btn-center1 2xl:ml-20 xl:ml-24 lg:ml-20 bg-maincolor xl:rounded-lg lg:rounded-sm 2xl:pt-2 xl:pt-1 xl:pb-1 2xl:pb-2">
                                                            <Link>
                                                                <span
                                                                    onClick={TeacherLoginSubmit}
                                                                    className="2xl:text-base lg:text-sm font-normal leading-tight text-white mx-2 h-8">
                                                                    Sign in
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </form>
                                                <h6 className="font-normal 2xl:mt-5 xl:mt-3 lg:mt-2 2xl:ml-16 xl:ml-12 lg:ml-10 text-black 2xl:text-sm xl:text-sm lg:text-xs dark:text-white">
                                                    Don't have an account?
                                                    <span className="hover:underline text-maincolor">
                                                        <Link to="/registration">Sign Up</Link>
                                                    </span>
                                                </h6>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="2xl:mr-10 xl:mr-10 lg:mr-5">
                                        <div class="dropdown dropdown-end">
                                            <label tabindex="0" className="">
                                                <button className="outline outline-2 hover:bg-white 2xl:mt-3 2xl:mr-12 xl:mt-2 xl:mr-10 lg:mt-2 lg:mr-5 float-right 2xl:h-10 2xl:w-52 xl:h-10 xl:w-44 lg:h-8 lg:w-36 rounded-3xl ml-auto 2xl:text-base xl:text-sm lg:text-xs font-light text-white hover:text-maincolor"> <i className="fa fa-book-reader mr-1"></i> I want to Learn</button>
                                            </label>
                                            <ul tabindex="0" className="2xl:mt-20 xl:mt-16 lg:mt-16 2xl:-mr-10 xl:-mr-16 lg:-mr-6 justify-center dark:bg-dark-color1 p-8 shadow-lg menu menu-compact dropdown-content flex bg-base-100 rounded-box xl:w-96 lg:w-80">
                                                <div className="h-4 w-4 bg-white dark:bg-dark-color1 2xl:ml-40 xl:ml-40 lg:ml-32 rotate-45 2xl:-mt-10 xl:-mt-10 lg:-mt-10 rounded-sm"></div>                                    <form className="flex flex-wrap 2xl:w-full">
                                                    <div className="2xl:ml-16 xl:ml-16 lg:ml-12 2xl:mt-8 xl:mt-4 lg:mt-4">
                                                        <img className="2xl:h-24 xl:h-20 lg:h-16" src={BlackMainLogo} alt="" />
                                                    </div>
                                                    <h6 className="text-maingray 2xl:font-semibold xl:font-medium 2xl:text-xl xl:text-xl lg:text-base 2xl:-mt-2 xl:-mt-2 lg:-mt-2 2xl:mb-5 xl:mb-4 lg:mb-3 2xl:ml-20 xl:ml-20 lg:ml-12 dark:text-white">Sign in to <span className="text-maincolor">igLearn</span></h6>
                                                    <div className="flex flex-wrap">

                                                        <div className="form-floating mb-3 2xl:w-full xl:w-full lg:w-full">
                                                            <input type="email"
                                                                value={studentEmail}
                                                                onChange={(e) => setStudentEmail(e.target.value)}
                                                                className="form-control bg-gray-100 dark:bg-dark-color2 dark:text-white block w-full px-3 xl:py-1.5 lg:py-1 2xl:text-base text-sm font-normal text-gray-700 bg-clip-padding border-none rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="name@example.com" />
                                                            <label for="floatingInput" className="text-gray-700 dark:text-gray-400">
                                                                Email address
                                                            </label>
                                                        </div>

                                                        <div className="form-floating mb-3 2xl:w-full xl:w-full lg:w-full">
                                                            <input type="password"
                                                                value={studentPassword}
                                                                onChange={(e) => setStudentPassword(e.target.value)}
                                                                className="form-control bg-gray-100 dark:bg-dark-color2 dark:text-white block w-full px-3 xl:py-1.5 lg:py-1 2xl:text-base text-sm font-normal text-gray-700 bg-clip-padding border-none rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingPassword" placeholder="Password" />
                                                            <label for="floatingPassword" className="text-gray-700 dark:text-gray-400">
                                                                Password
                                                            </label>
                                                        </div>

                                                        <div className="flex justify-between items-center mb-6">
                                                            <div className="form-group form-check">
                                                                <input type="checkbox"
                                                                    value={keep_login}
                                                                    onChange={e => setKeepLoggin(e.target.checked)}
                                                                    className="default:ring-8" />
                                                                <label className="form-check-label inline-block font-light xl:text-sm text-xs mx-2 dark:text-white" for="inlineCheckbox1"> Remember me</label>
                                                            </div>
                                                            <Link className="font-light xl:text-sm text-xs hover:underline p-2 float-right right-0 mr-0 flex dark:text-white" to="/forget-password">Forgot password</Link>
                                                        </div>

                                                        <div>
                                                            <Link className="cursor-pointer flex  2xl:w-44 xl:w-32 lg:w-24 bg-maincolor 2xl:mt-5 xl:mt-1 btn-center1 2xl:ml-20 xl:ml-24 lg:ml-20  xl:rounded-lg lg:rounded-sm 2xl:pt-2 xl:pt-1 xl:pb-1 2xl:pb-2">
                                                                <span
                                                                    onClick={StudentLoginSubmit}
                                                                    className="2xl:text-base lg:text-sm font-normal leading-tight text-white mx-2 h-7">
                                                                    Sign in
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </form>
                                                <h6 className="font-normal 2xl:mt-5 xl:mt-3 lg:mt-2 2xl:ml-16 xl:ml-12 lg:ml-10 text-black 2xl:text-sm xl:text-sm lg:text-xs dark:text-white">
                                                    Don't have an account?
                                                    <span className="hover:underline text-maincolor">
                                                        <Link to="/registration">Sign Up</Link>
                                                    </span>
                                                </h6>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                            {onHomeLoginRedirect}
                        </nav>
                    )
                }
                else {
                    return (
                        <nav className="flex flex-wrap top-0 sticky-top items-center justify-between w-full py-4 md:py-0 px-4 text-lg bg-maincolor dark:bg-dark-color2">
                            <div className="2xl:h-24 xl:h-20 lg:h-20">
                                <a href='/'>
                                    <img className="2xl:h-24 xl:h-20 lg:h-16 2xl:mt-3 xl:mt-2 lg:mt-3 2xl:ml-24 xl:ml-8 lg:ml-4" src={MainLogo} alt="" />
                                </a>
                            </div>

                            <div class="dropdown">
                                <label tabindex="0" className="flex cursor-pointer">
                                    <div>
                                        <div className="flex">
                                            <div className="form">
                                                <div className="flex bg-white 2xl:w-128 xl:w-112 lg:w-80 rounded-3xl 2xl:py-1.5 xl:py-1 lg:py-0.5">
                                                    <i className="fa fa-search text-gray-400 xl:ml-6 lg:ml-4 mt-3"></i>
                                                    <input type="text"
                                                        className="form-control focus:border-none focus:ring-0 text-sm w-112 pr-0 bg-transparent form-input border-none xl:ml-4 lg:ml-0"
                                                        placeholder="Find your course"
                                                    />
                                                    <span className="rotate-90 -ml-3 xl:mr-10 lg:mr-8">
                                                        <img className="2xl:h-5 2xl:w-5 xl:h-4 xl:w-5 lg:h-3 lg:w-6"
                                                            src={searchDashIcon} alt=""
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                <ul tabindex="0" className="2xl:mt-1 xl:mt-1 lg:mt-1 justify-center dark:bg-dark-color1 pl-0 shadow-xl menu menu-compact dropdown-content flex bg-base-100 rounded-lg">
                                    <div className="2xl:w-128 px-5 py-5">
                                        <div className="mt-1">
                                            <h6 className="text-base text-maingray font-normal ml-1.5">Search History</h6>
                                            <div className="flex-wrap flex">
                                                <span
                                                    className="xl:px-4 xl:py-1.5 xl:mx-1 lg:px-3 lg:py-1 lg:mx-0.5 rounded-full text-maincolor bg-maincolor/5 font-normal text-xs flex border border-maincolor/80 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                                    UI/UX design Course
                                                    <button className="bg-transparent hover focus:outline-none">
                                                        <span>
                                                            <IoCloseOutline
                                                                className="xl:h-4 xl:w-4 xl:ml-3 lg:h-3 lg:w-3 lg:ml-2 rounded-full border border-maincolor"
                                                            />
                                                        </span>
                                                    </button>
                                                </span>

                                                <span
                                                    className="xl:px-4 xl:py-1.5 xl:mx-1 lg:px-3 lg:py-1 lg:mx-0.5 rounded-full text-maincolor bg-maincolor/5 font-normal text-xs flex border border-maincolor/80 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                                    Master Degree
                                                    <button className="bg-transparent hover focus:outline-none">
                                                        <span>
                                                            <IoCloseOutline
                                                                className="xl:h-4 xl:w-4 xl:ml-3 lg:h-3 lg:w-3 lg:ml-2 rounded-full border border-maincolor"
                                                            />
                                                        </span>
                                                    </button>
                                                </span>

                                                <span
                                                    className="xl:px-4 xl:py-1.5 xl:mx-1 lg:px-3 lg:py-1 lg:mx-0.5 rounded-full text-maincolor bg-maincolor/5 font-normal text-xs flex border border-maincolor/80 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                                    Courses
                                                    <button className="bg-transparent hover focus:outline-none">
                                                        <span>
                                                            <IoCloseOutline
                                                                className="xl:h-4 xl:w-4 xl:ml-3 lg:h-3 lg:w-3 lg:ml-2 rounded-full border border-maincolor"
                                                            />
                                                        </span>
                                                    </button>
                                                </span>

                                                <span
                                                    className="xl:px-4 xl:py-1.5 xl:mx-1 lg:px-3 lg:py-1 lg:mx-0.5 rounded-full text-maincolor bg-maincolor/5 font-normal text-xs flex border border-maincolor/80 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                                    Big Data
                                                    <button className="bg-transparent hover focus:outline-none">
                                                        <span>
                                                            <IoCloseOutline
                                                                className="xl:h-4 xl:w-4 xl:ml-3 lg:h-3 lg:w-3 lg:ml-2 rounded-full border border-maincolor"
                                                            />
                                                        </span>
                                                    </button>
                                                </span>

                                                <span
                                                    className="xl:px-4 xl:py-1.5 xl:mx-1 lg:px-3 lg:py-1 lg:mx-0.5 rounded-full text-maincolor bg-maincolor/5 font-normal text-xs flex border border-maincolor/80 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                                    Courses
                                                    <button className="bg-transparent hover focus:outline-none">
                                                        <span>
                                                            <IoCloseOutline
                                                                className="xl:h-4 xl:w-4 xl:ml-3 lg:h-3 lg:w-3 lg:ml-2 rounded-full border border-maincolor"
                                                            />
                                                        </span>
                                                    </button>
                                                </span>

                                                <span
                                                    className="xl:px-4 xl:py-1.5 xl:mx-1 lg:px-3 lg:py-1 lg:mx-0.5 rounded-full text-maincolor bg-maincolor/5 font-normal text-xs flex border border-maincolor/80 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                                    AWS Complete Course
                                                    <button className="bg-transparent hover focus:outline-none">
                                                        <span>
                                                            <IoCloseOutline
                                                                className="xl:h-4 xl:w-4 xl:ml-3 lg:h-3 lg:w-3 lg:ml-2 rounded-full border border-maincolor"
                                                            />
                                                        </span>
                                                    </button>
                                                </span>

                                                <span
                                                    className="xl:px-4 xl:py-1.5 xl:mx-1 lg:px-3 lg:py-1 lg:mx-0.5 rounded-full text-maincolor bg-maincolor/5 font-normal text-xs flex border border-maincolor/80 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                                    Courses
                                                    <button className="bg-transparent hover focus:outline-none">
                                                        <span>
                                                            <IoCloseOutline
                                                                className="xl:h-4 xl:w-4 xl:ml-3 lg:h-3 lg:w-3 lg:ml-2 rounded-full border border-maincolor"
                                                            />
                                                        </span>
                                                    </button>
                                                </span>

                                                <span
                                                    className="xl:px-4 xl:py-1.5 xl:mx-1 lg:px-3 lg:py-1 lg:mx-0.5 rounded-full text-maincolor bg-maincolor/5 font-normal text-xs flex border border-maincolor/80 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                                    Big Data Courses
                                                    <button className="bg-transparent hover focus:outline-none">
                                                        <span>
                                                            <IoCloseOutline
                                                                className="xl:h-4 xl:w-4 xl:ml-3 lg:h-3 lg:w-3 lg:ml-2 rounded-full border border-maincolor"
                                                            />
                                                        </span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-5 mb-3">
                                            <h6 className="text-base text-maingray font-normal ml-1.5">Recommanded</h6>
                                            <div className="flex-wrap flex">
                                                <span
                                                    className="xl:px-4 xl:py-1.5 xl:mx-1 lg:px-3 lg:py-1 lg:mx-0.5 rounded-full text-maincolor bg-maincolor/5 font-normal text-xs flex border border-maincolor/80 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                                    Itialian
                                                </span>

                                                <span
                                                    className="xl:px-4 xl:py-1.5 xl:mx-1 lg:px-3 lg:py-1 lg:mx-0.5 rounded-full text-maincolor bg-maincolor/5 font-normal text-xs flex border border-maincolor/80 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                                    With Certificate
                                                </span>

                                                <span
                                                    className="xl:px-4 xl:py-1.5 xl:mx-1 lg:px-3 lg:py-1 lg:mx-0.5 rounded-full text-maincolor bg-maincolor/5 font-normal text-xs flex border border-maincolor/80 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                                    Courses
                                                </span>

                                                <span
                                                    className="xl:px-4 xl:py-1.5 xl:mx-1 lg:px-3 lg:py-1 lg:mx-0.5 rounded-full text-maincolor bg-maincolor/5 font-normal text-xs flex border border-maincolor/80 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                                    Big Data Courses
                                                </span>

                                                <span
                                                    className="xl:px-4 xl:py-1.5 xl:mx-1 lg:px-3 lg:py-1 lg:mx-0.5 rounded-full text-maincolor bg-maincolor/5 font-normal text-xs flex border border-maincolor/80 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                                    Courses
                                                </span>

                                                <span
                                                    className="xl:px-4 xl:py-1.5 xl:mx-1 lg:px-3 lg:py-1 lg:mx-0.5 rounded-full text-maincolor bg-maincolor/5 font-normal text-xs flex border border-maincolor/80 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                                    Italian
                                                </span>

                                                <span
                                                    className="xl:px-4 xl:py-1.5 xl:mx-1 lg:px-3 lg:py-1 lg:mx-0.5 rounded-full text-maincolor bg-maincolor/5 font-normal text-xs flex border border-maincolor/80 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                                    Courses
                                                </span>

                                                <span
                                                    className="xl:px-4 xl:py-1.5 xl:mx-1 lg:px-3 lg:py-1 lg:mx-0.5 rounded-full text-maincolor bg-maincolor/5 font-normal text-xs flex border border-maincolor/80 xl:mt-2 lg:mt-1 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                                    Big Data Courses
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
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
                                        <Link className="md:p-4 block font-light 2xl:text-base text-sm text-white " to="/">
                                            <span className="hover:border-b-4 hover:pb-2 -ml-5 hover:border-white">Certifications</span>
                                            <span className="2xl:mx-4 xl:mx-3 lg:mx-2 font-light text-white 2xl:text-xl text-sm">|</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="md:p-4 block font-light 2xl:text-base text-sm text-white" to="/price">
                                            <span className="hover:border-b-4 hover:pb-2 -ml-5 hover:border-white">University</span>
                                            <span className="2xl:mx-4 xl:mx-3 lg:mx-2 font-light text-white 2xl:text-xl text-sm">|</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="md:p-4 block font-light 2xl:text-base text-sm text-white" to="/ig-learn-Pro">
                                            <span className="hover:border-b-4 hover:pb-2 -ml-5 hover:border-white">IG for Business</span>
                                            <span className="2xl:mx-4 xl:mx-3 lg:mx-2 font-light text-white 2xl:text-xl text-sm">|</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <div class="dropdown dropdown-end 2xl:mr-20 xl:mr-16 lg:mr-10">
                                            <label tabindex="0" className="flex cursor-pointer">
                                                <img className='xl:h-10 xl:w-10 lg:h-8 lg:w-8 border-2 xl:mt-3 lg:mt-2.5 border-white rounded-full'
                                                    src={StudentImg}
                                                    alt=""
                                                />
                                                <div className='xl:mt-3 xl:ml-3 lg:mt-2 lg:ml-2'>
                                                    <h6 className='2xl:text-base xl:text-sm text-sm text-white 2xl:font-medium xl:font-normal'>Monirul Islam</h6>
                                                    <h6 className='2xl:text-sm xl:text-xs lg:text-2xs text-white font-light 2xl:-mt-1 xl:mt-auto lg:-mt-1'>Student</h6>
                                                </div>
                                            </label>
                                            <ul tabindex="0" className="2xl:mt-5 2xl:-mr-5 xl:mt-4 xl:-mr-12 lg:mt-4 lg:-mr-12 justify-center dark:bg-dark-color1 p-2 shadow-lg menu menu-compact dropdown-content flex bg-base-100 rounded-md">
                                                <div className="2xl:w-48 xl:w-48 lg:w-48">
                                                    <ul className='2xl:mb-4 mb-2'>
                                                        <li className="xl:mt-1 lg:mt-0">
                                                            <Link className="" to="/my-course">
                                                                <span className="text-sm text-maingray flex xl:mt-1 lg:mt-0 mb-1">
                                                                    <img className="h-4 w-4 mr-3 mt-1"
                                                                        src={Home}
                                                                        alt=""
                                                                    />
                                                                    My Course
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className="xl:mt-1 lg:mt-0">
                                                            <Link className="" to="/cart-summery">
                                                                <span className="text-sm text-maingray flex xl:mt-1 lg:mt-0 mb-1">
                                                                    <img className="h-4 w-4 mr-3 mt-1"
                                                                        src={Graph}
                                                                        alt=""
                                                                    />
                                                                    Cart
                                                                    <h6 className="bg-maincolor w-5 h-5 text-2xs text-white rounded-full pl-1.5 ml-2">3</h6>
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className="xl:mt-1 lg:mt-0">
                                                            <Link className="" to="/">
                                                                <span className="text-sm text-maingray flex xl:mt-1 lg:mt-0 mb-1">
                                                                    <img className="h-4 w-4 mr-3 mt-1"
                                                                        src={Notification} alt=""
                                                                    />
                                                                    Notification
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className="xl:mt-1 lg:mt-0">
                                                            <Link className="" to="/">
                                                                <span className="text-sm text-maingray flex xl:mt-1 lg:mt-0 mb-1">
                                                                    <img className="h-4 w-4 mr-3 mt-1"
                                                                        src={Bag} alt=""
                                                                    />
                                                                    Go To dashboard
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className="xl:mt-1 lg:mt-0">
                                                            <Link className="" to="/">
                                                                <span className="text-sm text-maingray flex xl:mt-1 lg:mt-0 mb-1">
                                                                    <img className="h-4 w-4 mr-3 mt-1"
                                                                        src={Wallet} alt=""
                                                                    />
                                                                    Payment Method
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className="xl:mt-1 lg:mt-0">
                                                            <Link className="" to="/">
                                                                <span className="text-sm text-maingray flex xl:mt-1 lg:mt-0 mb-1">
                                                                    <img className="h-4 w-4 mr-3 mt-1"
                                                                        src={Chat} alt=""
                                                                    />
                                                                    Messages
                                                                    <h6 className="bg-maincolor w-5 h-5 text-2xs text-white rounded-full pl-1.5 ml-2">10</h6>
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className="xl:mt-1 lg:mt-0">
                                                            <Link className="" to="/">
                                                                <span className="text-sm text-maingray flex xl:mt-1 lg:mt-0 mb-1">
                                                                    <img className="h-4 w-4 mr-3 mt-1"
                                                                        src={Setting} alt=""
                                                                    />
                                                                    Account Settings
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className="xl:mt-1 lg:mt-0">
                                                            <Link className="" onClick={onLogout}>
                                                                <span className="text-sm text-maingray flex xl:mt-1 lg:mt-0 mb-1">
                                                                    <img className="h-4 w-4 mr-3 mt-1"
                                                                        src={Logout} alt=""
                                                                    />
                                                                    Logout
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    )
                }
            })()}
            {onHomeRedirect}
        </Fragment>
    );

}
export default NavBarTop;