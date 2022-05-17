import React, { Fragment } from "react";

function AboutContact() {
    return (
        <Fragment>
            <section className="object-center xl:mt-36 xl:mb-20">
                <div className="container AboutContact">
                    <div className="flex flex-basis">

                        <div className="xl:w-1/2 w-full xl:mt-7">
                            <div className="xl:p-6">
                                <p className="text-white xl:text-4xl xl:mb-6 lg:font-semibold xl:pl-28">Have any questions, <br /> feel free to ask!</p>
                            </div>
                        </div>

                        <div className="xl:w-1/2 w-full xl:mt-7 justify-center flex">
                            <div className="xl:p-6">
                                <button className="about-contact-btn bg-white xl:pt-2 xl:pb-2 xl:pl-12 xl:pr-12 xl:rounded-md xl:mt-4 xl:ml-8 text-watch-video font-normal xl:text-xl flex"> Contact us</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    );
}


export default AboutContact;