import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import MainLogo from "../../../asset/images/logo/main-logo.svg";
import BlackMainLogo from "../../../asset/images/logo/black-iglearn-main-logo.svg";
import ReactFlagsSelect from "react-flags-select";
import MoonImg from "../../../asset/images/icon/moon.svg";
import SunImg from "../../../asset/images/icon/sun.svg";
import axios from 'axios';
import ApiUrl from '../../../Api/ApiUrl';

function NavBarTop() {
    const [teacherEmail, setTeacherEmail] = useState('');
    const [teacherPassword, setTeacherPassword] = useState('');
    const [keep_login, setKeepLoggin] = useState(false)
    const [studentEmail, setStudentEmail] = useState('');
    const [studentPassword, setStudentPassword] = useState('');

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
                alert('successfully login teacher')
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
                alert('successfully login student')
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
                                return <label className="bg-light-version dark:bg-dark-color3 2xl:ml-4 2xl:w-12 2xl:h-11 xl:ml-4 xl:w-12 xl:h-10 lg:ml-4 lg:w-12 lg:h-10 2xl:rounded-sm xl:rounded-md lg:rounded-md">
                                    <img className="moon cursor-pointer show 2xl:h-7 2xl:w-7 2xl:mt-1.5 2xl:ml-2.5 xl:h-7 xl:w-7 xl:mt-1.5 xl:ml-2.5 lg:h-7 lg:w-7 lg:mt-1.5 lg:ml-2.5" src={MoonImg} alt="" />
                                    <img className="sun cursor-pointer hidden 2xl:h-7 2xl:w-7 2xl:mt-1.5 2xl:ml-2.5 xl:h-7 xl:w-7 xl:mt-1.5 xl:ml-2.5 lg:h-7 lg:w-7 lg:mt-1.5 lg:ml-2.5" src={SunImg} alt="" />
                                </label>
                            }
                            else if (userTheme === 'light') {
                                return <label className="bg-light-version 2xl:ml-3 2xl:w-12 2xl:h-11 xl:ml-4 xl:w-12 xl:h-10 lg:ml-4 lg:w-12 lg:h-10 2xl:rounded-sm xl:rounded-md lg:rounded-md">
                                    <img className="sun cursor-pointer show 2xl:h-7 2xl:w-7 2xl:mt-1.5 2xl:ml-2.5 xl:h-7 xl:w-7 xl:mt-1.5 xl:ml-2.5 lg:h-7 lg:w-7 lg:mt-1.5 lg:ml-2.5" src={SunImg} alt="" />
                                    <img className="moon cursor-pointer hidden 2xl:h-7 2xl:w-7 2xl:mt-1.5 2xl:ml-2.5 xl:h-7 xl:w-7 xl:mt-1.5 xl:ml-2.5 lg:h-7 lg:w-7 lg:mt-1.5 lg:ml-2.5" src={MoonImg} alt="" />
                                </label>
                            }
                        })()}

                    </div>
                </div>
            </div>


            <nav className="flex flex-wrap top-0 sticky-top items-center justify-between w-full py-4 md:py-0 px-4 text-lg bg-maincolor dark:bg-dark-color2">
                <div className="2xl:h-24 xl:h-20 lg:h-20">
                    <a href='/'>
                        <img className="2xl:h-24 xl:h-20 lg:h-20 2xl:mt-3 xl:mt-2 lg:mt-2 2xl:ml-24 xl:ml-8 lg:ml-4" src={MainLogo} alt="" />
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
                                <span className="hover:border-b-4 hover:pb-2 hover:border-white">Home</span>
                                <span className="2xl:mx-4 xl:mx-3 lg:mx-2 font-light text-white 2xl:text-xl text-sm">|</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="md:p-4 block font-light 2xl:text-lg text-sm text-white" to="/price">
                                <span className="hover:border-b-4 hover:pb-2 hover:border-white">Pricing</span>
                                <span className="2xl:mx-4 xl:mx-3 lg:mx-2 font-light text-white 2xl:text-xl text-sm">|</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="md:p-4 block font-light 2xl:text-lg text-sm text-white" to="/ig-learn-Pro">
                                <span className="hover:border-b-4 hover:pb-2 hover:border-white">igLearn Pro</span>
                                <span className="2xl:mx-4 xl:mx-3 lg:mx-2 font-light text-white 2xl:text-xl text-sm">|</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="md:p-4 block font-light 2xl:text-lg text-sm text-white" to="/about">
                                <span className="hover:border-b-4 hover:pb-2 hover:border-white">About Us</span>
                                <span className="2xl:mx-4 xl:mx-3 lg:mx-2 font-light text-white 2xl:text-xl text-sm">|</span>
                            </Link>
                        </li>
                        <li>
                            {/* <button className="outline outline-2 hover:bg-white lg:mt-3 lg:mr-12 float-right h-12 w-52 rounded-3xl ml-auto text-base font-light text-white hover:text-maincolor hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"> <i className="fa fa-graduation-cap mr-1"></i> I want to Teach</button> */}
                            <div class="dropdown dropdown-end">
                                <label tabindex="0" className="">
                                    <button className="outline outline-2 hover:bg-white 2xl:mt-3 2xl:mr-12 xl:mt-2 xl:mr-10 lg:mt-2 lg:mr-5 float-right 2xl:h-12 2xl:w-52 xl:h-10 xl:w-44 lg:h-8 lg:w-36 rounded-3xl ml-auto 2xl:text-base xl:text-sm lg:text-xs font-light text-white hover:text-maincolor">
                                        <i className="fa fa-graduation-cap mr-1"></i>
                                        I want to Teach
                                    </button>
                                </label>
                                <ul tabindex="0" className="2xl:mt-20 xl:mt-20 lg:mt-20 2xl:-mr-10 justify-center dark:bg-dark-color1 p-8 shadow-lg menu menu-compact dropdown-content flex bg-base-100 rounded-box w-96">
                                    <div className="h-4 w-4 bg-white dark:bg-dark-color1 2xl:ml-40 rotate-45 2xl:-mt-10 rounded-sm"></div>
                                    <form className="flex flex-wrap 2xl:w-full">
                                        <div className="2xl:ml-16 2xl:mt-6">
                                            <img className="2xl:h-24" src={BlackMainLogo} alt="" />
                                        </div>
                                        <h6 className="text-maingray 2xl:font-semibold 2xl:text-xl 2xl:-mt-2 2xl:mb-5 2xl:ml-20 dark:text-white">
                                            Sign in to
                                            <span className="text-maincolor">igLearn</span>
                                        </h6>
                                        <div className="flex flex-wrap">
                                            <div className="form-floating mb-3 2xl:w-full xl:w-full lg:w-full">
                                                <input type="email"
                                                    value={teacherEmail}
                                                    onChange={(e) => setTeacherEmail(e.target.value)}
                                                    className="form-control bg-gray-100 dark:bg-dark-color2 dark:text-white block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border-none rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput" className="text-gray-700 dark:text-gray-400">Email address</label>
                                            </div>
                                            <div className="form-floating mb-3 2xl:w-full xl:w-full lg:w-full">
                                                <input type="password"
                                                    value={teacherPassword}
                                                    onChange={(e) => setTeacherPassword(e.target.value)}
                                                    className="form-control bg-gray-100 dark:bg-dark-color2 dark:text-white block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border-none rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingPassword" placeholder="Password" />
                                                <label for="floatingPassword" className="text-gray-700 dark:text-gray-400">Password</label>
                                            </div>

                                            <div className="flex justify-between items-center mb-6">
                                                <div className="form-group form-check">
                                                    <input type="checkbox"
                                                        value={keep_login}
                                                        onChange={e => setKeepLoggin(e.target.checked)}
                                                        className="default:ring-8" />
                                                    <label className="form-check-label inline-block font-light 2xl:text-sm mx-2 dark:text-white" for="inlineCheckbox1"> Remember me</label>
                                                </div>
                                                <Link className="font-light 2xl:text-sm hover:underline p-2 float-right right-0 mr-0 flex dark:text-white" to="/forget-password">Forgot password</Link>
                                            </div>

                                            <div className="2xl:w-44 flex 2xl:mt-5 btn-center1 2xl:ml-20 bg-maincolor rounded-lg 2xl:pt-2 2xl:pb-2">
                                                <Link>
                                                    <button
                                                        onClick={TeacherLoginSubmit}
                                                        className="text-base 2xl:font-normal leading-tight text-white mx-2 h-8">
                                                        Sign in
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                    <h6 className="font-normal 2xl:mt-5 2xl:ml-16 text-black 2xl:text-sm dark:text-white"> Don't have an account? <span className="hover:underline text-maincolor"><Link to="/registration">Sign Up</Link></span></h6>
                                </ul>
                            </div>
                        </li>
                        <li className="2xl:mr-10 xl:mr-10 lg:mr-5">
                            {/* <button className="outline outline-2 hover:bg-white lg:mt-3 lg:mr-12 float-right h-12 w-52 rounded-3xl ml-auto text-base font-light text-white hover:text-maincolor"> <i className="fa fa-book-reader mr-1"></i> I want to Learn</button> */}
                            <div class="dropdown dropdown-end">
                                <label tabindex="0" className="">
                                    <button className="outline outline-2 hover:bg-white 2xl:mt-3 2xl:mr-12 xl:mt-2 xl:mr-10 lg:mt-2 lg:mr-5 float-right 2xl:h-12 2xl:w-52 xl:h-10 xl:w-44 lg:h-8 lg:w-36 rounded-3xl ml-auto 2xl:text-base xl:text-sm lg:text-xs font-light text-white hover:text-maincolor"> <i className="fa fa-book-reader mr-1"></i> I want to Learn</button>
                                </label>
                                <ul tabindex="0" className="mt-20 2xl:-mr-10 justify-center p-8 dark:bg-dark-color1 shadow-lg menu menu-compact dropdown-content flex bg-base-100 rounded-box w-96">
                                    <div className="h-4 w-4 bg-white dark:bg-dark-color1 2xl:ml-40 rotate-45 2xl:-mt-10 rounded-sm"></div>
                                    <form className="flex flex-wrap 2xl:w-full">
                                        <div className="2xl:ml-16 2xl:mt-6">
                                            <img className="2xl:h-24" src={BlackMainLogo} alt="" />
                                        </div>
                                        <h6 className="text-maingray 2xl:font-semibold 2xl:text-xl 2xl:-mt-2 2xl:mb-5 2xl:ml-20 dark:text-white">Sign in to <span className="text-maincolor">igLearn</span></h6>
                                        <div className="flex flex-wrap">
                                            <div className="form-floating mb-3 2xl:w-full ">
                                                <input type="email"
                                                    value={studentEmail}
                                                    onChange={(e) => setStudentEmail(e.target.value)}
                                                    className="form-control bg-gray-100 dark:bg-dark-color2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 dark:text-white bg-clip-padding border-none rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput" className="text-gray-700 dark:text-gray-400">Email address</label>
                                            </div>
                                            <div className="form-floating mb-3 2xl:w-full">
                                                <input type="password"
                                                    value={studentPassword}
                                                    onChange={(e) => setStudentPassword(e.target.value)}
                                                    className="form-control bg-gray-100 dark:bg-dark-color2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 dark:text-white bg-clip-padding border-none rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingPassword" placeholder="Password" />
                                                <label for="floatingPassword" className="text-gray-700 dark:text-gray-400">Password</label>
                                            </div>

                                            <div className="flex justify-between items-center mb-6">
                                                <div className="form-group form-check">
                                                    <input type="checkbox"
                                                        value={keep_login}
                                                        onChange={e => setKeepLoggin(e.target.checked)}
                                                        className="default:ring-8" />
                                                    <label className="form-check-label inline-block font-light 2xl:text-sm mx-2 dark:text-white" for="inlineCheckbox1"> Remember me</label>
                                                </div>
                                                <Link className="font-light 2xl:text-sm hover:underline p-2 float-right right-0 mr-0 flex dark:text-white" to="/forget-password">Forgot password</Link>
                                            </div>

                                            <div className="2xl:w-44 flex 2xl:mt-5 btn-center1 2xl:ml-20 bg-maincolor rounded-lg 2xl:pt-2 2xl:pb-2">
                                                <Link>
                                                    <button onClick={StudentLoginSubmit} className="text-base 2xl:font-normal leading-tight text-white mx-2 h-8">
                                                        Sign in
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                    <h6 className="font-normal 2xl:mt-5 2xl:ml-16 text-black 2xl:text-sm dark:text-white"> Don't have an account? <span className="hover:underline text-maincolor"><Link to="/registration">Sign Up</Link></span></h6>
                                </ul>
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>
        </Fragment>
    );
}
export default NavBarTop;