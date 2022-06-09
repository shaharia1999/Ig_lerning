import React, { Fragment } from "react";
import 'flowbite';
function PriceBanner() {
    return (
        <Fragment>
            <div className="PriceBanner">
                <div className="container">
                    <div className="flex flex-auto">
                        <div className="xl:w-full text-center object-center">
                            <h2 className="text-white xl:font-semibold xl:text-6xl xl:mt-72">Best-in-class features.</h2>
                            <h2 className="text-white xl:font-semibold xl:text-6xl xl:mt-4">  Straightforward & Transparent pricing.</h2>
                            <h2 className="text-white xl:font-semibold xl:text-2xl xl:mt-3">Invest in your future!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default PriceBanner;