import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ContactTrainer() {
    let {id} = useParams();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const ContactTrainerSubmit = (event) => {
        const trainer_contact_data = {
            name: name,
            surname: surname,
            email: email,
            phone_number: phone_number,
            message: message,
            teacher_id: `${id}`
        }
        console.log('trainer data = ', trainer_contact_data);
        axios.post(`${ApiUrl.BaseUrl}api/course/contact-with-trainer/`, trainer_contact_data).then((response) => {
            if(response.data.error === false)
            {
                alert('success')
            }
            event.preventDefault()
        })
    }

    return (
        <Fragment>
            <div className="bg-breadcrumbs dark:bg-dark-color2 rounded-xl xl:p-6">
                <h6 className="text-maingray xl:font-medium xl:text-2xl text-center xl:mt-8 dark:text-gray-200">Contact Nicola for a Personalized Training.</h6>
                <h6 className="text-center xl:text-base xl:pl-32 xl:pr-32 xl:mt-5 xl:mb-5 dark:text-gray-400">Fill in the form and we’ll analyse your website and get back to you with 100% specific recommendations on how to improve it</h6>
                <form className="">
                    <div className="flex flex-basis mb-6">
                        <div className="xl:w-6/12 px-3 mb-6 xl:mb-0">
                            <input 
                                className="bg-white dark:bg-dark-color3 w-full xl:font-normal text-breadcrumbs-text text-sm border border-none rounded-sm py-4 xl:px-4 mb-3 leading-tight focus:outline-none"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Name" />
                        </div>
                        <div className="xl:w-6/12 px-3">
                            <input 
                                className="bg-white dark:bg-dark-color3 w-full xl:font-normal text-breadcrumbs-text text-sm border border-none rounded-sm py-4 xl:px-4 mb-3 leading-tight focus:outline-none"
                                type="text"
                                value={surname}
                                onChange={e => setSurname(e.target.value)}
                                placeholder="Surename" />
                        </div>
                    </div>

                    <div className="flex flex-wrap mb-6">
                        <div className="xl:w-1/2 px-3 mb-6 xl:mb-0">
                            <input 
                                  className="bg-white dark:bg-dark-color3 w-full xl:font-normal text-breadcrumbs-text text-sm border border-none rounded-sm py-4 xl:px-4 mb-3 leading-tight focus:outline-none"
                                  type="text"
                                  value={email}
                                  onChange={e => setEmail(e.target.value)}
                                  placeholder="Email Address" />
                        </div>
                        <div className="xl:w-1/2 px-3">
                            <input 
                                 className="bg-white dark:bg-dark-color3 w-full xl:font-normal text-breadcrumbs-text text-sm border border-none rounded-sm py-4 xl:px-4 mb-3 leading-tight focus:outline-none"
                                 type="text"
                                 value={phone_number}
                                 onChange={e => setPhoneNumber(e.target.value)}
                                 placeholder="Phone Number" />
                        </div>
                    </div>

                    <div className="flex flex-wrap mb-6">
                        <div className="px-3 xl:w-full">
                            <textarea 
                                className=" no-resize appearance-none block w-full xl:font-normal bg-white dark:bg-dark-color3 text-breadcrumbs-text text-sm border-none rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none h-48 resize-none"
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                        </div>
                    </div>

                    <div className="flex flex-wrap mb-6">
                        <div className="px-3 xl:w-full flex justify-center">
                            <Link onClick={ContactTrainerSubmit} 
                            className="bg-maincolor border-none rounded-md text-center text-white xl:text-lg xl:pt-4 xl:h-14 xl:w-72">SUBMIT</Link>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default ContactTrainer;