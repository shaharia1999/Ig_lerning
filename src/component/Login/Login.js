import React, { useState, Fragment } from "react";
import LoginImg from "../../asset/images/banner/login.png";
import { Link } from "react-router-dom";
import "../../asset/css/login.css";
import { useQuery } from "react-query";
import ApiUrl from "../../Api/ApiUrl";
import { FaFacebookSquare, FaGoogle, FaTwitter } from "react-icons/fa";

function Login() {
    const [username_or_email, setUsernameOrEmail] = useState('')
    const [password, setPassword] = useState('')
    const [keep_login, setKeepLoggin] = useState(false)
    console.log('username or email = ', username_or_email);
    console.log('password = ', password);
    console.log('keep login = ', keep_login);

    async function submitLogin(){
        const login_data = {
            'username_or_email': username_or_email,
            'password': password
        }
        const custom_login_headers =  { 
            method: 'post', 
            headers: new Headers({
                'Accept-Language': 'en', 
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(login_data)
        }
        const login_response = await (await fetch(ApiUrl.BaseUrl + "user-authentication/api/login/", custom_login_headers))
        const data = await login_response.json();
        console.log('data = ', data);
        alert(data.message)
    }

    return (
        <Fragment>
            <section className="h-full md:h-screen bg-login-bg-color">
                <div className="container h-full lg:pl-32 lg:pr-32">
                    <div className="flex justify-center items-center flex-wrap h-full text-gray-800">
                        <div className="xl:w-10/12">
                            <div className="block bg-white shadow-lg">
                                <div className="lg:flex lg:flex-wrap g-0">

                                    <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                                        <div className="text-white">
                                            <img className="Image" src={LoginImg} />
                                        </div>
                                    </div>

                                    <div className="lg:w-6/12 px-4 md:px-0">
                                        <div className="md:p-8 md:mx-6">
                                            <div className="text-center">
                                                <h4 className="text-4xl font-semibold lg:mt-16 mb-12 pb-1">Login</h4>
                                            </div>

                                            <form class="space-y-5 lg:mt-8">
                                                <div class="mb-4 relative">
                                                    <input id="email" 
                                                        value={username_or_email}
                                                        onChange={e=>setUsernameOrEmail(e.target.value)}
                                                        class="rounded px-3 input active:outline-none pt-5 block w-full bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" type="text" autofocus />
                                                    <label for="email" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-CourseTitle text-base mt-2 cursor-text">Username or Email</label>
                                                </div>
                                                <div class="mb-4 relative">
                                                    <input id="password" 
                                                        value={password}
                                                        onChange={e=>setPassword(e.target.value)}
                                                        class="w-full rounded px-3 pt-5 focus:outline-none active:outline-none input block bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" type="password" />
                                                    <label for="password" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text">Password</label>
                                                </div>

                                                <div class="flex justify-between items-center mb-6">
                                                    <div class="form-group form-check">
                                                        <input type="checkbox" 
                                                            value={keep_login}
                                                            onChange={e=>setKeepLoggin(e.target.checked)}
                                                         class="default:ring-8" />
                                                        <label class="form-check-label inline-block font-light lg:text-sm mx-2" for="inlineCheckbox1"> keep me logged in</label>
                                                    </div>
                                                    <a class="font-light lg:text-sm hover:underline p-2 float-right" href="#">Forgot password?</a>
                                                </div>

                                                <div className="w-full mt-8 flex flex-auto lg:w-full image-center bg-maincolor rounded-sm lg:pt-4 lg:pb-4">
                                                    <Link onClick={submitLogin}><span className="text-lg font-normal leading-tight text-white lg:pl-24 lg:pr-24 mx-2 h-11">LOGIN</span></Link>
                                                </div>
                                            </form>


                                            <div className="mt-8 text-center">
                                                <span class="font-normal text-client-section-des lg:text-base"> or Login using social media</span>
                                                <ul className="flex flex-auto sm:justify-center xl:justify-center -mt-4">
                                                    <button className="lg:p-3 mx-2 social-icons-login-fb rounded-full text-2xl font-semibold mt-9"><FaFacebookSquare className="text-facebook-color" /></button>
                                                    <button className="lg:p-3 mx-2 social-icons-login-twitter rounded-full text-2xl font-semibold mt-9"><FaTwitter className="text-twitter-color" /></button>
                                                    <button className="lg:p-3 mx-2 social-icons-login-google rounded-full text-2xl font-semibold mt-9"><FaGoogle className="text-google-color" /></button>
                                                </ul>
                                                <div className="lg:mt-14">
                                                    <span class="font-normal text-black lg:text-base"> Don't have an account? <span className="hover:underline"><Link to="/Registration/">Sign Up</Link></span></span>
                                                </div>
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
export default Login;