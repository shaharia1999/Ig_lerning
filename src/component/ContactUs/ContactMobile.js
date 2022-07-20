import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import ApiUrl from "../../Api/ApiUrl";
import axios from "axios";
import Location from "../../asset/images/icon/location.svg";
import Mail from "../../asset/images/icon/icon_mail.svg";
import Phone from "../../asset/images/icon/icon_phone.svg";

function ContactMobile() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [professional_email, setProfessional_email] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [job_title, setJob_title] = useState('')
    const [company_name, setCompany_name] = useState('')
    const [company_size, setCompany_size] = useState('')
    const [number_of_learner, setNumber_of_learner] = useState('')
    const [country_id, setCountry_id] = useState('')
    const [city_id, setCity_id] = useState('')
    const [message, setMessage] = useState('')
    const [country, setCountry] = React.useState([]);
    const [city, setCitys] = React.useState([]);

    const userTheme = localStorage.getItem("theme");
    if (userTheme === null) {
        localStorage.setItem("theme", "light");
    }

    async function createContactUs() {
        const contact_us_data = {
            name: name,
            surname: surname,
            professional_email: professional_email,
            phone_number: phone_number,
            job_title: job_title,
            company_name: company_name,
            company_size: company_size,
            number_of_learner: number_of_learner,
            country_id: country_id,
            city_id: city_id,
            message: message
        }

        axios.post(ApiUrl.BaseUrl + 'user-authentication/api/contact-us/', contact_us_data).then((response) => {
            if (response.data.error === false) {
                console.log('contact succesffully');
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

    useEffect(() => {
        axios.get(ApiUrl.BaseUrl + 'api/v2/city-info/').then((response) => {
            if (response.data.error === false) {
                setCitys(response.data.data);
            }
        });
    }, []);

    return (
        <Fragment>
            <div className="bg-white">
                <div className="container">
                    <div className="flex flex-wrap">

                        <div className="w-full sm:px-12 p-4">
                            <div className="bg-white rounded-sm shadow-client border-none sm:p-8 p-4 w-auto mt-6">
                                <h2 className="text-sectionTitleColor font-semibold text-xl text-center mb-0">We would like to hear from you</h2>
                                <h2 className="text-client-section-des font-normal text-xs text-center mb-3 p-4">Fill in the form and we’ll analyse your website and get back to you with 100% specific recommendations on how to improve it</h2>

                                <form className="w-full">
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3 mb-3">
                                            <input className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 
                                            leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                id="grid-first-name"
                                                type="text"
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                                placeholder="Name *" />
                                        </div>

                                        <div className="w-full px-3 mb-3">
                                            <input className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 
                                            mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal 
                                            text-CourseTitle"
                                                id="grid-first-name"
                                                type="text"
                                                value={surname}
                                                onChange={e => setSurname(e.target.value)}
                                                placeholder="Surname *" />
                                        </div>

                                        <div className="w-full px-3 mb-3">
                                            <input className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3
                                            leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                id="grid-first-name"
                                                type="text"
                                                value={phone_number}
                                                onChange={e => setPhone_number(e.target.value)}
                                                placeholder="Phone Number *" />
                                        </div>


                                        <div className="w-full px-3 mb-3">
                                            <input className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 
                                            leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                id="grid-first-name"
                                                type="text"
                                                value={job_title}
                                                onChange={e => setJob_title(e.target.value)}
                                                placeholder="Job Title *" />
                                        </div>


                                        <div className="w-full px-3 mb-3">
                                            <input className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3
                                            leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                id="grid-first-name"
                                                type="text"
                                                value={professional_email}
                                                onChange={e => setProfessional_email(e.target.value)}
                                                placeholder="Professional Email *" />
                                        </div>

                                        <div className="w-full px-3 mb-3">
                                            <input className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 
                                            leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                id="grid-first-name"
                                                type="text"
                                                value={company_name}
                                                onChange={e => setCompany_name(e.target.value)}
                                                placeholder="Company Name *" />
                                        </div>


                                        <div className="w-full px-3 mb-3">
                                            <input className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3
                                            leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                id="grid-first-name"
                                                type="text"
                                                value={company_size}
                                                onChange={e => setCompany_size(e.target.value)}
                                                placeholder="Company Size *" />
                                        </div>

                                        <div className="w-full px-3 mb-3">
                                            <input className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3
                                            mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                id="grid-first-name"
                                                type="text"
                                                value={number_of_learner}
                                                onChange={e => setNumber_of_learner(e.target.value)}
                                                placeholder="Number of Learner *" />
                                        </div>

                                        <div className="w-full px-3 mb-3">
                                            <div className="relative">
                                                <select
                                                    value={country_id} onChange={e => setCountry_id(e.target.value)}
                                                    className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                    id="grid-state">
                                                    <option className="text-CourseTitle selected">Name of Country</option>
                                                    {
                                                        country.map((country_c, index) => (
                                                            <option value={country_c.country_id}>{country_c.country_name}</option>
                                                        ))
                                                    }
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-CourseTitle">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full px-3 mb-3">
                                            <div className="relative">
                                                <select
                                                    value={city_id} onChange={e => setCity_id(e.target.value)}
                                                    className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" id="grid-state">
                                                    <option>City of Company</option>
                                                    {
                                                        city.map((city_c, index) => (
                                                            <option value={city_c.city_id}>{city_c.city_name}</option>
                                                        ))
                                                    }
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-CourseTitle">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full px-3 mb-3">
                                            <textarea
                                                className="resize-y appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                value={message}
                                                onChange={e => setMessage(e.target.value)}
                                                placeholder="Message *"></textarea>
                                        </div>

                                        <div className="mt-2 w-full mx-4 bg-maincolor pt-2 pb-2 flex flex-wrap image-center mb-0 rounded-sm">
                                            <Link onClick={createContactUs}>
                                                <span className="text-lg font-normal text-white mx-2 h-16">SUBMIT</span>
                                            </Link>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>


                        <div className="w-full sm:pl-10 pl-6 pr-6">
                            <h2 className="text-sectionTitleColor font-semibold text-xl mt-5">Get in Touch</h2>

                            <div className="flex flex-wrap mt-6">
                                <div className="w-2/12">
                                    <img className="h-10 w-10"
                                        src={Location} alt=""
                                    />
                                </div>
                                <div className="w-10/12">
                                    <h6 className="text-maingray text-lg font-medium">We are here:</h6>
                                    <h6 className="text-sm text-gray-400 font-normal">27 Division St, New York, NY 10002, USA</h6>
                                </div>
                            </div>

                            <div className="flex flex-wrap mt-6">
                                <div className="w-2/12">
                                    <img className="h-10 w-10"
                                        src={Phone} alt=""
                                    />
                                </div>
                                <div className="w-10/12">
                                    <h6 className="text-maingray text-lg font-medium">Phone us:</h6>
                                    <h6 className="text-sm text-gray-400 font-normal">+1 (908) 123 4567</h6>
                                </div>
                            </div>

                            <div className="flex flex-wrap mt-6">
                                <div className="w-2/12">
                                    <img className="h-10 w-10"
                                        src={Mail} alt=""
                                    />
                                </div>
                                <div className="w-10/12">
                                    <h6 className="text-maingray text-lg font-medium">Mail us:</h6>
                                    <h6 className="text-sm text-gray-400 font-normal">customerservice@evveress.com</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default ContactMobile;