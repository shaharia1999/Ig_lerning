import React, { Fragment } from "react";

function PriceContactSectionMobile(){
   return(
    <Fragment>
         <section className="object-center sm:mt-20 mt-16">
                <div className="container PriceContact">
                    <div className="flex flex-wrap">

                        <div className="w-full sm:mt-12 mt-8">
                            <div className="p-6 text-center">
                                <p className="text-white sm:text-3xl text-2xl font-semibold">Have any questions, <br /> feel free to ask!</p>
                            </div>
                        </div>

                        <div className="w-full sm:mt-96 mt-64 justify-center flex">
                            <div className="p-6 rounded-2xl">
                                <button className="about-contact-btn bg-white sm:pt-4 sm:pb-4 sm:pl-12 sm:pr-12 pt-3 pb-3 pl-10 pr-10 rounded-md text-maincolor font-normal sm:text-lg text-sm flex"> Contact us</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    </Fragment>
   )
}
export default PriceContactSectionMobile;