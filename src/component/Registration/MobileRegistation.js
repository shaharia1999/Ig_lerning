import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../asset/css/login.css";
import ApiUrl from "../../Api/ApiUrl";
import axios from "axios";

function MobileRegistration() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [country_id, setCountry_id] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirm_password] = useState('')
    const [receive_marketing_email_update, setReceive_marketing_email_update] = useState(false)
    const [accept_terms_condition, setAccept_terms_condition] = useState(false)
    const [country, setCountry] = React.useState([]);

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

        axios.post(ApiUrl.BaseUrl + 'user-authentication/api/student-registration-new/', data).then((response) => {
            if (response.data.error === false) {

            }
        });
    }

    useEffect(() => {
        axios.get(ApiUrl.BaseUrl + 'api/v2/country-info/').then((response) => {
            if (response.data.error === false) {
                setCountry(response.data.data);
            }
        });
    }, []);

    return (
        <Fragment>
            <section className="h-full bg-login-bg-color">
                <div className="container pl-4 pr-4">
                    <div className="flex justify-center items-center flex-wrap text-gray-800">
                        <div className="w-full">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <div className="p-2 mx-2">
                                        <div className="text-center">
                                            <h4 className="text-2xl font-semibold mt-8 mb-8 pb-1">Registration</h4>
                                        </div>

                                        <form className="space-y-5 mt-6">

                                            <div className="w-full mb-4 relative px-1">
                                                <input type="text"
                                                    id="name"
                                                    value={name}
                                                    onChange={e => setName(e.target.value)}
                                                    required
                                                    className="block rounded px-4 pb-4 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-none border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " />
                                                <label for="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 cursor-pointer peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Name</label>
                                            </div>

                                            <div className="w-full mb-4 relative px-1">
                                                <input type="text"
                                                    id="sure_name"
                                                    value={surname}
                                                    onChange={e => setSurname(e.target.value)}
                                                    required
                                                    className="block rounded px-4 pb-4 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-none border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " />
                                                <label for="sure_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 cursor-pointer peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Surename</label>
                                            </div>

                                            <div className="w-full mb-4 relative px-1">
                                                <input type="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={e => setEmail(e.target.value)}
                                                    required
                                                    className="block rounded px-4 pb-4 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-none border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " />
                                                <label for="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 cursor-pointer peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
                                            </div>

                                            <div className="w-full mb-4 relative px-1">
                                                <select value={country_id} onChange={e => setCountry_id(e.target.value)}
                                                    className="appearance-none block w-full bg-BgLoveIcon border-none py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                    id="grid-state">
                                                    <option className="text-CourseTitle selected">Country
                                                    </option>
                                                    {
                                                        country.map((country_c, index) => (
                                                            <option value={country_c.country_id}>{country_c.country_name}</option>
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

                                            <div className="w-full mb-4 relative px-1">
                                                <input type="password"
                                                    id="password"
                                                    value={password}
                                                    onChange={e => setPassword(e.target.value)}
                                                    required
                                                    className="block rounded px-4 pb-4 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-none border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " />
                                                <label for="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 cursor-pointer peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Password</label>
                                            </div>

                                            <div className="w-full mb-4 relative px-1">
                                                <input type="password"
                                                    id="confirm_password"
                                                    value={confirm_password}
                                                    onChange={e => setConfirm_password(e.target.value)}
                                                    required
                                                    className="block rounded px-4 pb-4 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-none border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " />
                                                <label for="confirm_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 cursor-pointer peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Confirm Password</label>
                                            </div>

                                            <div className="flex justify-between items-center mb-4">
                                                <div className="form-group form-check">
                                                    <input type="checkbox"
                                                        className="default:ring-8"
                                                        onChange={e => setAccept_terms_condition(e.target.checked)} />
                                                    <label
                                                        className="form-check-label inline-block font-light text-sm mx-2"
                                                        htmlFor="inlineCheckbox1"> Accept Terms &
                                                        Condition</label>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center mb-4">
                                                <div className="form-group form-check">
                                                    <input type="checkbox"
                                                        className="default:ring-8"
                                                        onChange={e => setReceive_marketing_email_update(e.target.checked)} />
                                                    <label
                                                        className="form-check-label inline-block font-light text-sm mx-2"
                                                        htmlFor="inlineCheckbox1"> Receive marketing email
                                                        update
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="flex justify-center">
                                                <div data-mdb-ripple="true"
                                                    data-mdb-ripple-color="light"
                                                    className="w-full mt-4 text-center bg-maincolor rounded-sm pt-4 pb-4">
                                                    <Link onClick={createPost}>
                                                        <span className="text-lg font-normal leading-tight text-white mx-2 h-11">REGISTER</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </form>


                                        <div className="text-center">
                                            <div className="mt-8 mb-8">
                                                <span className="font-normal text-black text-base"> Already have an account?
                                                    <span className="hover:underline">
                                                        <Link to="/login/">
                                                            Sign In
                                                        </Link>
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

export default MobileRegistration;