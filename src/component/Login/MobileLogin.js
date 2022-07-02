import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "../../asset/css/login.css";
import ApiUrl from "../../Api/ApiUrl";
import { FaFacebookSquare, FaGoogle, FaTwitter } from "react-icons/fa";
import axios from "axios";

function MobileLogin() {
    const [username_or_email, setUsernameOrEmail] = useState('')
    const [password, setPassword] = useState('')
    const [keep_login, setKeepLoggin] = useState(false)

    async function submitLogin() {
        const login_data = {
            username_or_email: username_or_email,
            password: password
        }

        axios.post(ApiUrl.BaseUrl + 'user-authentication/api/login/', login_data).then((response) => {
            if (response.data.error === false) {
                localStorage.setItem('access_token', response.data.access_token)
                localStorage.setItem('refresh_token', response.data.refresh_token)
                localStorage.setItem('user_data', JSON.stringify(response.data.data))
                localStorage.setItem('keep_login', keep_login)
            }
        });
    }

    return (
        <Fragment>
            <section className="h-full bg-login-bg-color">
                <div className="container pl-4 pr-4">
                    <div className="flex justify-center items-center flex-wrap text-gray-800">
                        <div className="w-full">
                            <div className="flex flex-wrap g-0">
                                <div className="w-full">
                                    <div className="p-2 mx-2">
                                        <div className="text-center">
                                            <h4 className="text-2xl font-semibold mt-10 mb-8 pb-1">Login</h4>
                                        </div>

                                        <form className="space-y-5 mt-8">
                                            <div className="mb-4 relative">
                                                <input id="email"
                                                    value={username_or_email}
                                                    onChange={e => setUsernameOrEmail(e.target.value)}
                                                    className="rounded px-3 input active:outline-none pt-5 block w-full bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" type="text" autofocus />
                                                <label for="email" className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-CourseTitle text-base mt-2 cursor-text">Username or Email</label>
                                            </div>
                                            <div className="mb-4 relative">
                                                <input id="password"
                                                    value={password}
                                                    onChange={e => setPassword(e.target.value)}
                                                    className="w-full rounded px-3 pt-5 focus:outline-none active:outline-none input block bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" type="password" />
                                                <label for="password" className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text">Password</label>
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

                                            <div className="w-full mt-8 flex flex-auto image-center bg-maincolor rounded-sm pt-4 pb-4">
                                                <Link onClick={submitLogin}><span className="text-lg font-normal leading-tight text-white pl-24 pr-24 mx-2 h-11">LOGIN</span></Link>
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
            </section>
        </Fragment>
    );
}
export default MobileLogin;