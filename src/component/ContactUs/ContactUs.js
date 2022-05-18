import React, {useState,Fragment} from "react";
import { Link } from "react-router-dom";
import ApiUrl from "../../Api/ApiUrl";
import { useMutation } from 'react-query'
import { useQuery } from "react-query";
import {axios} from 'axios';

function ContactUs(){
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
        console.log(' contact_us_data = ', contact_us_data);
        // const contact_us_custom_utility =  { 
        //     method: 'post', 
        //     headers: new Headers({
        //         'Accept-Language': 'en', 
        //         'Content-Type': 'application/json'
        //     }),
        //     body: JSON.stringify(contact_us_data)
        // }
        const headers={
            'Accept-Language': 'bn',
            'Content-Type': 'application/json',
        }
        axios.post(ApiUrl.BaseUrl + 'user-authentication/api/contact-us/',contact_us_data,  { headers }).then((response) => {
            if (response.data.error === false) {
                console.log('contact succesffully');
            }
        });
        // const contact_us_response = await (await fetch(ApiUrl.BaseUrl + "user-authentication/api/contact-us/", contact_us_custom_utility))
        // const contact_data = await contact_us_response.json();
        // console.log('contact_us response = ', contact_us_response)
        // console.log('message = ', contact_us_response.error);
        // alert(contact_data.message)
        
    }

    const custom_headers =  { 
        method: 'get',
        headers: new Headers({
            'Accept-Language': 'en', 
            'Content-Type': 'application/json'
        })
    }

    const fetchCountry = async () =>
        await (await fetch(ApiUrl.BaseUrl + "api/v2/country-info/", custom_headers)).json();
    const country = useQuery("country", fetchCountry);
    const country_response_data = country.data;

    
    const fetchCity = async () =>
        await (await fetch(ApiUrl.BaseUrl + "api/v2/city-info/", custom_headers)).json();
    const city = useQuery("city", fetchCity);
    const city_response_data = city.data;

    

    if (country.status === 'loading' || city.status === 'loading'){
        return (
            <div className="container my-12">
                <h4 className="text-4xl	font-semibold text-sectionTitleColor ml-3">Top Categories </h4>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    <h1>Loading</h1>
                </div>
            </div>
        );
    }else if(country.status === 'success' || city.status === 'success'){

        // const html_country = country_response_data.data.map((country, index) => (
        //     <option value={country.country_id}>{country.country_name}</option>
        // ))
        // const html_city = city_response_data.data.map((city, index) => (
        //     <option value={city.city_id}>{city.city_name}</option>
        // ))
        
        return (
            <Fragment>
                <div className="ContactBanner">
                    <div className="container">
                        <div className="flex flex-auto">
                            <div className="lg:basis-1/12">

                            </div>

                            <div className="lg:basis-4/12 lg:pl-12 lg:pr-6">
                                <h2 className="text-sectionTitleColor lg:font-semibold lg:text-5xl lg:mt-40 ">Get in Touch</h2>
                                <h2 className="text-client-section-des lg:font-normal lg:text-base lg:mb-6 lg:mt-10">Fill in the form and we’ll analyse your website and get back to you with 100% specific recommendations on how to improve it back to you with 100% specific</h2>
                            </div>

                            <div className="lg:basis-6/12 lg:p-2">
                                <div className="bg-white rounded-xl shadow-client border-none lg:p-12 w-auto lg:mt-10">
                                    <h2 className="text-sectionTitleColor lg:font-semibold lg:text-2xl text-center lg:mb-6">We would like to hear from you</h2>
                                    <h2 className="text-client-section-des lg:font-normal lg:text-sm text-center lg:mb-6">Fill in the form and we’ll analyse your website and get back to you with 100% specific recommendations on how to improve it</h2>

                                    <form className="w-full">
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 
                                                leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" 
                                                id="grid-first-name" type="text" value={name}
                                                                    onChange={e=>setName(e.target.value)} placeholder="Name *" />
                                            </div>

                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 
                                                mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal 
                                                text-CourseTitle" id="grid-first-name" type="text" value={surname}
                                                onChange={e=>setSurname(e.target.value)} placeholder="Surname *" />
                                            </div>

                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3
                                                leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                id="grid-first-name" type="text" value={phone_number}
                                                onChange={e=>setPhone_number(e.target.value)} placeholder="Phone Number *" />
                                            </div>


                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 
                                                leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" 
                                                id="grid-first-name" type="text" value={job_title}
                                                onChange={e=>setJob_title(e.target.value)} placeholder="Job Title *" />
                                            </div>


                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3
                                                leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" 
                                                id="grid-first-name" type="text" value={professional_email}
                                                onChange={e=>setProfessional_email(e.target.value)} placeholder="Professional Email *" />
                                            </div>

                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 
                                                leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" 
                                                id="grid-first-name" type="text" value={company_name}
                                                onChange={e=>setCompany_name(e.target.value)} placeholder="Company Name *" />
                                            </div>


                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3
                                                leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                id="grid-first-name" type="text" value={company_size}
                                                onChange={e=>setCompany_size(e.target.value)} placeholder="Company Size *" />
                                            </div>

                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3
                                                mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle"
                                                id="grid-first-name" type="text" alue={number_of_learner}
                                                onChange={e=>setNumber_of_learner(e.target.value)} placeholder="Number of Learner *" />
                                            </div>

                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <div className="relative">
                                                    <select value={country_id} onChange={e=>setCountry_id(e.target.value)} className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" id="grid-state">
                                                        <option className="text-CourseTitle selected">Name of Country</option>
                                                        {/* {html_country} */}
                                                        {
                                                            country_response_data.data.map((country, index) => (
                                                                    <option value={country.country_id}>{country.country_name}</option>
                                                                ))
                                                        }
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-CourseTitle">
                                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <div className="relative">
                                                    <select value={city_id} onChange={e=>setCity_id(e.target.value)} className="appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" id="grid-state">
                                                        <option>City of Company</option>
                                                        {/* {html_city} */}
                                                        {
                                                            city_response_data.data.map((city, index) => (
                                                                <option value={city.city_id}>{city.city_name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-CourseTitle">
                                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="lg:w-full md:w-full px-3 mb-6 md:mb-0">
                                                <textarea className="resize-y appearance-none block w-full bg-BgLoveIcon border-none py-4 px-3 mb-3 
                                                leading-tight focus:outline-none focus:bg-BgLoveIcon text-sm font-normal text-CourseTitle" value={message}
                                                onChange={e=>setMessage(e.target.value)}
                                                placeholder="Message *"></textarea>
                                            </div>

                                            <h2 className="text-client-section-des lg:font-normal lg:text-xs text-center lg:mb-6 mt-4">Fill in the form and we’ll analyse your website and get back to you with 100% specific recommendations on how to improve it</h2>

                                            <div className="mt-8 flex flex-auto image-center">
                                                <Link onClick={createContactUs}><span className="text-lg font-normal leading-tight bg-maincolor text-white lg:pl-24 lg:pr-24 lg:pt-4 lg:pb-4 rounded-sm mx-2 h-11">SUBMIT</span></Link>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="lg:basis-1/12">

                            </div>


                        </div>
                    </div>
                </div >
            </Fragment >
        );
    }
}

export default ContactUs;