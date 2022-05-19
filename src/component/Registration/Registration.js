import React, { useState, Fragment } from "react";
import LoginImg from "../../asset/images/banner/login.png";
import { Link } from "react-router-dom";
import "../../asset/css/login.css";
import { useQuery } from "react-query";
import ApiUrl from "../../Api/ApiUrl";
import axios from "axios";

function Registration() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [country_id, setCountry_id] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirm_password] = useState('')
    const [receive_marketing_email_update, setReceive_marketing_email_update] = useState(false)
    const [accept_terms_condition, setAccept_terms_condition] = useState(false)

    async function createPost() {
        const data = {
            name: name,
            surname: surname,
            email: email,
            country_id: country_id,
            password: password,
            confirm_password: confirm_password,
            receive_marketing_email_update: receive_marketing_email_update,
            accept_terms_condition: accept_terms_condition
        }
        const headers={
            'Accept-Language': 'bn',
            'Content-Type': 'application/json',
        }
        // const reg_custom_utility = {
        //     method: 'post',
        //     headers: new Headers({
        //         // 'Accept-Language': 'en',
        //         'Content-Type': 'application/json'
        //     }),
        //     body: JSON.stringify(data)
        // }
        axios.post(ApiUrl.BaseUrl + 'user-authentication/api/student-registration-new/',data,  { headers }).then((response) => {
            if (response.data.error === false) {
                console.log('registrationg succesffully');
            }
        });

        // const registration_response = await (await fetch(ApiUrl.BaseUrl + "user-authentication/api/student-registration-new/", reg_custom_utility))
        // const reg_data = await registration_response.json();
        // console.log('login response = ', registration_response)
        // console.log('message = ', registration_response.error);
        // alert(reg_data.message)

    }

    const custom_headers = {
        method: 'get',
        headers: new Headers({
            'Accept-Language': 'en',
            'Content-Type': 'application/json'
        })
    }

    const fetchCountry = async () =>
        await (await fetch(ApiUrl.BaseUrl + "api/v2/country-info/", custom_headers)).json();
    const { data, error, status, isLoading, isError, isLoadingError } = useQuery("country", fetchCountry);
    const extra = useQuery("country", fetchCountry);
    console.log("dt =", data)
    console.log("Check Values =", extra)
    const test = "test1";

    if (status === 'loading') {
        //if (typeof(data) === 'undefined'){
        return (
            <div className="container my-12">
                <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">Top Categories </h4>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    <h1>Loading</h1>
                </div>
            </div>
        );
    } else if (status === 'success') {
        // const html_country = data.data.map((country, index) => (
        //     <option value={country.country_id}>{country.country_name}</option>
        // ))

        return (
            <Fragment>
                <section className="md:h-screen bg-login-bg-color">
                    <div className="container h-full lg:pl-32 lg:pr-32">
                        <div className="flex justify-center items-center flex-wrap text-gray-800">
                            <div className="xl:w-12/12 lg:w-12/12 mt-10">
                                <div className="block bg-white shadow-lg">
                                    <div className="lg:flex lg:flex-wrap">

                                        <div
                                            className="lg:w-4/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                                            <div className="text-white">
                                                <img className="" src={LoginImg} alt=""/>
                                            </div>
                                        </div>

                                        <div className="lg:w-8/12 px-4 md:px-0">
                                            <div className="md:p-8 md:mx-6">
                                                <div className="text-center">
                                                    <h4 className="text-4xl font-semibold lg:mt-16 mb-12 pb-1">Registration</h4>
                                                </div>

                                                <form className="space-y-5 lg:mt-8">

                                                    <div className="flex flex-auto">

                                                        <div className="w-1/2 mb-4 relative px-1">
                                                            <input id="name"
                                                                className="rounded px-4 input active:outline-none pt-5 block w-full bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                                type="text"
                                                                value={name}
                                                                onChange={e => setName(e.target.value)}
                                                                autoFocus
                                                                required />
                                                            <label htmlFor="name"
                                                                className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-CourseTitle text-base mt-2 cursor-text">Name <span>*</span></label>
                                                        </div>

                                                        <div className="w-1/2 mb-4 relative px-1">
                                                            <input id="name"
                                                                className="rounded px-4 input active:outline-none pt-5 block w-full bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                                type="text"
                                                                value={surname} onChange={e => setSurname(e.target.value)}
                                                                autoFocus />
                                                            <label htmlFor="name"
                                                                className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-CourseTitle text-base mt-2 cursor-text">Surename</label>
                                                        </div>

                                                    </div>

                                                    <div className="flex flex-auto">
                                                        <div className="w-1/2 mb-4 relative px-1">
                                                            <input id="name"
                                                                className="rounded px-4 input active:outline-none pt-5 block w-full bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                                type="email"
                                                                value={email} onChange={e => setEmail(e.target.value)}
                                                                autoFocus />
                                                            <label htmlFor="name"
                                                                className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-CourseTitle text-base mt-2 cursor-text">Email</label>
                                                        </div>

                                                        <div className="w-1/2 mb-4 relative px-1">
                                                            <select value={country_id} onChange={e => setCountry_id(e.target.value)}
                                                                className="appearance-none block w-full bg-BgLoveIcon border-none py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                                id="grid-state">
                                                                <option className="text-CourseTitle selected">Country
                                                                </option>
                                                                {
                                                                    data.data.map((country, index) => (
                                                                        <option value={country.country_id}>{country.country_name}</option>
                                                                    ))
                                                                }

                                                            </select>
                                                            <div
                                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-CourseTitle">
                                                                <svg className="fill-current h-4 w-4"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20">
                                                                    <path
                                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                                </svg>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="flex flex-auto">
                                                        <div className="w-1/2 mb-4 relative px-1">
                                                            <input id="password"
                                                                className="w-full rounded px-3 pt-5 focus:outline-none active:outline-none input block bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                                type="password" value={password} onChange={e => setPassword(e.target.value)} />
                                                            <label htmlFor="password"
                                                                className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text">Password</label>
                                                        </div>
                                                        <div className="w-1/2 mb-4 relative px-1">
                                                            <input id="password"
                                                                className="w-full rounded px-3 pt-5 focus:outline-none active:outline-none input block bg-BgLoveIcon border-none py-5 mb-3 leading-tight focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                                type="password" value={confirm_password} onChange={e => setConfirm_password(e.target.value)} />
                                                            <label htmlFor="password"
                                                                className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text">Confirm
                                                                Password</label>
                                                        </div>
                                                    </div>


                                                    <div className="flex justify-between items-center mb-6">
                                                        <div className="form-group form-check">
                                                            <input type="checkbox" className="default:ring-8" onChange={e => setAccept_terms_condition(e.target.checked)} />
                                                            <label
                                                                className="form-check-label inline-block font-light lg:text-sm mx-2"
                                                                htmlFor="inlineCheckbox1"> Accept Terms &
                                                                Condition</label>
                                                        </div>
                                                        <div className="form-group form-check">
                                                            <input type="checkbox" className="default:ring-8" onChange={e => setReceive_marketing_email_update(e.target.checked)} />
                                                            <label
                                                                className="form-check-label inline-block font-light lg:text-sm mx-2"
                                                                htmlFor="inlineCheckbox1"> Receive marketing email
                                                                update</label>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-center">
                                                        <div className="w-2/4 mt-7 text-center lg:w-2/4 bg-maincolor rounded-sm lg:pt-4 lg:pb-4">
                                                            <Link onClick={createPost}><span
                                                                className="text-lg font-normal leading-tight text-white mx-2 h-11">REGISTER</span></Link>
                                                        </div>
                                                    </div>

                                                </form>


                                                <div className="mt-8 text-center">
                                                    <div className="lg:mt-14">
                                                        <span className="font-normal text-black lg:text-base"> Already have an account? <span
                                                            className="hover:underline"><Link to="/login/">Sign In</Link></span></span>
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
}

export default Registration;