import React, { Fragment } from "react";

function PriceContactSection() {
    return (
        <Fragment>
            <section className="object-center xl:mt-24 lg:mt-24 xl:mb-20 lg:mb-20">
                <div className="container PriceContact">
                    <div className="flex flex-basis">

                        <div className="xl:w-1/2 lg:w-1/2 w-full xl:mt-7 lg:mt-12 md:mt-8">
                            <div className="xl:p-6">
                                <p className="text-white xl:text-4xl lg:text-3xl md:text-2xl xl:mb-6 md:font-semibold xl:pl-28 lg:pl-20 md:pl-16">Have any questions, <br /> feel free to ask!</p>
                            </div>
                        </div>

                        <div className="xl:w-1/2 lg:w-1/2 w-full 2xl:mt-10 xl:mt-7 lg:mt-12 md:mt-12 justify-center flex">
                            <div className="xl:p-6 lg:p-5 rounded-2xl">
                                <button className="about-contact-btn bg-white 3xl:pt-3 3xl:pb-3 3xl:pl-12 3xl:pr-12 xl:pt-2 xl:pb-2 xl:pl-12 xl:pr-12 lg:pt-2 lg:pb-2 lg:pl-8 lg:pr-8 md:pt-2 md:pb-2 md:pl-5 md:pr-5 md:rounded-md xl:mt-4 xl:ml-12 lg:ml-12 md:ml-16 text-maincolor font-normal xl:text-xl md:text-sm flex"> Contact us</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    );
}


export default PriceContactSection;