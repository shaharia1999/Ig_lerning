import React, { Fragment } from "react";

function ContactTrainer() {
    return (
        <Fragment>
            <div className="bg-breadcrumbs  rounded-xl xl:p-6">
                <h6 className="text-maingray xl:font-medium xl:text-2xl text-center xl:mt-8">Contact Nicola for a Personalized Training.</h6>
                <h6 className="text-center xl:text-base xl:pl-32 xl:pr-32 xl:mt-5 xl:mb-5">Fill in the form and we’ll analyse your website and get back to you with 100% specific recommendations on how to improve it</h6>
                <form class="">
                    <div class="flex flex-basis mb-6">
                        <div class="xl:w-6/12 px-3 mb-6 xl:mb-0">
                            <input class="bg-white w-full xl:font-normal text-breadcrumbs-text text-sm border border-none rounded-sm py-4 xl:px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="Name" />
                        </div>
                        <div class="xl:w-6/12 px-3">
                            <input class="bg-white w-full xl:font-normal text-breadcrumbs-text text-sm border border-none rounded-sm py-4 xl:px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="Surename" />
                        </div>
                    </div>

                    <div class="flex flex-wrap mb-6">
                        <div class="xl:w-1/2 px-3 mb-6 xl:mb-0">
                            <input class="bg-white w-full xl:font-normal text-breadcrumbs-text text-sm border border-none rounded-sm py-4 xl:px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="Email Address" />
                        </div>
                        <div class="xl:w-1/2 px-3">
                            <input class="bg-white w-full xl:font-normal text-breadcrumbs-text text-sm border border-none rounded-sm py-4 xl:px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="Phone Number" />
                        </div>
                    </div>

                    <div class="flex flex-wrap mb-6">
                        <div class="px-3 xl:w-full">
                            <textarea class=" no-resize appearance-none block w-full xl:font-normal bg-white text-breadcrumbs-text text-sm border-none rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none h-48 resize-none" placeholder="Message"></textarea>
                        </div>
                    </div>

                    <div class="flex flex-wrap mb-6">
                        <div class="px-3 xl:w-full flex justify-center">
                            <button className="bg-maincolor border-none rounded-md text-white xl:text-lg xl:h-14 xl:w-72">SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default ContactTrainer;