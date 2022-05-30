import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import ApiUrl from "../../../Api/ApiUrl";
import { Link } from "react-router-dom";


function ContactTrainer() {

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
            message: message
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
            <div className="bg-breadcrumbs  rounded-xl xl:p-6">
                <h6 className="text-maingray xl:font-medium xl:text-2xl text-center xl:mt-8">Contact Nicola for a Personalized Training.</h6>
                <h6 className="text-center xl:text-base xl:pl-32 xl:pr-32 xl:mt-5 xl:mb-5">Fill in the form and we’ll analyse your website and get back to you with 100% specific recommendations on how to improve it</h6>
                <form class="">
                    <div class="flex flex-basis mb-6">
                        <div class="xl:w-6/12 px-3 mb-6 xl:mb-0">
                            <input 
                                class="bg-white w-full xl:font-normal text-breadcrumbs-text text-sm border border-none rounded-sm py-4 xl:px-4 mb-3 leading-tight focus:outline-none"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Name" />
                        </div>
                        <div class="xl:w-6/12 px-3">
                            <input 
                                class="bg-white w-full xl:font-normal text-breadcrumbs-text text-sm border border-none rounded-sm py-4 xl:px-4 mb-3 leading-tight focus:outline-none"
                                type="text"
                                value={surname}
                                onChange={e => setSurname(e.target.value)}
                                placeholder="Surename" />
                        </div>
                    </div>

                    <div class="flex flex-wrap mb-6">
                        <div class="xl:w-1/2 px-3 mb-6 xl:mb-0">
                            <input 
                                  class="bg-white w-full xl:font-normal text-breadcrumbs-text text-sm border border-none rounded-sm py-4 xl:px-4 mb-3 leading-tight focus:outline-none"
                                  type="text"
                                  value={email}
                                  onChange={e => setEmail(e.target.value)}
                                  placeholder="Email Address" />
                        </div>
                        <div class="xl:w-1/2 px-3">
                            <input 
                                 class="bg-white w-full xl:font-normal text-breadcrumbs-text text-sm border border-none rounded-sm py-4 xl:px-4 mb-3 leading-tight focus:outline-none"
                                 type="text"
                                 value={phone_number}
                                 onChange={e => setPhoneNumber(e.target.value)}
                                 placeholder="Phone Number" />
                        </div>
                    </div>

                    <div class="flex flex-wrap mb-6">
                        <div class="px-3 xl:w-full">
                            <textarea 
                                class=" no-resize appearance-none block w-full xl:font-normal bg-white text-breadcrumbs-text text-sm border-none rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none h-48 resize-none"
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                        </div>
                    </div>

                    <div class="flex flex-wrap mb-6">
                        <div class="px-3 xl:w-full flex justify-center">
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