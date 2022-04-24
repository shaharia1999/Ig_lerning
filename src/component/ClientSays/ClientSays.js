import React, { Component, Fragment } from 'react';
import Client1 from "../../asset/images/client/client1.jpg";
import { FaStar } from "react-icons/fa";
class ClientSays extends Component {
    render() {
        return (
            <Fragment>
                <div className="container lg:mt-8 lg:mb-12">
                    <h4 className="text-4xl	font-semibold ml-3 text-sectionTitleColor">What Our Client Say</h4>
                    <div class="flex flex-auto lg:mt-6 p-3">

                        <div class="lg:basis-1/3 mx-4">
                            <div class="bg-white rounded-2xl shadow-client border-none lg:p-12 w-auto">
                                <img className="rounded-full h-36 w-36 mt-8 mb-12" src={Client1} />
                                <h5 class="text-base font-normal text-client-section-des leading-8 mb-4 mt-0">Lorem Ipsum is simply dummy printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</h5>
                                <ul className="flex sm:justify-center xl:justify-start mt-2">
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( 4.5 )</h6>
                                </ul>
                                <p class="text-sectionTitleColor text-2xl font-semibold">Jessica Strike</p>
                                <p class="text-client-section-des text-md mt-2">Student</p>
                            </div>
                        </div>

                        <div class="lg:basis-1/3 mx-4">
                            <div class="bg-white rounded-2xl shadow-client border-none lg:p-12 w-auto">
                                <img className="rounded-full h-36 w-36 mt-8 mb-12" src={Client1} />
                                <h5 class="text-base font-normal text-client-section-des leading-8 mb-4 mt-0">Lorem Ipsum is simply dummy printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</h5>
                                <ul className="flex sm:justify-center xl:justify-start mt-2">
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( 4.5 )</h6>
                                </ul>
                                <p class="text-sectionTitleColor text-2xl font-semibold">Jessica Strike</p>
                                <p class="text-client-section-des text-md mt-2">Student</p>
                            </div>
                        </div>


                        <div class="lg:basis-1/3 mx-4">
                            <div class="bg-white rounded-2xl shadow-client border-none lg:p-12 w-auto">
                                <img className="rounded-full h-36 w-36 mt-8 mb-12" src={Client1} />
                                <h5 class="text-base font-normal text-client-section-des leading-8 mb-4 mt-0">Lorem Ipsum is simply dummy printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</h5>
                                <ul className="flex sm:justify-center xl:justify-start mt-2">
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-.75"><FaStar className="text-amber-400" /></h6>
                                    <h6 className="mb-4 mx-1 text-sm font-normal text-client-section-des">( 4.5 )</h6>
                                </ul>
                                <p class="text-sectionTitleColor text-2xl font-semibold">Jessica Strike</p>
                                <p class="text-client-section-des text-md mt-2">Student</p>
                            </div>
                        </div>


                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ClientSays;