import React, { useState, Fragment } from "react";
import LoginImg from "../../asset/images/banner/login.png";
import { Link } from "react-router-dom";
import "../../asset/css/login.css";
import ApiUrl from "../../Api/ApiUrl";
import axios from "axios";

function ForgetPassword() {
    const [email, setEmail] = useState('')

    async function createPost() {
        const data = {
            email: email,
        }
        axios.post(ApiUrl.BaseUrl + 'user-authentication/api/forget-password/', data).then((response) => {
            if (response.data.error === false) {
               
            }
        });
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
                                            <img className="Image" src={LoginImg} alt=''/>
                                        </div>
                                    </div>

                                    <div className="lg:w-6/12 px-4 md:px-0">
                                        <div className="md:p-8 md:mx-6">
                                            <div className="text-center">
                                                <h4 className="text-4xl font-semibold lg:mt-28 mb-4 pb-1">Forget Password</h4>
                                                <h4 className=" text-sm font-normal lg:mt-2 mb-16 pb-1">Enter your email address associated with your account we will send you a link to reset your password</h4>
                                            </div>

                                            <form class="space-y-5 lg:mt-8">
                                                <div class="mb-4 relative">
                                                    <input class="rounded px-3 input active:outline-none pt-5 block w-full bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" type="text" value={email} onChange={e => setEmail(e.target.value)} autofocus />
                                                    <label for="email" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-CourseTitle text-base mt-2 cursor-text">Email</label>
                                                </div>

                                                <div className="w-full mt-8 flex flex-auto lg:w-full image-center bg-maincolor rounded-sm lg:pt-4 lg:pb-4">
                                                <Link onClick={createPost}><span className="text-lg font-normal leading-tight text-white lg:pl-24 lg:pr-24 mx-2 h-11">SUBMIT</span></Link>
                                                </div>
                                            </form>


                                            <div className="mt-8 text-center">
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


export default ForgetPassword;