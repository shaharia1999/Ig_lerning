import React, { Fragment } from "react";
import 'flowbite';
function PriceBanner() {
    return (
        <Fragment>
            <div className="PriceBanner">
                <div className="container">
                    <div className="flex flex-auto">
                        <div className="xl:w-full w-full text-center object-center">
                            <h2 className="text-white xl:font-semibold xl:text-6xl text-lg font-semibold xl:mt-72 mt-20">Best-in-class features.</h2>
                            <h2 className="text-white xl:font-semibold xl:text-6xl text-lg font-semibold xl:mt-4 mt-0"> Straightforward & Transparent pricing.</h2>
                            <h2 className="text-white xl:font-semibold xl:text-2xl text-sm font-medium xl:mt-3 mt-0">Invest in your future!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default PriceBanner;