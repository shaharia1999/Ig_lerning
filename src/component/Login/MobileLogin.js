import React, { useState, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../asset/css/login.css";
import ApiUrl from "../../Api/ApiUrl";
import { FaFacebookSquare, FaGoogle, FaTwitter } from "react-icons/fa";
import axios from "axios";

function MobileLogin() {
    const [username_or_email, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keep_login, setKeepLoggin] = useState(false);
    const [homeRedirect1, setHomeRedirect1] = useState(false);

    const onHomeRedirect1 = () => {
        if (homeRedirect1 === true) {
            return (<Redirect to="/" />);
        }
    }

    async function submitLogin() {
        const login_data = {
            username_or_email: username_or_email,
            password: password
        }

        axios.post(ApiUrl.BaseUrl + 'user-authentication/api/login/', login_data).then((response) => {
            if (response.data.error === false) {
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('refresh_token', response.data.refresh_token);
                localStorage.setItem('user_data', JSON.stringify(response.data.data));
                localStorage.setItem('keep_login', keep_login);
                setHomeRedirect1(true);
            }
        });
    }

    return (
        <Fragment>
            <section className="h-screen bg-login-bg-color">
                <div className="container pl-4 pr-4">
                    <div className="flex justify-center items-center flex-wrap text-gray-800">
                        <div className="w-full">
                            <div className="flex flex-wrap g-0">
                                <div className="w-full md:px-16">
                                    <div className="sm:px-12 px-2 md:p-16 md:mt-12 mx-2 md:bg-white">
                                        <div className="text-center">
                                            <h4 className="text-2xl font-semibold mt-10 md:mt-2 mb-8 pb-1">Login</h4>
                                        </div>

                                        <form className="space-y-5 mt-8">
                                            <div class="relative mb-4">
                                                <input type="email"
                                                    id="email"
                                                    value={username_or_email}
                                                    onChange={e => setUsernameOrEmail(e.target.value)}
                                                    className="block rounded px-4 pb-4 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-none border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " />
                                                <label for="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 cursor-pointer peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Username or Email</label>
                                            </div>

                                            <div class="relative mb-4">
                                                <input type="password"
                                                    id="password"
                                                    value={password}
                                                    onChange={e => setPassword(e.target.value)}
                                                    className="block rounded px-4 pb-4 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-none border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " />
                                                <label for="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 cursor-pointer peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Password</label>
                                            </div>

                                            <div className="flex justify-between items-center mb-6">
                                                <div className="form-group form-check">
                                                    <input type="checkbox"
                                                        value={keep_login}
                                                        onChange={e => setKeepLoggin(e.target.checked)}
                                                        className="default:ring-8" />
                                                    <label className="form-check-label inline-block font-light text-sm mx-2" for="inlineCheckbox1"> keep me logged in</label>
                                                </div>
                                                <Link className="font-light text-sm hover:underline p-2 float-right" to="/forget-password">Forgot password?</Link>
                                            </div>

                                            <div onClick={submitLogin} className="cursor-pointer mt-8 flex flex-auto rounded-sm ">
                                                <Link className="bg-maincolor text-center w-full pt-4 pb-4">
                                                    <span 
                                                        className="text-lg font-normal text-center leading-tight text-white pl-24 pr-24 mx-2 h-11">
                                                        LOGIN
                                                    </span>
                                                </Link>
                                            </div>
                                        </form>


                                        <div className="mt-8 text-center">
                                            <span className="font-normal text-client-section-des text-base"> or Login using social media</span>
                                            <ul className="flex flex-auto justify-center -mt-4">
                                                <button className="p-3 mx-2 social-icons-login-fb rounded-full text-2xl font-semibold mt-9">
                                                    <FaFacebookSquare className="text-facebook-color" />
                                                </button>
                                                <button className="p-3 mx-2 social-icons-login-twitter rounded-full text-2xl font-semibold mt-9">
                                                    <FaTwitter className="text-twitter-color" />
                                                </button>
                                                <button className="p-3 mx-2 social-icons-login-google rounded-full text-2xl font-semibold mt-9">
                                                    <FaGoogle className="text-google-color" />
                                                </button>
                                            </ul>
                                            <div className="mt-8 mb-8">
                                                <span className="font-normal text-black text-base"> Don't have an account?
                                                    <span className="hover:underline">
                                                        <Link to="/registration"> Sign Up</Link>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                {onHomeRedirect1()}
            </section>
        </Fragment>
    );
}
export default MobileLogin;