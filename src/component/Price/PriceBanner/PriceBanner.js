import React, { Fragment } from "react";
import 'flowbite';
function PriceBanner() {
    return (
        <Fragment>
            <div className="PriceBanner">
                <div className="container">
                    <div className="flex flex-auto">
                        <div className="xl:w-full w-full text-center object-center">
                            <h2 className="text-white xl:font-semibold 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold xl:mt-72 lg:mt-56 md:mt-44 sm:mt-36 mt-28">Best-in-class features.</h2>
                            <h2 className="text-white xl:font-semibold 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold xl:mt-4 lg:mt-3 md:mt-2 mt-1"> Straightforward & Transparent pricing.</h2>
                            <h2 className="text-white xl:font-semibold 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-base text-sm font-medium xl:mt-3 lg:mt-3 md:mt-2 mt-1">Invest in your future!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default PriceBanner;